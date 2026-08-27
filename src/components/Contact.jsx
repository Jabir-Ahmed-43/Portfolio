import {
  AlertCircle,
  CheckCircle,
  FileText,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import { Github, Linkedin } from "./Icons";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const contactChips = [
    {
      label: "Email Me",
      value: "jabir.ahmed484@gmail.com",
      href: "mailto:jabir.ahmed484@gmail.com",
      icon: <Mail size={18} className="text-accent" />,
    },
    {
      label: "LinkedIn",
      value: "Jabir Ahmed",
      href: "https://www.linkedin.com/in/jabir-ahmed-mja43/",
      icon: <Linkedin size={18} className="text-accent" />,
    },
    {
      label: "GitHub",
      value: "Jabir Ahmed",
      href: "https://github.com/jabir-ahmed-43",
      icon: <Github size={18} className="text-accent" />,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: "#",
      icon: <FileText size={18} className="text-accent" />,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-cream dark:bg-navy-mid/30 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3 justify-center">
            <span className="w-6 h-[1px] bg-accent"></span>
            Contact
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-navy dark:text-cream font-bold leading-tight mb-4">
            Let's build something together
          </h2>
          <p className="text-sm md:text-base text-text-muted dark:text-gray-400 max-w-xl mx-auto">
            I'm actively looking for internships and collaborative project
            opportunities. Feel free to reach out — I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details List */}
          <div className="lg:col-span-5 space-y-4">
            {contactChips.map((chip, idx) => (
              <a
                key={idx}
                href={chip.href}
                target={chip.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  chip.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-4 bg-white dark:bg-navy border border-gray-150 dark:border-accent/10 rounded-custom p-4 hover:border-accent/40 dark:hover:border-accent/30 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-accent-pale dark:bg-navy-light rounded-custom flex items-center justify-center transition-transform duration-350 group-hover:scale-105">
                  {chip.icon}
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-text-muted dark:text-gray-400 font-semibold">
                    {chip.label}
                  </span>
                  <span className="text-sm font-semibold text-navy dark:text-cream">
                    {chip.value}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form Box */}
          <div className="lg:col-span-7 bg-white dark:bg-navy border border-gray-150 dark:border-accent/10 rounded-custom-lg p-6 md:p-8 shadow-sm">
            {submitSuccess && (
              <div className="flex items-center gap-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 p-4 rounded-custom mb-6 animate-fade-in">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">
                  Message sent successfully! I will get back to you soon.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name field */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                  >
                    <User size={12} className="text-accent" />
                    <span>Your Name</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-200 dark:border-accent/15"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={10} />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                  >
                    <Mail size={12} className="text-accent" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-200 dark:border-accent/15"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={10} />
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                >
                  <MessageSquare size={12} className="text-accent" />
                  <span>Subject (Optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Enter the subject"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border border-gray-200 dark:border-accent/15 text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                >
                  <MessageSquare size={12} className="text-accent" />
                  <span>Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-200 dark:border-accent/15"
                  }`}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-500 flex items-center gap-1 mt-0.5">
                    <AlertCircle size={10} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-mid text-accent-light dark:bg-accent dark:text-navy dark:hover:bg-accent-light font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-custom transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
