"use client"
import Image from 'next/image';
import { useState } from 'react';

const Team = () => {
  const [imageError, setImageError] = useState(false);

  const teamMembers = [
    {
      name: "John Smith",
      position: "Managing Director",
      description: "With over 15 years in property development, John leads the company with a vision for innovation and growth.",
      expertise: ["Strategic Planning", "Market Analysis", "Team Leadership", "Business Development"],
      experience: "15+ years",
      avatar: "👨‍💼"
    },
    {
      name: "Sarah Johnson",
      position: "Head of Design",
      description: "Sarah brings creativity and precision to every project, ensuring our homes are both stylish and functional.",
      expertise: ["Interior Design", "Space Planning", "Material Selection", "Design Trends"],
      experience: "12+ years",
      avatar: "👩‍🎨"
    },
    {
      name: "Michael Brown",
      position: "Project Manager",
      description: "Michael oversees renovations, coordinating teams and ensuring every detail is completed on time and to standard.",
      expertise: ["Project Coordination", "Quality Control", "Timeline Management", "Team Supervision"],
      experience: "10+ years",
      avatar: "👨‍🔧"
    }
  ];

  const companyStats = [
    { label: "Team Members", value: "15+", icon: "👥" },
    { label: "Years Experience", value: "25+", icon: "📈" },
    { label: "Projects Completed", value: "50+", icon: "🏠" },
    { label: "Happy Clients", value: "100+", icon: "😊" }
  ];

  return (
    <section 
      id="team" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="team-heading"
    >
      <div className="text-center mb-10">
        <h2 id="team-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Our Team
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Meet the experienced professionals who make our success possible. Our diverse team brings together 
          expertise in property development, design, and project management.
        </p>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {companyStats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Avatar and Basic Info */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {member.experience}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4 text-center">
              {member.description}
            </p>

            {/* Expertise Tags */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
                Expertise:
              </h4>
              <div className="flex flex-wrap gap-2">
                {member.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Culture Section */}
      <div className="bg-blue-50 rounded-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Our Team Culture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-bold text-blue-900 mb-2">Collaboration</h4>
            <p className="text-gray-700 text-sm">We work together as one unified team to achieve exceptional results.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">📚</div>
            <h4 className="font-bold text-blue-900 mb-2">Continuous Learning</h4>
            <p className="text-gray-700 text-sm">We invest in our team&apos;s growth and stay current with industry trends.</p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-bold text-blue-900 mb-2">Excellence</h4>
            <p className="text-gray-700 text-sm">We strive for perfection in every project and interaction.</p>
          </div>
        </div>
      </div>

      {/* Team Image */}
      <div className="text-center mb-8">
        {!imageError ? (
          <Image 
            src="/team.jpeg" 
            alt="Bluelake Enterprises professional team working together on property development projects, showcasing collaboration and expertise" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md mx-auto"
            onError={() => setImageError(true)}
            loading="lazy"
            width={275}
            height={183}
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center shadow-md">
            <div className="text-center text-blue-700">
              <div className="text-4xl mb-2">👥</div>
              <p className="font-semibold text-lg">Our Professional Team</p>
              <p className="text-sm text-gray-600">Dedicated to Excellence</p>
            </div>
          </div>
        )}
      </div>

      {/* Join Our Team CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Join Our Growing Team</h3>
        <p className="mb-4">
          We&apos;re always looking for talented professionals who share our passion for excellence in property development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            View Opportunities
          </a>
          <a 
            href="mailto:careers@bluelakeent.com" 
            className="inline-block border-2 border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Send Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;