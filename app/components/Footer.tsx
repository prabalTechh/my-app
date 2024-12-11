const Footer = () => {
    return (
      <footer className="bg-blue-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Let's Work Together Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Let’s Work Together</h2>
            <p>Phone</p>
            <p>+919266537839</p>
            <p>info@vriddhi.media</p>
          </div>
  
          {/* Get in the Know Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Get in the Know</h2>
            <form>
              <label htmlFor="email" className="sr-only">Enter your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email *"
                className="w-full border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 mb-4 pb-2"
              />
              <button
                type="submit"
                className="bg-transparent border border-white px-4 py-2 rounded hover:bg-gray-200 hover:text-blue-700 transition"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
  
          {/* Stay in Touch Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Stay in Touch</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 pb-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 pb-2"
              />
              <input
                type="email"
                placeholder="Email *"
                className="col-span-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 pb-2"
              />
              <input
                type="text"
                placeholder="Subject"
                className="col-span-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 pb-2"
              />
              <textarea
                placeholder="Leave us a message..."
                rows={4}
                className="col-span-2 border-b-2 border-white bg-transparent text-white focus:outline-none focus:border-gray-200 pb-2"
              ></textarea>
              <button
                type="submit"
                className="col-span-2 bg-transparent border border-white px-4 py-2 rounded hover:bg-gray-200 hover:text-blue-700 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm">
          © 2035 by George Lambert. Powered and secured by{" "}
          <a href="https://www.wix.com" className="underline">
            Wix
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  