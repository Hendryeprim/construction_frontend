import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await axios.post('http://localhost:8000/api/enquiries/', formData);
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', interest: '', message: '' });
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      setStatus('error');
    }
  };

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary font-sans"
    >
      {/* Navbar */}
      <nav className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-200 gap-4 md:gap-0">
        <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
          <img src="/CJV.png" alt="CJV Infra and Realty" className="h-12 object-contain" />
        </div>
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-semibold tracking-widest text-secondary overflow-x-auto w-full md:w-auto pb-2 md:pb-0 whitespace-nowrap justify-start md:justify-end no-scrollbar">
          <span onClick={() => navigate('/')} className="cursor-pointer hover:text-accent transition-colors">HOME</span>
          <span onClick={() => navigate('/infra')} className="cursor-pointer hover:text-accent transition-colors">CJV INFRA</span>
          <span onClick={() => navigate('/realty')} className="cursor-pointer hover:text-accent transition-colors">CJV REALTY</span>
          <span className="text-accent">CONTACT</span>
          <span onClick={() => navigate('/about')} className="cursor-pointer hover:text-accent transition-colors">ABOUT</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 md:px-24 bg-gray-50 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-6"
        >
          Let's Start a Conversation
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg max-w-2xl"
        >
          Whether you want to build your dream home or buy the right piece of land, our team stands with you from the first conversation to the final handover.
        </motion.p>
      </header>

      {/* Content Section */}
      <section className="px-8 md:px-24 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-8 border-l-4 border-accent pl-4">Get in Touch</h2>
          <div className="space-y-6 text-concrete">
            <div>
              <strong className="block text-secondary text-lg mb-1">Phone</strong>
              <p>+91 98944 47071</p>
            </div>
            <div>
              <strong className="block text-secondary text-lg mb-1">WhatsApp</strong>
              <a href="https://wa.me/919894447071" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-secondary">
                +91 98944 47071
              </a>
            </div>
            <div>
              <strong className="block text-secondary text-lg mb-1">Email</strong>
              <p>contact@cjvinfra.com</p>
            </div>
            <div>
              <strong className="block text-secondary text-lg mb-1">Office Address</strong>
              <p>No.1/1069, Perumal Kovil Street, Nanmangalam, Chennai-600129</p>
            </div>
            <div>
              <strong className="block text-secondary text-lg mb-1">Location</strong>
              <a href="https://maps.app.goo.gl/3Pp5ZGDxaUsHfR3S8" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-secondary">View on Google Maps</a>
            </div>
          </div>
          <div className="mt-12 p-8 bg-gray-50 border border-gray-200 text-center">
            <p className="text-lg font-medium text-secondary italic">"CJV Infra and Realty - Building trust, one project at a time."</p>
          </div>
        </div>

        {/* Enquiry Form */}
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-8 border-l-4 border-accent pl-4">Send an Enquiry</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-accent transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2" htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-accent transition-colors" placeholder="Your Phone Number" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2" htmlFor="email">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-accent transition-colors" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2" htmlFor="interest">I am interested in</label>
              <select id="interest" value={formData.interest} onChange={handleChange} required className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-accent transition-colors text-concrete">
                <option value="">Select an option</option>
                <option value="infra">CJV Infra (Construction, Interiors)</option>
                <option value="realty">CJV Realty (Land, Property Advisory)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary mb-2" htmlFor="message">Message</label>
              <textarea id="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full p-4 bg-gray-50 border border-gray-200 outline-none focus:border-accent transition-colors resize-none" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" disabled={status === 'submitting'} className="w-full bg-secondary text-primary py-4 font-bold tracking-widest hover:bg-accent transition-colors disabled:opacity-50">
              {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
            </button>
            {status === 'success' && (
              <p className="text-green-600 mt-4 text-center font-semibold">Your enquiry has been sent successfully. We will get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mt-4 text-center font-semibold">Failed to send enquiry. Please try again or contact us directly.</p>
            )}
          </form>
        </div>
      </section>

    </motion.div>
  );
}

export default Contact;
