import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Prefer Vite env variables if you've added them (VITE_ prefix). Falls back to hardcoded values.
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_e3exjuv";
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_u5nvn64";
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Xf8aSKaRglyLe9hs5";

  useEffect(() => {
    // Initialize EmailJS (optional if you pass public key to sendForm)
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (e) {
        // init can throw if already initialized in some envs; ignore
      }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          if (form.current) form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully ! ✅", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          setIsSending(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" data-reveal className="py-20">
      <div className="page-container flex justify-center">
        <div className="mt-8 w-full max-w-md">
          <h3 className="text-2xl font-semibold text-[var(--text)] text-center">Contact</h3>
          <p className="mt-2 text-[var(--muted)] text-center">
            Interested in working together? Send a concise message and I’ll respond shortly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-6 flex flex-col space-y-3">
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="A short message (what you’re looking for)"
              rows="4"
              required
              className="w-full p-3 rounded-md border border-gray-200 focus:outline-none"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`inline-flex items-center justify-center rounded-md bg-[var(--accent)] text-white px-4 py-2 text-sm font-medium transition-opacity duration-200 ${
                isSending ? "opacity-70 cursor-not-allowed" : "hover:opacity-95"
              }`}
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
