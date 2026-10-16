import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = ({ active, closeMenu }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  // Prefer Vite env variables if you've added them (VITE_ prefix). Falls back to hardcoded values.
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_e3exjuv';
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_u5nvn64';
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Xf8aSKaRglyLe9hs5';

  useEffect(() => {
    if (PUBLIC_KEY) {
      try { emailjs.init(PUBLIC_KEY); } catch (e) { /* ignore */ }
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
      .then(() => {
        setIsSending(false);
        if (form.current) form.current.reset();
        toast.success('Message sent successfully ✅', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        setIsSending(false);
        toast.error('Failed to send message. Please try again.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      });
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className={`full-section black reveal ${active === 'contact' ? 'visible' : ''}`}
    >
      <div className="section-inner">
        <div className="section-header reveal">
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-desc">
            Interested in working together? Send a concise message and I’ll respond shortly.
          </p>
        </div>

        <div className="contact-grid reveal stagger">
          <div className="contact-info">
            <h3>Let’s talk.</h3>
            <p>
              Whether it’s a project, collaboration, or opportunity — I’d love to hear from you.
              Fill out the form or reach me directly through the details below.
            </p>

            <div className="contact-item">
              <div className="contact-item-icon">✉</div>
              <div className="contact-item-text">
                <strong>Email</strong>
                <a href="mailto:riteshsahani777@gmail.com">riteshsahani777@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div className="contact-item-text">
                <strong>Location</strong>
                <span>Nepal</span>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="A short message (what you’re looking for)"
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`btn btn-primary w-full ${
                  isSending ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-95'
                }`}
              >
                {isSending ? 'Sending...' : 'Send message'}
              </button>
            </form>

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
