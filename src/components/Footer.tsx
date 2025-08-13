import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/kartikeyakrishna',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/kartikeya-krishna-6986b3231',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'https://compose.gmail.com/compose?to=kartikeya.chintala@gmail.com',
      label: 'Email'
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-400">KC</span>
              <span className="text-lg">Kartikeya Krishna</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-stack developer and AI enthusiast passionate about creating innovative solutions. 
              Currently pursuing Computer Science at NIT Trichy.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 kartikeya.chintala@gmail.com</p>
              <p>📱 +91 8522880813</p>
              <p>📍 Trichy, Tamil Nadu, India</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 mb-2">Available for:</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-900 text-green-200 text-xs rounded">
                  Freelance
                </span>
                <span className="px-2 py-1 bg-blue-900 text-blue-200 text-xs rounded">
                  Full-time
                </span>
                <span className="px-2 py-1 bg-purple-900 text-purple-200 text-xs rounded">
                  Internships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {new Date().getFullYear()} Kartikeya Krishna Chintala.</span>
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with modern technologies</span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-black hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
