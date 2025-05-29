"use client"
import { useState, useEffect } from 'react';


const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Emma R.",
      location: "London",
      text: "Bluelake Enterprises transformed a tired old house into our dream home. Their professionalism and attention to detail were outstanding.",
      rating: 5,
      category: "Homebuyer",
      project: "Victorian House Renovation"
    },
    {
      name: "James L.",
      location: "Manchester",
      text: "We partnered with Bluelake as investors, and the returns exceeded our expectations. Highly recommend working with their team.",
      rating: 5,
      category: "Investor",
      project: "Multi-Property Portfolio"
    },
    {
      name: "Charlotte M.",
      location: "Birmingham",
      text: "The team at Bluelake was incredibly responsive and made the buying process smooth and easy. We love our new home!",
      rating: 5,
      category: "First-Time Buyer",
      project: "Modern Apartment Purchase"
    },
    {
      name: "David K.",
      location: "Leeds",
      text: "Outstanding renovation work! They turned our property investment into a real success story. Professional service from start to finish.",
      rating: 5,
      category: "Property Investor",
      project: "Commercial to Residential Conversion"
    },
    {
      name: "Sophie T.",
      location: "Bristol",
      text: "Bluelake's design team created something truly special. The renovation exceeded all our expectations and added significant value.",
      rating: 5,
      category: "Homeowner",
      project: "Full House Renovation"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ⭐
      </span>
    ));
  };

  const stats = [
    { label: "Customer Satisfaction", value: "100%", icon: "😊" },
    { label: "Projects Delivered", value: "50+", icon: "🏠" },
    { label: "Repeat Clients", value: "85%", icon: "🔄" },
    { label: "Average Rating", value: "5.0", icon: "⭐" }
  ];

  return (
    <section 
      id="testimonials" 
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-6xl mx-auto my-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="text-center mb-10">
        <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience with Bluelake Enterprises.
        </p>
      </div>

      {/* Client Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-100">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-yellow-600 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Featured Testimonial Carousel */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-4 right-4 text-4xl text-blue-200 opacity-50">&quot;</div>
        
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4">
            {renderStars(testimonials[currentTestimonial].rating)}
          </div>
          
          <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6 italic">
            &quot;{testimonials[currentTestimonial].text}&quot;
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-2xl mb-3">
              👤
            </div>
            <div className="font-semibold text-gray-900 text-lg">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-gray-600 mb-2">
              {testimonials[currentTestimonial].location}
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
              {testimonials[currentTestimonial].category}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {testimonials[currentTestimonial].project}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-blue-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* All Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
              index === currentTestimonial 
                ? 'border-blue-300 bg-blue-50' 
                : 'border-gray-200 bg-white hover:border-blue-200'
            }`}
          >
            <div className="mb-3">
              {renderStars(testimonial.rating)}
            </div>
            
            <blockquote className="text-gray-700 mb-4 italic">
              &quot;{testimonial.text}&quot;
            </blockquote>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.location}
                </div>
              </div>
              <div className="text-right">
                <div className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800 mb-1">
                  {testimonial.category}
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.project}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-10 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
        <h3 className="text-2xl font-bold mb-2">Ready to Join Our Happy Clients?</h3>
        <p className="mb-4 opacity-90">
          Experience the Bluelake difference for yourself. Let&apos;s discuss your next project.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Testimonials;