import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function About() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary font-sans"
    >
      {/* Navbar Minimal */}
      <nav className="p-8 flex justify-between items-center bg-white border-b border-gray-200 sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-4 text-sm font-bold tracking-widest hover:text-accent transition-colors">
          &larr; BACK
        </button>
        <img src="/CJV.png" alt="CJV Logo" className="h-8 object-contain cursor-pointer" onClick={() => navigate('/')} />
      </nav>

      {/* Hero Header */}
      <header className="py-24 px-8 md:px-24 bg-gray-50 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-6 max-w-4xl leading-tight"
        >
          Building Dreams. Securing Land.
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg max-w-3xl mb-8"
        >
          CJV Infra and Realty brings together 25 years of construction expertise and 20 years of real estate experience under one name. Whether you want to build your dream home or buy the right piece of land, our team stands with you from the first conversation to the final handover.
        </motion.p>
      </header>

      {/* Stats Section */}
      <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-gray-200 pb-24">
        <div>
          <div className="text-5xl font-bold text-accent mb-4">25+</div>
          <div className="text-sm font-bold tracking-widest text-secondary uppercase">Years of Construction Experience</div>
        </div>
        <div>
          <div className="text-5xl font-bold text-accent mb-4">200+</div>
          <div className="text-sm font-bold tracking-widest text-secondary uppercase">Successful Projects</div>
        </div>
        <div>
          <div className="text-5xl font-bold text-accent mb-4">20+</div>
          <div className="text-sm font-bold tracking-widest text-secondary uppercase">Years in Real Estate</div>
        </div>
      </section>

      {/* Infra Section */}
      <section className="py-24 px-8 md:px-24 max-w-5xl mx-auto text-center border-b border-gray-200">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">CJV Infra: Building with Trust</h2>
        <p className="text-lg text-concrete leading-relaxed max-w-3xl mx-auto mb-8">
          CJV Infra has been building for over 25 years, with more than 200 successful projects delivered in Chennai and surrounding areas. From family homes and villas to school buildings and government road projects, we handle construction and interior design under one roof.
        </p>
      </section>

      {/* Realty Section */}
      <section className="px-8 md:px-24 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div className="lg:col-span-3 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">CJV Realty: More Than a Broker</h2>
          <p className="text-lg text-concrete leading-relaxed max-w-4xl mx-auto">
            CJV Realty has over 20 years of experience helping families buy land and property in Chennai and across Tamil Nadu. We do not just show you a plot and step away. Our team walks with you through every stage, from finding the right property to registering it in your name, and we stay with you after the sale as well.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Our Process, End to End</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">1.</div>
              <div><strong className="text-secondary">Understand your requirement.</strong> We understand what you need: location, size, budget and purpose, and search from scratch to match it.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">2.</div>
              <div><strong className="text-secondary">Shortlist properties.</strong> Every property is checked by our team before we recommend it to you.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">3.</div>
              <div><strong className="text-secondary">Verify everything.</strong> We verify all documents, ownership details, plot dimensions and layout approvals. Only after everything is clear do we proceed.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">4.</div>
              <div><strong className="text-secondary">Negotiate.</strong> We negotiate on your behalf to get you a fair price.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">5.</div>
              <div><strong className="text-secondary">Payment and registration.</strong> Our team guides you through payment and the registration of the property in your name.</div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-accent">6.</div>
              <div><strong className="text-secondary">After-sales support.</strong> Our support does not end at registration. We are here if you need help after your purchase.</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">What we verify</h3>
            <ul className="list-disc list-inside space-y-2 text-concrete">
              <li>Property documents are complete and proper</li>
              <li>Ownership is clear and genuine</li>
              <li>Plot dimensions match the documents</li>
              <li>Layout details and size are correct</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Why choose CJV Realty</h3>
            <ul className="space-y-4 text-concrete">
              <li><strong className="text-secondary">Experience:</strong> Around 20 years in Chennai and Tamil Nadu property.</li>
              <li><strong className="text-secondary">Team support:</strong> A dedicated team, not just a broker showing you land.</li>
              <li><strong className="text-secondary">End-to-end service:</strong> From negotiation to registration and beyond.</li>
              <li><strong className="text-secondary">Verified properties:</strong> Every property is checked before it reaches you.</li>
            </ul>
          </div>
        </div>
      </section>

    </motion.div>
  );
}

export default About;
