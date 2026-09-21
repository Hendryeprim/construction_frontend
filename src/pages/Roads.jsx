import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from '../api/projects';
import { getProjectImage } from '../utils/imageMapping';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function Roads() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadProjects = async () => {
      try {
        const data = await fetchProjects('roads');
        setProjects(data);
      } catch (error) {
        console.error("Failed to load roads projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary font-sans"
    >
      {/* Navbar Minimal */}
      <nav className="p-8 flex justify-between items-center bg-white border-b border-gray-200 sticky top-0 z-50">
        <button onClick={() => navigate('/infra')} className="flex items-center gap-4 text-sm font-bold tracking-widest hover:text-accent transition-colors">
          &larr; BACK TO INFRA
        </button>
        <img src="/CJV.png" alt="CJV Logo" className="h-8 object-contain cursor-pointer" onClick={() => navigate('/')} />
      </nav>

      {/* Hero Header */}
      <header className="py-24 px-8 md:px-24 bg-gray-50 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-6 uppercase"
        >
          ROAD & INFRASTRUCTURE
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg max-w-2xl uppercase tracking-widest font-semibold"
        >
          Government Road Works • Bridges • Highways
        </motion.p>
      </header>

      {/* Project Gallery */}
      <section className="px-8 md:px-24 py-16 max-w-[1400px] mx-auto min-h-[50vh]">
        {loading ? (
          <div className="flex justify-center items-center h-64 text-accent font-bold tracking-widest uppercase">
            Loading...
          </div>
        ) : projects.length === 0 ? (
          <div className="flex justify-center items-center h-64 text-concrete font-bold tracking-widest uppercase">
            No roads projects found.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence>
              {projects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <div className="relative overflow-hidden aspect-[4/5] mb-6">
                    <img 
                      src={getProjectImage(project)} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-700"></div>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                      {project.category?.name || 'Roads'}
                    </span>
                    <h3 className="text-xl font-bold text-secondary mb-2">{project.title}</h3>
                    {project.location && (
                      <p className="text-sm text-concrete mb-4">{project.location}</p>
                    )}
                    <div className="mt-auto pt-4 border-t border-gray-200 text-xs font-bold tracking-widest text-secondary group-hover:text-accent transition-colors uppercase flex items-center gap-2">
                      VIEW PROJECT <span className="text-lg">&rarr;</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

    </motion.div>
  );
}

export default Roads;
