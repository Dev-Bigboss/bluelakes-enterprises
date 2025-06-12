"use client"
import Image from 'next/image';
import { useState } from 'react';

const Services = () => {
  const [imageError, setImageError] = useState(false);

  const services = [
    {
      title: "Property Acquisition",
      description: "We source and acquire properties with strong investment potential, leveraging deep market knowledge and a robust network.",
      icon: "🏠",
      features: ["Market Analysis", "Property Sourcing", "Investment Evaluation", "Negotiation"]
    },
    {
      title: "Renovation & Design",
      description: "Our skilled team of designers and contractors ensures each property is renovated to the highest standards, focusing on both aesthetics and functionality.",
      icon: "🔨",
      features: ["Interior Design", "Structural Work", "Quality Materials", "Project Management"]
    },
    {
      title: "Sales & Marketing",
      description: "We handle the marketing and sale of each renovated property, ensuring a seamless process for buyers and delivering excellent returns for stakeholders.",
      icon: "📈",
      features: ["Professional Photography", "Market Positioning", "Buyer Matching", "Sales Support"]
    },
    {
      title: "Investment Partnerships",
      description: "We work with investors seeking to participate in profitable property ventures, offering transparent reporting and strong ROI.",
      icon: "🤝",
      features: ["Portfolio Management", "Transparent Reporting", "Risk Assessment", "ROI Optimization"]
    }
  ];

  return (
    <section 
      id="services" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="services-heading"
    >
      <div className="text-center mb-8">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We provide comprehensive property investment solutions from acquisition to sale, 
          ensuring maximum value at every stage of the process.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-start mb-4">
              <span className="text-3xl mr-4 bg-blue-100 p-3 rounded-full">
                {service.icon}
              </span>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            </div>
            
            {/* Service Features */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-blue-800 mb-2 uppercase tracking-wide">
                Key Features:
              </h4>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span 
                    key={featureIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Timeline */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Our Process
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {['Identify', 'Acquire', 'Renovate', 'Market', 'Sell'].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-2">
                {index + 1}
              </div>
              <span className="text-blue-900 font-semibold">{step}</span>
              {index < 4 && (
                <div className="hidden md:block absolute mt-6 ml-12 w-16 h-0.5 bg-blue-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Services Image */}
      <div className="text-center">
        {!imageError ? (
          <Image 
            src="/services.jpg" 
            alt="Bluelake Enterprises professional renovation and property development services showcasing quality workmanship" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mx-auto"
            onError={() => setImageError(true)}
            loading="lazy"
            width={1400}
            height={623}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-blue-700">
              <div className="text-4xl mb-2">🏗️</div>
              <p className="font-semibold">Professional Services</p>
              <p className="text-sm">Quality Property Development</p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center bg-blue-600 text-white rounded-lg p-6">
        <h3 className="text-xl font-bold mb-2">Ready to Start Your Property Journey?</h3>
        <p className="mb-4">Contact us today to discuss how we can help with your property investment needs.</p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Services;