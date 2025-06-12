"use state"

import Image from 'next/image';
import { useState } from 'react';

const VisionMission = () => {
  const [imageError, setImageError] = useState(false);

  const values = [
    {
      title: "Integrity",
      description: "We conduct business with honesty and transparency in all our dealings.",
      icon: "🤝"
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and methods to stay ahead in the market.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every project we undertake.",
      icon: "⭐"
    },
    {
      title: "Community",
      description: "We're committed to improving neighborhoods and creating lasting value.",
      icon: "🏘️"
    }
  ];

  return (
    <section 
      id="vision" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="vision-heading"
    >
      <div className="text-center mb-10">
        <h2 id="vision-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Vision & Mission
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Our commitment to excellence drives everything we do, from property acquisition to community development.
        </p>
      </div>

      {/* Vision and Mission Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {/* Vision Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
          </div>
          <p className="text-lg leading-relaxed">
            To be a trusted leader in the UK property investment industry, known for our integrity, 
            innovation, and commitment to community revitalization.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Leadership', 'Trust', 'Innovation'].map((tag, index) => (
              <span 
                key={index}
                className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center mb-6">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
          </div>
          <p className="text-lg leading-relaxed">
            To transform underperforming properties into desirable homes, improving communities 
            while delivering superior value to our customers and investors.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Transformation', 'Value', 'Community'].map((tag, index) => (
              <span 
                key={index}
                className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-lg font-bold text-blue-900 mb-3">{value.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Our Impact
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-700 font-medium">Properties Transformed</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-gray-700 font-medium">Client Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Vision Image */}
      <div className="text-center">
        {!imageError ? (
          <Image 
            src="/vision.jpeg" 
            alt="Bluelake Enterprises vision of community revitalization through quality property development and innovative design solutions" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mx-auto"
            onError={() => setImageError(true)}
            loading="lazy"
            width={275}
            height={183}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-blue-700">
              <div className="text-4xl mb-2">🌟</div>
              <p className="font-semibold text-lg">Building Better Communities</p>
              <p className="text-sm text-gray-600">Through Innovation & Excellence</p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Join Our Mission</h3>
          <p className="mb-4">Be part of transforming communities through quality property development.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Partner With Us
            </a>
            <a 
              href="#services" 
              className="inline-block border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;