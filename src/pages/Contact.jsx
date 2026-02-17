import { useContext, useState } from "react";

import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";

const Contact = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    setText("");
    setEmail("");
    setMessage("");
  };

  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <section
        id="contact"
        className=" min-h-screen flex items-center   justify-center px-6 py-20"
      >
        {/* Form */}
        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
          className={`space-y-2 text-center ${
            isDark ? "bg-white" : "bg-white"
          } rounded-2xl shadow-2xl p-8`}
        >
          <H1
            text="Get In Touch"
            duration={0.6}
            delay={0}
            isDark={isDark}
            stagger={0.2}
          />
          <p className=" text-center text-black mb-8">
            Let’s build something amazing together.
          </p>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-400 border border-gray-400 text-black focus:outline-none focus:border-white transition"
          />

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-400 border border-gray-400 text-black focus:outline-none focus:border-white transition"
          />

          <textarea
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-gray-400 border border-gray-400 text-black focus:outline-none focus:border-white transition "
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gray-600 text-white font-semibold py-3 rounded-lg hover:bg-gray-500 hover:scale-95 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
