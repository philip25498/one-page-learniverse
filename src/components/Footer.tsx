import { MessageCircle, Send, Instagram } from "lucide-react";

const Footer = () => {
  const phoneNumber = "+254740168855";
  const encodedMessage = encodeURIComponent("Hello! I'm interested in learning more about your courses.");
  
  const socialLinks = [
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      color: "hover:text-green-500"
    },
    {
      name: "Telegram",
      icon: Send,
      url: `https://t.me/${phoneNumber}`,
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: `https://instagram.com/edulearn`,
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="bg-sidebar-background text-sidebar-foreground py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">EduLearn Platform</h3>
            <p className="text-sidebar-foreground/80">
              Empowering learners worldwide with quality education
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-12 w-12 rounded-full bg-sidebar-accent flex items-center justify-center transition-all duration-300 ${link.color} hover:scale-110`}
                  aria-label={link.name}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-sidebar-foreground/70">
              Contact: {phoneNumber}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sidebar-border text-center text-sm text-sidebar-foreground/70">
          <p>&copy; {new Date().getFullYear()} EduLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
