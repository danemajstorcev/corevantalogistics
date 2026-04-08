import React, { useState } from "react";
import type { ContactForm } from "../types";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

const EMAILJS_SERVICE_ID  = "service_rfflfn7";
const EMAILJS_TEMPLATE_ID = "template_mgkumla"; // 👈 EmailJS → Email Templates
const EMAILJS_PUBLIC_KEY  = "rQQZek4yyFS7RSgr8";  // 👈 EmailJS → Account → API Keys


const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  phone: "",
  trucks: "1",
  message: "",
};

const ContactPage: React.FC = () => {
  const [form, setForm]       = useState<ContactForm>(INITIAL_FORM);
  const [sent, setSent]       = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone || "Not provided",
          trucks:     form.trucks,
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setSent(true);
      setForm(INITIAL_FORM);
      setTimeout(() => setSent(false), 4500);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  };

  const contactItems = [
    {
      icon: "📧",
      label: "Email",
      val: "info@corevantalogistics.com",
      href: "mailto:info@corevantalogistics.com",
    },
    {
      icon: "📱",
      label: "Phone",
      val: "+1 (217) 405-7377",
      href: "tel:+12174057377",
    },
    {
      icon: "🕐",
      label: "Availability",
      val: "24/7 for active carriers\nResponse within 2 hrs",
      href: null,
    },
    {
      icon: "🌍",
      label: "Coverage",
      val: "All 48 Continental States",
      href: null,
    },
  ];

  return (
    <div className="page contact-page">
      <section className="section">
        <div className="section-label">Let's Talk</div>
        <h2 className="section-title">Ready to Move More Loads?</h2>
        <p className="section-body">
          Reach out and I'll get back to you within 2 business hours. No
          pressure, just a real conversation about your operation.
        </p>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            {contactItems.map((item) => (
              <div key={item.label} className="contact__item card">
                <span className="contact__ico">{item.icon}</span>
                <div>
                  <div className="contact__item-label">{item.label}</div>
                  <div className="contact__item-val">
                    {item.href ? (
                      <a href={item.href} className="contact__item-link">
                        {item.val}
                      </a>
                    ) : (
                      item.val.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.val.split("\n").length - 1 && <br />}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <input
              required
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Phone Number (optional)"
              value={form.phone}
              onChange={handleChange}
            />
            <select name="trucks" value={form.trucks} onChange={handleChange}>
              <option value="1">1 Truck — Owner-Operator</option>
              <option value="2-3">2–3 Trucks</option>
              <option value="4-7">4–7 Trucks</option>
              <option value="8+">8+ Trucks (Fleet)</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell me about your operation and what you're looking for..."
              value={form.message}
              onChange={handleChange}
            />

            {error && <p className="contact__error">{error}</p>}

            <button type="submit" className="btn-primary" disabled={sending}>
              {sending ? "Sending…" : "Send Message →"}
            </button>
          </form>
        </div>
      </section>

      {sent && (
        <div className="toast" role="status">
          ✅ Message sent! I'll be in touch within 2 hours.
        </div>
      )}
    </div>
  );
};

export default ContactPage;