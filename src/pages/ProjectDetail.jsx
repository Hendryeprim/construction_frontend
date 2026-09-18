import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProjectById } from '../api/projects';
import { getProjectImage } from '../utils/imageMapping';

// Ultra-smooth cinematic easing
const transitionCinematic = { duration: 1.8, ease: [0.16, 1, 0.3, 1] };

function ProjectDetail({ type }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top instantly
    window.scrollTo(0, 0);
    const loadProject = async () => {
      try {
        const data = await fetchProjectById(id);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project", error);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex justify-center items-center text-accent tracking-[0.3em] text-xs uppercase">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Loading Project...
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col justify-center items-center text-secondary tracking-widest text-sm">
        <p className="mb-4 text-concrete tracking-[0.2em]">PROJECT NOT FOUND</p>
        <button onClick={() => navigate(`/${type}`)} className="text-accent hover:text-secondary transition-colors border-b border-accent pb-1">
          RETURN TO PORTFOLIO
        </button>
      </div>
    );
  }

  const coverImage = getProjectImage(project);
  const galleryImages = project.images?.filter(img => img.image !== coverImage) || [];

  return (
    <motion.div 
      initial={{ opacity: 0, backgroundColor: '#000' }}
      animate={{ opacity: 1, backgroundColor: '#050505' }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      className="min-h-screen text-secondary pb-24 overflow-x-hidden"
    >
      {/* Navbar/Header - Editorial Minimal */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, ...transitionCinematic }}
        className="absolute top-0 w-full z-50 p-8 flex justify-between items-center text-white"
      >
        <button 
          onClick={() => navigate(`/${type}`)}
          className="flex items-center gap-4 text-xs tracking-[0.3em] hover:text-accent transition-all uppercase group"
        >
          <div className="w-8 h-[1px] bg-white group-hover:w-12 transition-all duration-500"></div>
          BACK TO PROJECTS
        </button>
        <h1 className="text-sm font-light tracking-[0.4em] uppercase hidden md:block opacity-70">LUMINA</h1>
      </motion.nav>

      {/* Hero 3D Cinematic Section */}
      <div className="relative w-full h-[85vh] md:h-screen overflow-hidden" style={{ perspective: '1200px' }}>
        
        {/* The 3D Image reveal */}
        <motion.div
          initial={{ rotateX: 10, scale: 1.15, opacity: 0, y: 50 }}
          animate={{ rotateX: 0, scale: 1, opacity: 1, y: 0 }}
          transition={transitionCinematic}
          className="absolute inset-0 w-full h-full origin-bottom"
        >
          <motion.img 
            layoutId={`project-image-${project.id}`}
            src={coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
          {/* Top gradient specifically for navbar contrast */}
          <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-10"></div>
        </motion.div>

        {/* Editorial Typography Overlay */}
        <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full z-10 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.6, ...transitionCinematic }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-6 mb-6">
              <span className="w-12 h-[1px] bg-accent"></span>
              <span className="text-accent tracking-[0.4em] text-xs uppercase">{project.category?.name || type}</span>
            </div>
            
            <motion.h1 
              layoutId={`project-title-${project.id}`}
              className="text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.9] font-extralight tracking-tight uppercase mb-8 text-white max-w-6xl"
            >
              {project.title}
            </motion.h1>

            <div className="flex gap-12 text-concrete tracking-[0.2em] text-xs md:text-sm uppercase font-light border-l border-white/20 pl-6">
              {project.location && (
                <div className="flex flex-col gap-1">
                  <span className="text-white/40 text-[10px] tracking-[0.3em]">LOCATION</span>
                  <span>{project.location}</span>
                </div>
              )}
              {project.status && (
                <div className="flex flex-col gap-1">
                  <span className="text-white/40 text-[10px] tracking-[0.3em]">STATUS</span>
                  <span>{project.status}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Luxury Minimal Details Section */}
      <div className="px-8 md:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          <div className="md:col-span-8 flex flex-col gap-24">
            {project.description && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={transitionCinematic}
              >
                <h3 className="text-white/50 text-xs tracking-[0.4em] mb-8 uppercase flex items-center gap-4">
                  <span className="w-4 h-[1px] bg-white/30"></span> The Vision
                </h3>
                <p className="text-2xl md:text-3xl font-light leading-snug text-white/90 whitespace-pre-wrap max-w-4xl">
                  {project.description}
                </p>
              </motion.div>
            )}
            
            {project.design_concept && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={transitionCinematic}
              >
                <h3 className="text-white/50 text-xs tracking-[0.4em] mb-8 uppercase flex items-center gap-4">
                  <span className="w-4 h-[1px] bg-white/30"></span> Concept
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-concrete whitespace-pre-wrap max-w-3xl">
                  {project.design_concept}
                </p>
              </motion.div>
            )}
          </div>

          <div className="md:col-span-3 md:col-start-10 space-y-12 text-sm tracking-[0.2em] font-light">
             {project.timeline && (
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={transitionCinematic}
                 className="border-t border-white/10 pt-6"
               >
                 <span className="block text-white/40 text-[10px] tracking-[0.3em] mb-2">TIMELINE</span>
                 <span className="text-white/90">{project.timeline}</span>
               </motion.div>
             )}
             {project.materials_used && (
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ ...transitionCinematic, delay: 0.1 }}
                 className="border-t border-white/10 pt-6"
               >
                 <span className="block text-white/40 text-[10px] tracking-[0.3em] mb-2">MATERIALS</span>
                 <span className="text-white/90 leading-loose">{project.materials_used}</span>
               </motion.div>
             )}
          </div>
        </div>
      </div>

      {/* Cinematic Image Gallery */}
      {galleryImages.length > 0 && (
        <div className="px-4 md:px-12 max-w-[1800px] mx-auto pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
            {galleryImages.map((img, index) => (
              <motion.div 
                key={img.id}
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ ...transitionCinematic, delay: (index % 2) * 0.1 }}
                className={`overflow-hidden relative group cursor-pointer ${index % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'}`}
              >
                <motion.img 
                  src={img.image} 
                  alt={img.caption || `Gallery ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectDetail;
