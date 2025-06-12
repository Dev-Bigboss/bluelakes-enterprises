"use client"
import Image from 'next/image';
import { useState } from 'react';


const Contact = () => {
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: {
    target: { name: string; value: string; }; preventDefault: () => void; 
}) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["37 Castleridge Drive", "Greenhithe, England", "DA9 9WR"],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      iconBg: "bg-blue-100",
      textColor: "text-blue-900",
      detailColor: "text-blue-700"
    },
    {
      icon: "📧",
      title: "Email",
      details: ["contact@bluelakeent.com", "info@bluelakeent.com"],
      bgColor: "bg-green-50",
      borderColor: "border-green-100",
      iconBg: "bg-green-100",
      textColor: "text-green-900",
      detailColor: "text-green-700"
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+44 07944 697423", "Mon-Fri: 9AM-6PM"],
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100",
      iconBg: "bg-purple-100",
      textColor: "text-purple-900",
      detailColor: "text-purple-700"
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'investment', label: 'Investment Opportunity' },
    { value: 'property', label: 'Property Purchase' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'career', label: 'Career Opportunity' }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ];

  return (
    <section 
      id="contact" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="contact-heading"
    >
      <div className="text-center mb-10">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Ready to start your property journey? Get in touch with our expert team today. 
          We&apos;re here to help with all your property investment and development needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
              <p className="text-green-700">
                Thank you for contacting us. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 text-blue-900 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-900">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="+44 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Brief subject of your inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="order-1 lg:order-2">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Get In Touch</h3>
          
          <div className="space-y-6 mb-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className={`p-6 ${info.bgColor} ${info.borderColor} border rounded-lg`}
              >
                <div className="flex items-start">
                  <div className={`${info.iconBg} p-3 rounded-full mr-4 flex-shrink-0`}>
                    <span className="text-xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${info.textColor} mb-2`}>{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className={`${info.detailColor} ${detailIndex === 0 ? 'font-medium' : ''}`}>
                        {info.title === 'Email' && detailIndex === 0 ? (
                          <a href={`mailto:${detail}`} className="hover:underline">
                            {detail}
                          </a>
                        ) : info.title === 'Phone' && detailIndex === 0 ? (
                          <a href={`tel:${detail.replace(/\s/g, '')}`} className="hover:underline">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office Hours */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
              <span className="mr-2">🕒</span>
              Office Hours
            </h4>
            <div className="space-y-2">
              {officeHours.map((schedule, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-gray-700">{schedule.day}</span>
                  <span className="text-gray-900 font-medium">{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-blue-600 text-white rounded-lg p-6">
            <h4 className="font-bold mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a 
                href="mailto:contact@bluelakeent.com" 
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <span className="mr-2">📧</span>
                Send Email Directly
              </a>
              <a 
                href="tel:+4407944697423" 
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <span className="mr-2">📞</span>
                Call Us Now
              </a>
              <a 
                href="#services" 
                className="flex items-center text-blue-100 hover:text-white transition-colors"
              >
                <span className="mr-2">🏠</span>
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Image */}
      <div className="text-center mb-8">
        {!imageError ? (
          <Image 
            src="/contact.jpg" 
            alt="Bluelake Enterprises office location in Greenhithe, England - professional property development consultations and client meetings" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mx-auto"
            onError={() => setImageError(true)}
            loading="lazy"
            width={3000}
            height={2000}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-blue-700">
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-semibold text-lg">Visit Our Office</p>
              <p className="text-sm text-gray-600">Greenhithe, England</p>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <h4 className="font-bold text-red-900 mb-2">Emergency Property Issues?</h4>
        <p className="text-red-700 mb-4">
          For urgent property-related emergencies outside business hours, please call our emergency line.
        </p>
        <a 
          href="tel:+4407944697423" 
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors duration-200"
        >
          Emergency Contact
        </a>
      </div>
    </section>
  );
};

export default Contact;