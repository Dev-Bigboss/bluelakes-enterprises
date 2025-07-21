"use client";
import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validation schema
const formSchema = z.object({
  name: z.string().min(1, 'Full Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
  inquiryType: z.enum(['general', 'investment', 'property', 'partnership', 'career']),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [imageError, setImageError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage('Message sent successfully! We will get back to you within 24 hours.');
        reset();
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again later.');
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: ['37 Castleridge Drive', 'Greenhithe, England', 'DA9 9WR'],
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      iconBg: 'bg-blue-100',
      textColor: 'text-blue-900',
      detailColor: 'text-blue-700',
    },
    {
      icon: '📧',
      title: 'Email',
      details: ['contact@bluelakesent.co.uk', 'info@bluelakesent.co.uk'],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-100',
      iconBg: 'bg-green-100',
      textColor: 'text-green-900',
      detailColor: 'text-green-700',
    },
    {
      icon: '📞',
      title: 'Phone',
      details: ['+44 07944 697423', 'Mon-Fri: 9AM-6PM'],
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-100',
      iconBg: 'bg-purple-100',
      textColor: 'text-purple-900',
      detailColor: 'text-purple-700',
    },
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'investment', label: 'Investment Opportunity' },
    { value: 'property', label: 'Property Purchase' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'career', label: 'Career Opportunity' },
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
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
          We’re here to help with all your property investment and development needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h3>
          
          {submitMessage ? (
            <div
              className={`border rounded-lg p-8 text-center ${
                submitMessage.includes('successfully')
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="text-4xl mb-4">{submitMessage.includes('successfully') ? '✅' : '❌'}</div>
              <h4
                className={`text-xl font-bold mb-2 ${
                  submitMessage.includes('successfully') ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {submitMessage.includes('successfully') ? 'Message Sent Successfully!' : 'Submission Failed'}
              </h4>
              <p
                className={submitMessage.includes('successfully') ? 'text-green-700' : 'text-red-700'}
              >
                {submitMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-blue-900 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    {...register('email')}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-blue-900 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-blue-900"
                    placeholder="+44 xxx xxx xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    {...register('inquiryType')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-blue-900"
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
                  {...register('subject')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors text-blue-900 ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief subject of your inquiry"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical text-blue-900 ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please provide details about your inquiry..."
                  rows={5}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-blue-900 ${
                  isSubmitting
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
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

          <div className="bg-blue-600 text-white rounded-lg p-6">
            <h4 className="font-bold mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@bluelakesent.co.uk"
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