// app/contact/page.tsx
"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

export default function ContactPage() {
  // Color palette from loading screen
  const primaryBlue = "#3489AE";
  const secondaryBlue = "#2C6B7A";
  const darkBlue = "#1E4B52";
  const primaryGreen = "#4ade80";
  const secondaryGreen = "#22c55e";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const result = await response.json();

      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setSubmitSuccess(true);

    } catch (error) {
      setSubmitError(true);
      console.error('Error submitting form:', error);

    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Clean Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your energy infrastructure? Connect with our expert team for personalized renewable energy solutions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Form - Clean Design */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-bold mb-6" style={{ color: primaryBlue }}>Send Us a Message</h2>
              
              {submitSuccess && (
                <div 
                  className="border p-4 rounded-lg mb-6"
                  style={{ 
                    backgroundColor: `${primaryGreen}15`,
                    borderColor: primaryGreen,
                    color: darkBlue
                  }}
                >
                  <p className="font-medium">Message sent successfully!</p>
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                  <p className="font-medium">Error sending message.</p>
                  <p className="text-sm mt-1">Please try again or contact us directly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{ 
                        '--tw-ring-color': primaryBlue,
                        focusRingColor: primaryBlue
                      } as any}
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryBlue;
                        e.target.style.boxShadow = `0 0 0 2px ${primaryBlue}40`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryBlue;
                        e.target.style.boxShadow = `0 0 0 2px ${primaryBlue}40`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryBlue;
                        e.target.style.boxShadow = `0 0 0 2px ${primaryBlue}40`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      onFocus={(e) => {
                        e.target.style.borderColor = primaryBlue;
                        e.target.style.boxShadow = `0 0 0 2px ${primaryBlue}40`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#e5e7eb';
                        e.target.style.boxShadow = 'none';
                      }}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Solar Energy">Solar Energy Solutions</option>
                      <option value="Hydropower">Hydropower Development</option>
                      <option value="Consultancy">Consultancy Services</option>
                      <option value="Partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                    onFocus={(e) => {
                      e.target.style.borderColor = primaryBlue;
                      e.target.style.boxShadow = `0 0 0 2px ${primaryBlue}40`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#e5e7eb';
                      e.target.style.boxShadow = 'none';
                    }}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02] shadow-lg hover:shadow-xl'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${primaryGreen}, ${secondaryGreen})`
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information - Clean Design */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${primaryBlue}15` }}
                  >
                    <Phone className="h-5 w-5" style={{ color: primaryBlue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                </div>
                <div className="space-y-1 text-gray-600">
                  <a href="tel:+9779860805846" className="block hover:text-blue-600 transition-colors">
                    +977-9860805846
                  </a>
                  <a href="tel:+9779860680682" className="block hover:text-blue-600 transition-colors">
                    +977-9860680682
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9:30 AM - 5:30 PM</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${primaryGreen}15` }}
                  >
                    <Mail className="h-5 w-5" style={{ color: primaryGreen }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                </div>
                <a href="mailto:tapendra@investinfra.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  tapendra@investinfra.com
                </a>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
              </div>

              {/* Office */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${secondaryBlue}15` }}
                  >
                    <MapPin className="h-5 w-5" style={{ color: secondaryBlue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                </div>
                <p className="text-gray-600">
                  4th Floor, Hathway Complex<br />
                  Lainchaur Marg, Kathmandu<br />
                  Nepal
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                    style={{ backgroundColor: `${darkBlue}15` }}
                  >
                    <Clock className="h-5 w-5" style={{ color: darkBlue }} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Mon - Fri:</span>
                    <span className="font-medium">9:30 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: primaryBlue }}>
              Our Location
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at our office in Kathmandu, Nepal. We're conveniently located to serve clients across the region.
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8 mb-4 text-center">
            <div className="mb-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${primaryBlue}15` }}
              >
                <MapPin className="h-8 w-8" style={{ color: primaryBlue }} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Janaki Energy Pvt. Ltd.</h3>
              <p className="text-gray-600 mb-4">
                4th Floor, Hathway Complex<br />
                Lainchaur Marg, Kathmandu<br />
                Nepal
              </p>
            </div>
            
            {/* Placeholder for Google Maps - Replace with actual embed when API key is available */}
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <div className="h-80 w-full">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9750859848264!2d85.3151816!3d27.7180555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb191d3ebe2113%3A0x6eeed2c13c8887a7!2sPrabhu%20Complex%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1751620379723!5m2!1sen!2snp" width="100%" height="345" loading="lazy" ></iframe>
                </div>
            </div>
            
            <p className="text-sm text-gray-500">
              For detailed directions to our office, please contact us directly at the phone numbers provided above.
            </p>
          </div>
        </div>
      </section>
      
    </main>
  );
}