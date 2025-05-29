"use client"
import { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [imageError, setImageError] = useState(false);

  const achievements = [
    { icon: "🏆", label: "Years of Excellence", value: "15+" },
    { icon: "🏠", label: "Properties Transformed", value: "50+" },
    { icon: "😊", label: "Happy Clients", value: "100+" },
    { icon: "💰", label: "Investment Value", value: "£5M+" }
  ];

  const expertise = [
    {
      title: "Market Knowledge",
      description: "Deep understanding of UK property markets and investment opportunities",
      icon: "📊"
    },
    {
      title: "Design Excellence",
      description: "Creating beautiful, functional spaces that meet modern living standards",
      icon: "🎨"
    },
    {
      title: "Quality Craftsmanship",
      description: "Skilled contractors and premium materials ensure lasting results",
      icon: "🔨"
    },
    {
      title: "Investment Focus",
      description: "Maximizing returns while improving communities and neighborhoods",
      icon: "💼"
    }
  ];

  return (
    <section 
      id="about" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="about-heading"
    >
      <div className="text-center mb-10">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          About Us
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Leading the way in property investment and development across England with integrity, innovation, and expertise.
        </p>
      </div>

      {/* Company Story */}
      <div className="mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
            Our Story
          </h3>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              Bluelake Enterprises Limited is a leading property investment and development company based in England. 
              We specialize in acquiring undervalued or distressed properties, transforming them through expert renovation, 
              and bringing them back to market as high-quality, turn-key homes.
            </p>
            <p className="mb-6">
              Our team is passionate about creating beautiful, functional living spaces that enhance neighborhoods and 
              meet the evolving needs of modern homeowners. With over 15 years of combined experience in the property 
              sector, we have built a reputation for excellence, reliability, and innovation.
            </p>
            <p>
              From our headquarters in Greenhithe, we serve clients across England, combining local market knowledge 
              with national expertise to deliver exceptional results in every project we undertake.
            </p>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-3xl mb-3">{achievement.icon}</div>
            <div className="text-2xl font-bold text-blue-600 mb-2">{achievement.value}</div>
            <div className="text-sm text-gray-600 font-medium">{achievement.label}</div>
          </div>
        ))}
      </div>

      {/* Our Expertise */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">
          What Sets Us Apart
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Company Approach */}
      <div className="bg-blue-600 text-white rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Our Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h4 className="font-bold mb-2">Research & Analysis</h4>
            <p className="text-blue-100 text-sm">
              Thorough market research and property evaluation to identify the best opportunities.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-bold mb-2">Swift Execution</h4>
            <p className="text-blue-100 text-sm">
              Efficient project management and renovation processes that deliver results on time.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold mb-2">Targeted Results</h4>
            <p className="text-blue-100 text-sm">
              Focus on achieving optimal returns while creating homes people love to live in.
            </p>
          </div>
        </div>
      </div>

      {/* About Image */}
      <div className="text-center mb-8">
        {!imageError ? (
          <Image 
            src="/about.jpg" 
            alt="Bluelake Enterprises professional property development team working on high-quality renovation projects in England" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mx-auto"
            onError={() => setImageError(true)}
            loading="lazy"
            width={800}
            height={584}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-blue-700">
              <div className="text-4xl mb-2">🏢</div>
              <p className="font-semibold text-lg">Bluelake Enterprises</p>
              <p className="text-sm text-gray-600">Excellence in Property Development</p>
            </div>
          </div>
        )}
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Bluelake Enterprises?</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            15+ Years Experience
          </span>
          <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
            100% Client Satisfaction
          </span>
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
            Award-Winning Team
          </span>
          <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-medium">
            Transparent Process
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;