import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    important: [
      { label: 'Home', href: '#' },
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
      { label: 'Advertise', href: '#advertise' },
    ],
    categories: [
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'History', href: '#history' },
      { label: 'Literature', href: '#literature' },
      { label: 'Science', href: '#science' },
      { label: 'Art & Culture', href: '#art' },
    ],
    about: [
      { label: 'Our Mission', href: '#mission' },
      { label: 'Editorial Team', href: '#team' },
      { label: 'Contributors', href: '#contributors' },
      { label: 'Press Kit', href: '#press' },
      { label: 'Privacy Policy', href: '#privacy' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' },
  ];

  return (
    <footer id="about" className="bg-parchment-dark/50 pt-16 pb-8 px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Important Links */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-5">
              Important Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.important.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-5">
              Categories
            </h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-5">
              About Us
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Connect */}
          <div>
            <h3 className="font-serif text-lg font-medium text-ink mb-5">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-sm hover:bg-primary/80 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Join our community of curious minds and stay updated with the latest in scholarly discourse.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <a href="#" className="font-serif text-xl font-semibold text-ink">
              The Scholarly
            </a>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} The Scholarly. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
