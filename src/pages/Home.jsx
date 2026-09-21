import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary font-sans"
    >
      {/* Navbar */}
      <nav className="p-8 flex justify-between items-center border-b border-gray-200">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img src="/cjv_logo.png" alt="CJV Infra and Realty" className="h-12 object-contain" />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-secondary">
          <span className="text-accent">HOME</span>
          <span onClick={() => navigate('/infra')} className="cursor-pointer hover:text-accent transition-colors">CJV INFRA</span>
          <span onClick={() => navigate('/realty')} className="cursor-pointer hover:text-accent transition-colors">CJV REALTY</span>
          <span onClick={() => navigate('/contact')} className="cursor-pointer hover:text-accent transition-colors">CONTACT</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 md:px-24 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-secondary mb-6"
        >
          Building Dreams. <span className="text-accent">Securing Land.</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg md:text-xl max-w-3xl mb-12 font-medium"
        >
          Your trusted partner in construction and real estate across Chennai and surrounding areas.
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <button 
            onClick={() => navigate('/infra')}
            className="bg-secondary text-primary px-8 py-4 text-sm font-bold tracking-widest hover:bg-accent transition-colors"
          >
            EXPLORE CJV INFRA
          </button>
          <button 
            onClick={() => navigate('/realty')}
            className="border-2 border-secondary text-secondary px-8 py-4 text-sm font-bold tracking-widest hover:bg-secondary hover:text-primary transition-colors"
          >
            EXPLORE CJV REALTY
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-accent text-primary px-8 py-4 text-sm font-bold tracking-widest hover:bg-secondary transition-colors"
          >
            CALL US
          </button>
        </motion.div>
      </header>

      {/* Intro Section */}
      <section className="px-8 md:px-24 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-2xl text-secondary leading-relaxed font-light">
            <span className="font-semibold">CJV Infra and Realty</span> brings together 25 years of construction expertise and 20 years of real estate experience under one name. Whether you want to build your dream home or buy the right piece of land, our team stands with you from the first conversation to the final handover.
          </p>
        </div>
      </section>

      {/* Highlight Blocks */}
      <section className="px-8 md:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Infra Block */}
          <div className="border border-gray-200 p-12 hover:shadow-xl transition-shadow bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">CJV Infra</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-concrete mb-8 leading-relaxed">
                25 years of experience and 200+ successful projects. We specialize in building homes, customized interiors, schools, premium villas, and robust road infrastructure.
              </p>
            </div>
            <button 
              onClick={() => navigate('/infra')}
              className="self-start text-accent font-bold tracking-widest hover:text-secondary flex items-center gap-2"
            >
              DISCOVER INFRA &rarr;
            </button>
          </div>

          {/* Realty Block */}
          <div className="border border-gray-200 p-12 hover:shadow-xl transition-shadow bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">CJV Realty</h2>
              <div className="w-16 h-1 bg-accent mb-6"></div>
              <p className="text-concrete mb-8 leading-relaxed">
                20 years of dedicated real estate experience. We ensure every document is verified, handle negotiations expertly, and complete the registration seamlessly with you.
              </p>
            </div>
            <button 
              onClick={() => navigate('/realty')}
              className="self-start text-accent font-bold tracking-widest hover:text-secondary flex items-center gap-2"
            >
              DISCOVER REALTY &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Numbers Strip */}
      <section className="bg-secondary text-primary py-16 px-8 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-5xl font-bold text-accent mb-2">25+</h3>
            <p className="tracking-widest text-sm uppercase">Years Construction Experience</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-accent mb-2">200+</h3>
            <p className="tracking-widest text-sm uppercase">Successful Projects</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold text-accent mb-2">20+</h3>
            <p className="tracking-widest text-sm uppercase">Years in Real Estate</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
