import React from 'react';
import { Header } from '../Header';
import { Github, Linkedin, Mail, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function About() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors`}>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>About Us</h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Empowering learning through interactive games and activities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Our Mission</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              At BKB Incorporation, we believe in making learning accessible and enjoyable for everyone.
              Our platform combines educational content with engaging gameplay to create a unique
              learning experience that helps users develop essential life skills.
            </p>
            <div className="space-y-4">
              {['Interactive Learning Games', 'Progress Tracking', 'Personalized Experience'].map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-sm p-8 mb-16`}>
          <div className="text-center mb-8">
            <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Meet the Creator</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>The mind behind the innovation</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=300&q=80" alt="bk" className="w-full h-full object-cover"/>
            </div>
            <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Bharath Kumar K</h4>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>Founder & Lead Developer</p>
            
            <div className="flex gap-4 mb-6">
              {[
                { icon: Github, href: 'https://github.com/bharathkumar8056', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/bharath-kumar8056/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:bkbincorporation1783@gmail.com', label: 'Email' },
                { icon: Globe, href: 'https://bharathkumarbk.netlify.app', label: 'Website' }
               ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-2 rounded-full ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <p className={`text-center max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
               As a Student and freelancer , Bharath Kumar is passionate about
              creating innovative solutions that make learning more engaging and effective. He founded
              BKB Incorporation with the vision of transforming how people learn and develop essential skills.
              Although he is passionate in providing quality outputs with customer satisfaction altogether in freelancing.
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 BKB Incorporation. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
}