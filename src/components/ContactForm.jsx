import { useState } from "react";


function Button({ children, className = "", size = "md", ...props }) {
  const sizeClass =
    size === "lg" ? "py-3 px-5 text-base" : size === "sm" ? "py-1.5 px-3 text-sm" : "py-2 px-4 text-sm";
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm transition-opacity disabled:opacity-60 ${sizeClass} ${className}`}
    >
      {children}
    </button>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  );
}

function Textarea(props) {
  return (
    <textarea
      {...props}
      className="w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
    />
  );
}

function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
      {children}
    </label>
  );
}


function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M3 7.5v9A2.5 2.5 0 0 0 5.5 19h13A2.5 2.5 0 0 0 21 16.5v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 7.5L12 13 3 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.64 19.64 0 0 1-8.63-3.07 19.36 19.36 0 0 1-6-6 19.64 19.64 0 0 1-3.07-8.63A2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12 1.21.48 2.4 1.06 3.5a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.1.58 2.29.94 3.5 1.06A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function SendIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 2l-7 20 3-7 7-7-3-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // "idle" | "success" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic front-end validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 2500);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate an async submission (replace with fetch/axios to send real requests)
    try {
      await new Promise((res) => setTimeout(res, 1200));
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left: Contact info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p className="text-muted-foreground">
            Have a question or ready to start your project? Reach out and we’ll reply as soon as we can.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <MailIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <a href="mailto:info@bsconsulting.com.ng" className="text-muted-foreground hover:text-primary transition-colors">
                info@bsconsulting.com.ng
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <PhoneIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <a href="tel:+2348082633542" className="text-muted-foreground hover:text-primary transition-colors">
                +234 808 263 3542
              </a>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg">
          <h4 className="font-semibold mb-2">Business Hours</h4>
          <p className="text-sm text-muted-foreground">
            Monday - Friday: 9:00 AM - 6:00 PM<br />
            Saturday: 10:00 AM - 2:00 PM<br />
            Sunday: Closed
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
          </div>

          <div aria-live="polite">
            {submitStatus === "success" && (
              <div className="mb-2 rounded-md bg-green-50 p-3 text-sm text-green-700">
                Thank you! Your message has been sent.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-2 rounded-md bg-red-50 p-3 text-sm text-red-700">
                Please fill the required fields or try again.
              </div>
            )}
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? (
              "Sending..."
            ) : (
              <span className="inline-flex items-center">
                <SendIcon className="h-4 w-4 mr-2" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
