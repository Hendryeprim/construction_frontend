import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fetchProjects } from '../api/projects';
import { getProjectImage } from '../utils/imageMapping';

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 }
};

function Construction() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects('construction');
        setProjects(data);
      } catch (error) {
        console.error("Failed to load construction projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={{ duration: 0.5 }}
      className="min-h-screen bg-primary text-secondary"
    >
      {/* Navbar/Header */}
      <nav className="p-8 flex justify-between items-center border-b border-[#ffffff20]">
        <h1 onClick={() => navigate('/')} className="text-xl font-bold tracking-[0.2em] cursor-pointer hover:text-accent transition-colors uppercase">
          LUMINA
        </h1>
        <div className="flex gap-8 text-sm tracking-widest text-concrete">
          <span onClick={() => navigate('/')} className="cursor-pointer hover:text-secondary transition-colors">HOME</span>
          <span onClick={() => navigate('/interior')} className="cursor-pointer hover:text-secondary transition-colors">INTERIOR</span>
          <span className="text-secondary">CONSTRUCTION</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 md:px-24 bg-gradient-to-b from-[#1a1a1a] to-primary">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-7xl font-light tracking-wide uppercase mb-6"
        >
          Building Foundations
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete tracking-widest text-sm md:text-base max-w-2xl"
        >
          FROM GROUNDBREAKING TO FINAL REVEAL. WE CONSTRUCT SPACES THAT STAND THE TEST OF TIME.
        </motion.p>
      </header>

      {/* Projects Gallery */}
      <main className="px-8 md:px-24 py-16">
        {loading ? (
          <div className="flex justify-center items-center h-64 text-accent tracking-widest">LOADING PROJECTS...</div>
        ) : projects.length === 0 ? (
          <div className="text-concrete tracking-widest">NO PROJECTS FOUND. PLEASE ADD PROJECTS VIA THE CMS.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projects.map((project, index) => {
              const coverImage = getProjectImage(project);
              
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigate(`/construction/project/${project.id}`)}
                  className="group cursor-pointer"
                >
                  <motion.div layoutId={`project-image-container-${project.id}`} className="overflow-hidden mb-6 relative aspect-[4/5] bg-[#1a1a1a]">
                    <motion.img 
                      layoutId={`project-image-${project.id}`}
                      src={coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[20%]"
                    />
                  </motion.div>
                  <motion.h3 layoutId={`project-title-${project.id}`} className="text-xl tracking-wider uppercase mb-2">{project.title}</motion.h3>
                  <div className="flex justify-between items-center text-sm text-concrete tracking-widest">
                    <span>{project.location || 'VARIOUS LOCATIONS'}</span>
                    <span className="text-accent">{project.category?.name || 'CONSTRUCTION'}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>
    </motion.div>
  );
}

export default Construction;
