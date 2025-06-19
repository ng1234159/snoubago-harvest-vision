
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ArrowDown, TreePine, Shield, Clock, Leaf } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionizing Pine Harvesting with Drone Technology
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Snoubago makes pine tree climbing safer, faster, and hassle-free.
            </p>
            <Link
              to="/harvest-data"
              className="inline-flex items-center px-8 py-4 bg-white text-green-800 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Explore Our Impact
              <ArrowDown className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Snoubago Does
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge drone technology to revolutionize pine harvesting operations. 
            Our innovative approach eliminates the need for dangerous tree climbing while maximizing 
            efficiency and yield collection. From pinecones to pine fruits, we make harvesting 
            safer, faster, and more environmentally sustainable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Safety</h3>
            <p className="text-gray-600">
              Eliminate dangerous tree climbing with our advanced drone harvesting technology.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Faster Operations</h3>
            <p className="text-gray-600">
              Dramatically reduce harvesting time with precision drone technology and automation.
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-md border border-green-100">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Care</h3>
            <p className="text-gray-600">
              Minimize environmental impact while maximizing yield through sustainable practices.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Pine Harvesting?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how Snoubago's drone technology can revolutionize your operations.
          </p>
          <div className="space-x-4">
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              Learn More About Us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border border-green-600 hover:bg-green-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
