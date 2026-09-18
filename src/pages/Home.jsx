import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary text-secondary overflow-hidden flex flex-col relative">
      
      {/* Header/Logo Overlay */}
      <header className="absolute top-0 w-full z-50 px-8 py-8 flex justify-center items-center pointer-events-none">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold tracking-[0.2em] uppercase"
          >
            LUMINA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs md:text-sm tracking-[0.3em] mt-2 text-accent"
          >
            CRAFTING SPACES. BUILDING DREAMS.
          </motion.p>
        </div>
      </header>

      {/* Main Split Screen */}
      <main className="flex-1 flex flex-col md:flex-row w-full h-screen">
        
        {/* INTERIOR SECTION */}
        <div 
          onClick={() => navigate('/interior')}
          className="relative flex-1 group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-[#ffffff20]"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-light tracking-widest mb-4 uppercase"
            >
              Interior
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 text-sm tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <span>EXPLORE INTERIORS</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* CONSTRUCTION SECTION */}
        <div 
          onClick={() => navigate('/construction')}
          className="relative flex-1 group overflow-hidden cursor-pointer"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-light tracking-widest mb-4 uppercase"
            >
              Construction
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 text-sm tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <span>EXPLORE CONSTRUCTION</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Home;
