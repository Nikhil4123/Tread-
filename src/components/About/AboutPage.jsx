/* eslint-disable no-unused-vars */
import React from 'react';
import { Building2, Users, Target, Award, Clock, Globe } from 'lucide-react';
import Navbar2 from '../navbar/Navbar2';

const AboutPage = () => {
  const stats = [
    { label: 'Years of Experience', value: '15+' },
    { label: 'Happy Clients', value: '10,000+' },
    { label: 'Countries Served', value: '25+' },
    { label: 'Expert Advisors', value: '50+' }
  ];

  return (
    <div className="min-h-screen top-10 bg-gray-50">
        <div className=' left-0 right-0 top-0 z-50 bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 '>
        <Navbar2/>
        </div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r  from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Welcome to SICS Group
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Your trusted partner in holiday planning and investment consulting services since 2009
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-lg shadow-xl grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Smart Holiday Section */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Smart Holiday</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            We revolutionize holiday planning with our innovative approach, combining technology 
            with personal touch to create truly memorable experiences. Our expert travel consultants 
            work tirelessly to craft personalized itineraries that match your preferences and exceed 
            your expectations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Personalized Planning</h3>
              <p className="text-gray-600">Tailored travel experiences designed just for you</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance throughout your journey</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-xl mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices without compromising quality</p>
            </div>
          </div>
        </div>

        {/* Sajan Investment Section */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <Building2 className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Sajan Investment Consulting Services</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            With over 15 years of experience in the financial markets, we provide comprehensive 
            investment solutions tailored to your financial goals. Our team of certified financial 
            advisors combines deep market knowledge with innovative analytical tools to deliver 
            superior investment strategies.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Portfolio Management</li>
                <li>• Retirement Planning</li>
                <li>• Tax-Efficient Investing</li>
                <li>• Risk Management</li>
                <li>• Estate Planning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Experienced Team of Advisors</li>
                <li>• Customized Investment Strategies</li>
                <li>• Regular Portfolio Reviews</li>
                <li>• Transparent Fee Structure</li>
                <li>• Comprehensive Market Research</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="flex items-center mb-4">
            <Target className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional ethics and transparency in all our dealings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our services to meet the changing needs of our clients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-xl mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;