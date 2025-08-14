import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
    }
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.open(`mailto:wharveypilot@gmail.com?subject=${subject}&body=${body}`);
    setFormData({ name: '', email: '', message: '' });
};

const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
};

return (
    <section id="contact" className="py-20 px-4">
    <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Let's Connect
        </h2>
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10">
        <div className="text-center mb-8">
            <Mail className="mx-auto mb-4 text-purple-400" size={48} />
            <p className="text-xl text-white/80 mb-2">Ready to start your next project?</p>
            <p className="text-white/60">Let's discuss how we can bring your ideas to life!</p>
        </div>
        
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <div className="block text-sm font-medium text-white/80 mb-2">
                Your Name
                </div>
                <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                placeholder="Enter your name"
                />
            </div>
            <div>
                <div className="block text-sm font-medium text-white/80 mb-2">
                Your Email
                </div>
                <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                placeholder="Enter your email"
                />
            </div>
            </div>
            <div>
            <div className="block text-sm font-medium text-white/80 mb-2">
                Your Message
            </div>
            <textarea
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-white placeholder-white/50 resize-none"
                placeholder="Tell me about your project..."
            />
            </div>
            <div className="text-center">
            <button
                onClick={handleSubmit}
                className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
                <Send className="inline-block mr-2 group-hover:translate-x-1 transition-transform" size={20} />
                Send Message
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
);
};

export default Contact;