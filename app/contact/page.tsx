"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building, User } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    if (!allFilled) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("❌ API Error Response:", data);
        alert("Error: " + (data?.error || "Something went wrong."));
      } else if (!data.success) {
        console.error("⚠️ API Success=false:", data);
        alert("Server did not complete the action.");
      } else {
        console.log("✅ API Success:", data);
        setSubmitted(true);
      }
    } catch (err: any) {
      console.error("❌ Frontend Exception:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center bg-gradient-to-b from-gray-50 to-white py-28 px-4 sm:px-8">
      {/* ↑↑↑ increased space before heading */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-18 text-gray-900">
          Let’s work together
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8 ">
          Whether you have an idea, a project, or just want to say hello — I’m always open to meaningful conversations and collaborations. No matter how big or small your thoughts may be, every interaction holds the potential to spark new insights and connections. Whether you’re seeking advice, exploring possibilities, or simply reaching out to share your story, I welcome your voice. Conversations fuel creativity and growth, and I’m genuinely excited to listen, learn, and collaborate with anyone who’s passionate about making a difference. So don’t hesitate to share your vision, ask questions, or even just say hi — together, we can transform ideas into something impactful and meaningful.
        </p>

        <div className="bg-white p-8 shadow-xl rounded-2xl">
          {submitted ? (
            <div className="text-center text-green-700 space-y-3">
              <h2 className="text-2xl font-semibold">Thank you!</h2>
              <p>I’ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                icon={<User className="w-4 h-4 text-gray-500" />}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail className="w-4 h-4 text-gray-500" />}
              />
              <InputField
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                icon={<Building className="w-4 h-4 text-gray-500" />}
              />
              <InputField
                label="Phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                icon={<Phone className="w-4 h-4 text-gray-500" />}
              />
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="What would you like to discuss?"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-15">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Want to collaborate or just chat?
          </h2>
          <a
            href="mailto:mudassirahmed915171@email.com"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition-all text-sm font-medium"
          >
            Drop me an email
          </a>

          {/* Get in touch section */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Get in touch
            </h3>
            <p className="text-base text-gray-600 mb-4">
              If you prefer a more direct conversation, fill the form above. I value thoughtful discussions and am always eager to hear unique perspectives or questions.
            </p>
            <div className="text-sm text-gray-800 italic">
              “Every new conversation is a chance to create meaningful impact.”
            </div>
          </div>

         
        </div>
      </motion.div>
    </section>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  icon,
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  type?: string;
  icon?: React.ReactNode;
}) => (
  <div className="relative">
    <label
      htmlFor={name}
      className="block mb-1 text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute inset-y-0 left-3 flex items-center">
          {icon}
        </span>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black text-sm"
      />
    </div>
  </div>
);

export default ContactPage;
