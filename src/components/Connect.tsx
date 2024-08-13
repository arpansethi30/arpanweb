import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Connect = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-3xl font-light mb-6 text-center">Initiate a Dialogue</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300">
          <FaEnvelope className="text-2xl text-blue-400" />
          <div>
            <p className="font-light">Electronic Correspondence</p>
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline">your.email@example.com</a>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300">
          <FaPhone className="text-2xl text-blue-400" />
          <div>
            <p className="font-light">Voice Communication</p>
            <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-300">
          <FaMapMarkerAlt className="text-2xl text-blue-400" />
          <div>
            <p className="font-light">Geographic Coordinates</p>
            <p>New York City, NY, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;