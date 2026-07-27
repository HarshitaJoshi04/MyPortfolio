import { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import { Theme } from "../components/themecontext/ThemeContext";
import H1 from "../components/headingAnimation/H1";

const Contact = () => {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [theme] = useContext(Theme);
  const isDark = theme === "Dark";

  const submitHandle = (e) => {
    e.preventDefault();

    if (!text || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const templateParams = {
      from_name: text,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_mcospxx",
        "template_zcgl4ql",
        templateParams,
        "OWfa3PnctzOOuZz0N"
      )
      .then(() => {
        alert("Message sent successfully!");
        setText("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message");
      });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-24">
      <section
        id="contact"
        className="relative z-10 flex items-center justify-center w-full px-4"
      >
        <form
          onSubmit={submitHandle}
          className={`w-full max-w-md space-y-4 text-center p-8 md:p-10 rounded-3xl border transition-all duration-500 ${
            isDark
              ? "bg-slate-900/60 border-slate-800/80 text-white shadow-2xl shadow-black/20"
              : "bg-white/80 border-slate-200/80 text-slate-800 shadow-xl shadow-slate-200/50"
          } backdrop-blur-md`}
        >
          <H1
            text="Get In Touch"
            duration={0.6}
            delay={0}
            isDark={isDark}
            stagger={0.2}
          />

          <p className={`text-center text-sm md:text-base mb-6 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}>
            Let’s build something amazing together.
          </p>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Your Name"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
              isDark
                ? "bg-slate-950/40 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-950/60"
                : "bg-slate-50/50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white"
            }`}
          />

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none ${
              isDark
                ? "bg-slate-950/40 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-950/60"
                : "bg-slate-50/50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white"
            }`}
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            placeholder="Your Message"
            className={`w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none resize-none ${
              isDark
                ? "bg-slate-950/40 border-slate-800 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-950/60"
                : "bg-slate-50/50 border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:bg-white"
            }`}
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 transform active:scale-95 shadow-md shadow-blue-500/10 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;