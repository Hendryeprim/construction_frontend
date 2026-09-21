import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary overflow-hidden flex flex-col relative font-sans">
      
      {/* Header/Logo Overlay */}
      <header className="absolute top-0 w-full z-50 px-8 py-8 flex justify-center items-center pointer-events-none">
        <div className="text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* Logo instead of text */}
            <img src="/CJV.png" alt="CJV Infra & Realty" className="h-16 md:h-20 object-contain drop-shadow-lg" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xs md:text-sm tracking-[0.3em] mt-3 text-accent font-bold drop-shadow-md"
          >
            BUILDING DREAMS. SECURING LAND.
          </motion.p>
        </div>
      </header>

      {/* Main Split Screen */}
      <main className="flex-1 flex flex-col md:flex-row w-full h-screen">
        
        {/* CJV INFRA SECTION */}
        <div 
          onClick={() => navigate('/infra')}
          className="relative flex-1 group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/20"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-white">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold tracking-widest mb-4 uppercase drop-shadow-lg"
            >
              CJV Infra
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <span>EXPLORE INFRA</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </div>
        </div>

        {/* CJV REALTY SECTION */}
        <div 
          onClick={() => navigate('/realty')}
          className="relative flex-1 group overflow-hidden cursor-pointer"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-white">
            <motion.h2 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold tracking-widest mb-4 uppercase drop-shadow-lg"
            >
              CJV Realty
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex items-center gap-4 text-sm font-bold tracking-[0.2em] text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <span>EXPLORE REALTY</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
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
