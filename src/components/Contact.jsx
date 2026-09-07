import {
  AlertCircle,
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  FileText,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  RotateCcw,
  Send,
  Sparkles,
  User,
} from "lucide-react";
import { useState } from "react";
import { Github, Linkedin } from "./Icons";

const RECIPIENT_EMAIL = "jabir.ahmed484@gmail.com";

const TOPICS = [
  {
    id: "Internship",
    label: "Internship Opportunity",
    placeholder: "Frontend / Full-Stack Internship Role",
  },
  {
    id: "Web Dev",
    label: "Web Development",
    placeholder: "Website / Web Application Project",
  },
  {
    id: "Collaboration",
    label: "Collaboration",
    placeholder: "Open Source / Team Project",
  },
  {
    id: "General",
    label: "Say Hello",
    placeholder: "Quick Question or Just Saying Hi",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Internship",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const selectedTopic =
    TOPICS.find((t) => t.id === formData.topic) || TOPICS[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RECIPIENT_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      tempErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleTopicSelect = (topicId) => {
    setFormData((prev) => ({ ...prev, topic: topicId }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    const finalSubject =
      formData.subject.trim() ||
      `[Portfolio - ${selectedTopic.label}] Message from ${formData.name.trim()}`;

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            category: selectedTopic.label,
            subject: finalSubject,
            message: formData.message.trim(),
            _replyto: formData.email.trim(),
            _subject: `New Portfolio Message from ${formData.name.trim()} (${selectedTopic.label})`,
            _captcha: "false",
            _template: "table",
          }),
        },
      );

      const data = await response.json().catch(() => ({}));

      if (
        response.ok &&
        (data.success === "true" ||
          data.success === true ||
          response.status === 200)
      ) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          topic: "Internship",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(
          data.message || "Failed to deliver message via form server.",
        );
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err.message ||
          "Could not connect to the mail server. You can send directly via your email app.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      formData.subject.trim() ||
        `Portfolio Inquiry - ${formData.name || "Client"}`,
    );
    const body = encodeURIComponent(
      `Hi Jabir,\n\n${formData.message.trim() || "I would like to discuss an opportunity with you."}\n\nBest regards,\n${formData.name || "Client"}\n${formData.email || ""}`,
    );
    return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-cream dark:bg-[#091119] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent/5 dark:bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 -left-48 w-96 h-96 bg-navy-mid/5 dark:bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-accent uppercase mb-3 justify-center">
            <span className="w-6 h-[1px] bg-accent"></span>
            <Sparkles size={13} className="text-accent" />
            <span>Get In Touch</span>
            <span className="w-6 h-[1px] bg-accent"></span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-navy dark:text-cream font-bold leading-tight mb-4">
            Let's build something exceptional
          </h2>
          <p className="text-sm md:text-base text-text-muted dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Have an internship opening, a project idea, or simply want to
            connect? Send me a direct message and it will be delivered straight
            to my inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Connect & Availability Hub */}
          <div className="lg:col-span-5 space-y-6">
            {/* Status & Availability Badge Card */}
            <div className="bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Open for Opportunities
                </span>
              </div>
              <p className="text-sm text-navy dark:text-gray-200 font-medium">
                Actively seeking internships, junior developer roles, and
                freelance collaborations.
              </p>
            </div>

            {/* Interactive Email Direct Card */}
            <div className="bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider text-text-muted dark:text-gray-400 font-semibold flex items-center gap-1.5">
                  <Mail size={14} className="text-accent" /> Direct Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-navy dark:text-accent hover:text-accent transition-colors font-medium px-2 py-1 rounded bg-gray-50 dark:bg-navy-mid border border-gray-200 dark:border-accent/20 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${RECIPIENT_EMAIL}`}
                className="text-base md:text-lg font-bold text-navy dark:text-cream hover:text-accent dark:hover:text-accent transition-colors block break-all font-mono"
              >
                {RECIPIENT_EMAIL}
              </a>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-accent/10">
                <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-400">
                  <Clock size={14} className="text-accent shrink-0" />
                  <span>Replies in &lt; 24h</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-text-muted dark:text-gray-400">
                  <MapPin size={14} className="text-accent shrink-0" />
                  <span>Sylhet, BD (GMT+6)</span>
                </div>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-wider text-text-muted dark:text-gray-400 font-semibold block px-1">
                Connect Online
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://www.linkedin.com/in/jabir-ahmed-mja43/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom hover:border-accent/40 dark:hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin
                      size={18}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-semibold text-navy dark:text-cream">
                      LinkedIn
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted dark:text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                <a
                  href="https://github.com/jabir-ahmed-43"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom hover:border-accent/40 dark:hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <Github
                      size={18}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-semibold text-navy dark:text-cream">
                      GitHub
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-text-muted dark:text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>

                <a
                  href="/resume.pdf"
                  download="Jabir_Ahmed_Resume.pdf"
                  className="flex items-center justify-between p-3.5 bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom hover:border-accent/40 dark:hover:border-accent/40 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText
                      size={18}
                      className="text-accent group-hover:scale-110 transition-transform"
                    />
                    <span className="text-xs font-semibold text-navy dark:text-cream">
                      Resume
                    </span>
                  </div>
                  <Download
                    size={14}
                    className="text-text-muted dark:text-gray-400 group-hover:text-accent group-hover:translate-y-0.5 transition-all"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-navy border border-gray-150 dark:border-accent/15 rounded-custom-lg p-6 md:p-8 shadow-sm">
            {/* Success View */}
            {submitStatus === "success" ? (
              <div className="py-8 text-center space-y-5 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50 dark:ring-emerald-900/20">
                  <CheckCircle2 size={36} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy dark:text-cream mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-text-muted dark:text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your message has been forwarded
                    to{" "}
                    <span className="font-mono font-semibold text-accent">
                      {RECIPIENT_EMAIL}
                    </span>
                    . I will get back to you as soon as possible.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitStatus(null)}
                  className="inline-flex items-center gap-2 bg-navy hover:bg-navy-mid text-accent-light dark:bg-accent dark:text-navy dark:hover:bg-accent-light font-bold text-xs tracking-wider uppercase px-6 py-3 rounded-custom transition-all"
                >
                  <RotateCcw size={14} />
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Topic Selector */}
                <div>
                  <label className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5 mb-2.5">
                    <Briefcase size={13} className="text-accent" />
                    <span>What can I help you with?</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TOPICS.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => handleTopicSelect(topic.id)}
                        className={`text-xs py-2 px-3 rounded-custom border font-medium text-center transition-all cursor-pointer truncate ${
                          formData.topic === topic.id
                            ? "bg-navy text-accent-light border-navy dark:bg-accent dark:text-navy dark:border-accent font-bold shadow-sm"
                            : "bg-gray-50 dark:bg-navy-mid/40 text-navy dark:text-cream border-gray-200 dark:border-accent/15 hover:border-accent/40"
                        }`}
                      >
                        {topic.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                    >
                      <User size={13} className="text-accent" />
                      <span>Your Name</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Alex Smith"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                        errors.name
                          ? "border-red-500 dark:border-red-500 bg-red-50/20"
                          : "border-gray-200 dark:border-accent/15"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} />
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
                      <Mail size={13} className="text-accent" />
                      <span>Email Address</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent transition-colors ${
                        errors.email
                          ? "border-red-500 dark:border-red-500 bg-red-50/20"
                          : "border-gray-200 dark:border-accent/15"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                        <AlertCircle size={11} />
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                    >
                      <MessageSquare size={13} className="text-accent" />
                      <span>Subject</span>
                    </label>
                    <span className="text-[10px] text-text-muted dark:text-gray-400">
                      Optional
                    </span>
                  </div>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder={`e.g., ${selectedTopic.placeholder}`}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border border-gray-200 dark:border-accent/15 text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-navy dark:text-cream uppercase tracking-wide flex items-center gap-1.5"
                    >
                      <MessageSquare size={13} className="text-accent" />
                      <span>Message</span>
                      <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] text-text-muted dark:text-gray-400">
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your role, project requirements, timeline, or just say hello..."
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-navy-mid/30 border text-sm rounded-custom text-navy dark:text-cream focus:outline-none focus:ring-1 focus:ring-accent resize-none transition-colors ${
                      errors.message
                        ? "border-red-500 dark:border-red-500 bg-red-50/20"
                        : "border-gray-200 dark:border-accent/15"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 flex items-center gap-1 mt-0.5">
                      <AlertCircle size={11} />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Error Banner & Mailto Fallback */}
                {submitStatus === "error" && (
                  <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/50 p-4 rounded-custom space-y-3 animate-fade-in">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle
                        size={18}
                        className="text-red-600 dark:text-red-400 shrink-0 mt-0.5"
                      />
                      <div>
                        <p className="text-xs font-semibold text-red-800 dark:text-red-300">
                          {errorMessage ||
                            "Unable to send message directly through the form."}
                        </p>
                        <p className="text-[11px] text-red-600 dark:text-red-400 mt-1">
                          You can still send this message directly via your
                          email client without losing your message:
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 pt-1">
                      <a
                        href={generateMailtoUrl()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-custom transition-colors"
                      >
                        <Mail size={13} />
                        <span>Send via Email Client</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus(null)}
                        className="text-xs text-text-muted hover:text-navy dark:hover:text-cream underline"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-mid text-accent-light dark:bg-accent dark:text-navy dark:hover:bg-accent-light font-bold text-sm tracking-wider uppercase px-6 py-4 rounded-custom transition-all duration-200 shadow-sm disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer group"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2
                        size={16}
                        className="animate-spin text-accent-light dark:text-navy"
                      />
                      <span>Sending to {RECIPIENT_EMAIL}...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={15}
                        className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-text-muted dark:text-gray-400">
                  Messages are sent directly to{" "}
                  <span className="font-mono text-navy dark:text-cream">
                    {RECIPIENT_EMAIL}
                  </span>
                  . No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
