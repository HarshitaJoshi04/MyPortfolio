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
    <div
      className={`relative min-h-screen overflow-hidden py-20 lg:py-28 `}
    >
      {!isDark && (
        <>
          <div className="absolute -top-40 -left-40 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-sky-200/60 blur-[110px] sm:blur-[150px]" />
          <div className="absolute top-1/3 -right-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full bg-indigo-200/60 blur-[120px] sm:blur-[170px]" />
          <div className="absolute bottom-0 left-1/3 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full bg-cyan-200/40 blur-[110px] sm:blur-[140px]" />
        </>
      )}

      {/* Blue Glow */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        w-[220px] h-[220px]
        sm:w-[500px] sm:h-[500px]
        md:w-[650px] md:h-[650px]
        lg:w-[850px] lg:h-[850px]
        rounded-full blur-[120px] sm:blur-[180px]
        ${
          isDark
            ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 opacity-40"
            : "bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 opacity-70"
        }`}
      />

      <section
        id="contact"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12"
      >
        {/* Card wrapper */}
        <div
          className={`relative overflow-hidden w-full rounded-[28px] sm:rounded-[36px] border backdrop-blur-xl shadow-2xl transition-all duration-500 ${
            isDark
              ? "bg-white/[0.03] border-white/10 shadow-black/40"
              : "bg-white/50 border-white/70 shadow-blue-200/40"
          }`}
        >
          {/* Grid pattern lives inside the card only */}
          <div
            className={`absolute inset-0 pointer-events-none ${
              isDark
                ? "bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(30,41,59,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(30,41,59,0.06)_1px,transparent_1px)]"
            } bg-[size:22px_22px] xs:bg-[size:28px_28px] sm:bg-[size:40px_40px] lg:bg-[size:60px_60px]`}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 p-5 sm:p-10 lg:p-14">
            {/* LEFT */}
            <div className="flex flex-col justify-center text-center lg:text-left">
              <span className="uppercase tracking-[3px] sm:tracking-[5px] text-blue-500 text-[10px] sm:text-xs font-semibold">
                Contact
              </span>

              <div className="mt-3">
                <H1
                  text="Let's Work Together"
                  duration={0.6}
                  delay={0}
                  stagger={0.15}
                  isDark={isDark}
                />
              </div>

              <p
                className={`mt-6 leading-7 sm:leading-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                Have a project in mind or just want to say hello? I'd love to
                hear from you. Fill out the form and I'll get back to you as
                soon as possible.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                <div
                  className={`rounded-2xl p-5 backdrop-blur-md border ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/70 border-white shadow-lg shadow-blue-100"
                  }`}
                >
                  <p className="text-xs text-slate-400">Email</p>
                  <h3 className="font-semibold mt-2 text-sm break-all">
                    hjoshikspuk04@email.com
                  </h3>
                </div>

                <div
                  className={`rounded-2xl p-5 backdrop-blur-md border ${
                    isDark
                      ? "bg-slate-900/70 border-white/10 text-white"
                      : "bg-white/70 border-white shadow-lg shadow-blue-100"
                  }`}
                >
                  <p className="text-xs text-slate-400">Location</p>
                  <h3 className="font-semibold text-sm mt-2">India 🇮🇳</h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <form onSubmit={submitHandle} className="space-y-5">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
                placeholder="Your Name"
                className={`w-full px-5 py-4 rounded-2xl border outline-none transition ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-blue-500"
                    : "bg-white/70 border-white/70 focus:border-blue-500"
                }`}
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                className={`w-full px-5 py-4 rounded-2xl border outline-none transition ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-blue-500"
                    : "bg-white/70 border-white/70 focus:border-blue-500"
                }`}
              />

              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project..."
                className={`w-full px-5 py-4 rounded-2xl border outline-none resize-none transition ${
                  isDark
                    ? "bg-white/[0.03] border-white/10 text-white placeholder-slate-500 focus:border-blue-500"
                    : "bg-white/70 border-white/70 focus:border-blue-500"
                }`}
              />

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] active:scale-95 transition shadow-xl shadow-blue-500/20"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;