import React, { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import { Send, Bot } from 'lucide-react';

const FAQ_RESPONSES: Record<string, string> = {
  'how to play games': 'You can access our games from the Games section in the navigation menu. Each game has its own instructions and difficulty levels.',
  'forgot password': 'Click on the "Forgot Password" link on the login page. Enter your email address and follow the instructions sent to your inbox.',
  'earn coins': 'You can earn coins by completing games, achieving high scores, and maintaining daily streaks. Coins can be used for hints and power-ups.',
  'account settings': 'Visit the Settings page to manage your profile, update personal information, and customize your experience.',
  'contact support': 'You can reach our support team at support@bkb.com or through the Help Center chat.',
  'privacy concerns': 'We take privacy seriously. Check our Privacy Policy for detailed information about how we handle your data.',
  'technical issues': 'Try refreshing the page or clearing your browser cache. If issues persist, contact our support team.',
  'about bkb': 'BKB Incorporation was founded by Bharath Kumar K to create innovative educational solutions through interactive gaming experiences.'
};

export function HelpCenter() {
  const { darkMode } = useTheme();
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Array<{ type: 'user' | 'bot'; text: string }>>([
    { type: 'bot', text: 'Hi! How can I help you today?' }
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newChat = [...chat, { type: 'user', text: message }];
    setChat(newChat);
    setMessage('');

    // Find best matching response
    const query = message.toLowerCase();
    let response = 'I apologize, but I don\'t have specific information about that. Please contact our support team for more help.';
    
    for (const [key, value] of Object.entries(FAQ_RESPONSES)) {
      if (query.includes(key)) {
        response = value;
        break;
      }
    }

    setTimeout(() => {
      setChat([...newChat, { type: 'bot', text: response }]);
    }, 500);
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
      <div className="mb-6">
        <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Help Center</h2>
        <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Get instant answers to your questions
        </p>
      </div>

      <div className={`h-[500px] flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-lg p-4`}>
        <div className="flex-1 overflow-y-auto space-y-4">
          {chat.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user'
                    ? darkMode
                      ? 'bg-indigo-600 text-white'
                      : 'bg-indigo-100 text-indigo-900'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-white text-gray-900'
                } ${message.type === 'bot' ? 'flex items-start gap-2' : ''}`}
              >
                {message.type === 'bot' && <Bot className="w-5 h-5 mt-1" />}
                <span>{message.text}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question..."
            className={`flex-1 p-2 rounded-lg border ${
              darkMode
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500'
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          />
          <button
            onClick={handleSend}
            className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Common Questions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(FAQ_RESPONSES).map((question) => (
            <button
              key={question}
              onClick={() => setMessage(question)}
              className={`p-3 text-left rounded-lg ${
                darkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              {question.charAt(0).toUpperCase() + question.slice(1)}?
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}