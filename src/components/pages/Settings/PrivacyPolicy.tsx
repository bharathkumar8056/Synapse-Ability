import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

export function PrivacyPolicy() {
  const { darkMode } = useTheme();

  return (
    <div className={`max-w-4xl mx-auto p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-lg`}>
      <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Privacy Policy</h2>
      
      <div className="space-y-6">
        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>About BKB Incorporation</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            BKB Incorporation was founded by Bharath Kumar K with the vision of creating innovative educational solutions
            that make learning accessible and enjoyable for everyone. Our mission is to transform traditional learning
            methods through interactive and engaging digital experiences.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Purpose of Our Application</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The Inclusive Gaming Hub was created to provide an engaging platform for developing essential life skills,
            cognitive abilities, and social interactions through gamified learning experiences. Our games are designed
            to be both educational and entertaining, helping users progress at their own pace while tracking their
            improvements.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Data Collection and Usage</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We collect minimal user data necessary for providing our services, including:
          </p>
          <ul className={`list-disc pl-6 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li>Basic profile information (name, email)</li>
            <li>Game progress and achievements</li>
            <li>Usage statistics for improvement purposes</li>
          </ul>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            All data is securely stored and never shared with third parties without explicit consent.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Intellectual Property</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            All content, including games, graphics, and educational materials, is protected by copyright and owned by
            BKB Incorporation. The platform and its contents are the intellectual property of Bharath Kumar K and
            are protected under international copyright laws.
          </p>
        </section>

        <section>
          <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Updates and Modifications</h3>
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We regularly update our platform with new features and improvements. Users will be notified of significant
            changes to our privacy policy or terms of service.
          </p>
        </section>

        <footer className={`mt-8 pt-4 border-t ${darkMode ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'}`}>
          <p className="text-sm">
            © 2024 BKB Incorporation. All rights reserved. Created and maintained by Bharath Kumar K.
          </p>
        </footer>
      </div>
    </div>
  );
}