import React, { useState } from "react";
import type { ContactForm } from "../types";
import "./ContactPage.css";

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  phone: "",
  trucks: "1",
  message: "",
};

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setSent(false), 4500);
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
              <div className="contact__item card">
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
            <button type="submit" className="btn-primary">
              Send Message →
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
