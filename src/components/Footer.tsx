const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer 
      className="bg-gradient-to-r from-blue-900 to-blue-800 text-white mt-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Bluelake Enterprises Limited</h3>
            <p className="text-blue-200 mb-4 leading-relaxed">
              Professional Property Investment & Development Company specializing in buying, renovating, and selling quality properties.
            </p>
            <div className="text-sm text-blue-300">
              <p>📍 37 Castleridge Drive</p>
              <p>Greenhithe, England, DA9 9WR</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-blue-200 hover:text-white transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-blue-200">
              <p>
                <a 
                  href="mailto:contact@bluelakeent.com"
                  className="hover:text-white transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                  aria-label="Send email to contact@bluelakeent.com"
                >
                  📧 contact@bluelakeent.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+4407944697423"
                  className="hover:text-white transition-colors duration-200 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-2 py-1"
                  aria-label="Call +44 07944 697423"
                >
                  📞 +44 07944 697423
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-blue-200 text-sm text-center md:text-left">
              &copy; {currentYear} Bluelake Enterprises Limited. All rights reserved.
            </p>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-800"
              aria-label="Scroll back to top of page"
            >
              <svg 
                className="w-4 h-4 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;