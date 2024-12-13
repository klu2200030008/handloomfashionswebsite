import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-indigo-600">
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <Mail className="h-6 w-6" />
                  <span>snshandlooms@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <Phone className="h-6 w-6" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <MapPin className="h-6 w-6" />
                  <span>123 Fashion Street, hyderabad, SC 12345</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}