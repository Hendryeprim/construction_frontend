import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function Infra() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary font-sans flex flex-col"
    >
      {/* Navbar */}
      <nav className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-center bg-white border-b border-gray-200 gap-4 md:gap-0">
        <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
          <img src="/CJV.png" alt="CJV Infra & Realty" className="h-12 object-contain" />
        </div>
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-semibold tracking-widest text-secondary overflow-x-auto w-full md:w-auto pb-2 md:pb-0 whitespace-nowrap justify-start md:justify-end no-scrollbar">
          <span onClick={() => navigate('/')} className="cursor-pointer hover:text-accent transition-colors">HOME</span>
          <span className="text-accent">CJV INFRA</span>
          <span onClick={() => navigate('/realty')} className="cursor-pointer hover:text-accent transition-colors">CJV REALTY</span>
          <span onClick={() => navigate('/contact')} className="cursor-pointer hover:text-accent transition-colors">CONTACT</span>
          <span onClick={() => navigate('/about')} className="cursor-pointer hover:text-accent transition-colors">ABOUT</span>
        </div>
      </nav>

      {/* 3-Column Split Screen Gateway */}
      <section className="flex-1 flex flex-col md:flex-row w-full h-[calc(100vh-100px)]">
        
        {/* INTERIOR */}
        <div 
          onClick={() => navigate('/infra/interior')}
          className="relative flex-1 group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/20"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase drop-shadow-lg">
              INTERIOR
            </h2>
            <p className="text-sm font-semibold tracking-widest text-accent mb-6 uppercase">Interior Design & Execution</p>
            
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span>EXPLORE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* CONSTRUCTION */}
        <div 
          onClick={() => navigate('/infra/construction')}
          className="relative flex-1 group overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/20"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase drop-shadow-lg">
              CONSTRUCTION
            </h2>
            <p className="text-sm font-semibold tracking-widest text-accent mb-6 uppercase">Residential • Villas • Schools</p>
            
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span>EXPLORE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* ROADS */}
        <div 
          onClick={() => navigate('/infra/roads')}
          className="relative flex-1 group overflow-hidden cursor-pointer"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80')" }}
          ></div>
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest mb-4 uppercase drop-shadow-lg">
              ROADS
            </h2>
            <p className="text-sm font-semibold tracking-widest text-accent mb-6 uppercase">Road & Infra Projects</p>
            
            <div className="flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span>EXPLORE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

      </section>

    </motion.div>
  );
}

export default Infra;
