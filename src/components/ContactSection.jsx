import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
        setIsSubmitting(false);
      })
      .catch(() => {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:aditya.iiitsurat@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    aditya.iiitsurat@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919119267828"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9119267828
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Surat, Gujarat, India
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/aditya-kumar-learner/" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="http://instagram.com/addy_learn" target="_blank">
                  <Instagram />
                </a>
                <a href="https://wa.me/919119267828" target="_blank" rel="noopener noreferrer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M380.9 97.1C339-17.8 210.4-35.3 124.6 50.6 47.4 127.7 43 246 110.8 331.1L86 425.9l94.5-24.6C293.5 435.7 406 348 406 234.7c0-47.8-18.6-93.1-52.1-127.6zM248.5 347.9c-53.4 0-96.8-43.4-96.8-96.8s43.4-96.8 96.8-96.8 96.8 43.4 96.8 96.8-43.4 96.8-96.8 96.8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Final working form with Formspree integration */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              action="https://formspree.io/f/mvgrwgwl" // Replace with your Formspree form ID
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Aditya"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
