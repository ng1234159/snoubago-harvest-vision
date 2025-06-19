
import React from 'react';
import Navigation from '../components/Navigation';
import { TreePine, Target, Eye, Shield, Clock, Leaf, CheckCircle } from 'lucide-react';

const About = () => {
  const timelineItems = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to make pine harvesting safer and more efficient.'
    },
    {
      year: '2021',
      title: 'First Drone Prototype',
      description: 'Developed our initial drone technology for pine cone collection.'
    },
    {
      year: '2022',
      title: 'Field Testing',
      description: 'Conducted extensive field tests across multiple pine forests.'
    },
    {
      year: '2023',
      title: 'Commercial Launch',
      description: 'Launched our commercial drone harvesting services.'
    },
    {
      year: '2024',
      title: 'Technology Evolution',
      description: 'Advanced AI integration and expanded harvesting capabilities.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Snoubago</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Pioneering the future of pine harvesting through innovative drone technology and environmental stewardship.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To revolutionize pine harvesting through cutting-edge drone technology, making the process safer, 
              more efficient, and environmentally sustainable. We are committed to eliminating the risks 
              associated with traditional tree climbing while maximizing harvest productivity and forest conservation.
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Eye className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To become the global leader in drone-assisted forestry operations, setting new standards for 
              safety, efficiency, and environmental responsibility in the pine harvesting industry. We envision 
              a future where technology and nature work in perfect harmony.
            </p>
          </div>
        </div>
      </div>

      {/* How Drone Innovation Changes Pine Harvesting */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Drone Innovation Changes Pine Harvesting
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced drone technology transforms traditional pine harvesting methods, 
              delivering unprecedented benefits across safety, speed, and environmental care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Enhanced Safety</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Eliminates dangerous tree climbing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Reduces workplace accidents by 95%
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Remote operation capabilities
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Weather-resistant technology
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Increased Speed</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  3x faster than traditional methods
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Automated harvesting sequences
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Multiple drone coordination
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Real-time data collection
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Environmental Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Minimal tree damage
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Reduced forest floor disturbance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Selective harvesting precision
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Wildlife protection protocols
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company Evolution Timeline */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Evolution</h2>
          <p className="text-lg text-gray-600">
            The journey of technological innovation and environmental stewardship
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-green-300"></div>
          
          {timelineItems.map((item, index) => (
            <div key={index} className="relative flex items-center mb-8">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center z-10">
                  <TreePine className="h-4 w-4 text-white" />
                </div>
                <div className="ml-4 md:ml-8 bg-white p-6 rounded-lg shadow-md border border-green-100 w-full max-w-md">
                  <div className="flex items-center mb-2">
                    <span className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
