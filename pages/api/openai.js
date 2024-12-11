import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { input } = req.body;

    if (!input || !Array.isArray(input)) {
      return res.status(400).json({ error: "Invalid input format. 'input' must be an array." });
    }

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: input,
          max_tokens: 50,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const output =
        response.data.choices[0]?.message?.content?.trim() || "Sorry, I do not understand.";
      res.status(200).json({ output });
    } catch (error) {
      console.error("Error from OpenAI API:", error.response?.data || error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
