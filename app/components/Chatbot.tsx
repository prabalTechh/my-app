import { useState } from "react";

interface Message {
  content: string;
  role: "user" | "assistant";
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = { content: input, role: "user" };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await getOpenAIResponse(updatedMessages);
      setMessages([
        ...updatedMessages,
        { content: response, role: "assistant" },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getOpenAIResponse = async (userInput: Message[]): Promise<string> => {
    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch OpenAI response");
      }

      const data = await response.json();
      return data.output;
    } catch (error) {
      console.error("API Error:", error);
      return "Sorry, there was an issue processing your request.";
    }
  };

  return (
    <div className="overflow-y-auto p-10 rounded-md max-w-3xl mx-auto border">
      <span className="uppercase font-semibold text-blue-600">Chatbot</span>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.role === "assistant" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <span className="font-bold">{`${message.role}: `}</span>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <div className="pt-5 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-md text-black bg-transparent focus:outline-none"
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
}
