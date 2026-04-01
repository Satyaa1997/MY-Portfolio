import { useState } from "react";
import { send } from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // ✅ Direct env values (no fallback now)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // ❗ Proper validation
    if (!serviceId || !templateId || !publicKey) {
      setStatus("❌ EmailJS not configured properly");
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        mobile: formData.mobile,
        message: formData.message
      };

      const result = await send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({
          name: "",
          mobile: "",
          email: "",
          message: ""
        });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending message");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Send</button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
}