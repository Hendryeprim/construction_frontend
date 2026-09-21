import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProjectById } from '../api/projects';
import { getProjectImage } from '../utils/imageMapping';

const transitionCinematic = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <div className="min-h-screen bg-primary flex justify-center items-center text-accent tracking-[0.2em] text-sm font-bold uppercase">
        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
          Loading Details...
        </motion.div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col justify-center items-center text-secondary tracking-widest text-sm font-bold">
        <p className="mb-4 text-concrete">PROPERTY NOT FOUND</p>
        <button onClick={() => navigate(-1)} className="text-accent hover:text-secondary transition-colors border-b border-accent pb-1">
          GO BACK
        </button>
      </div>
    );
  }

  const coverImage = getProjectImage(project);
  const galleryImages = project.images?.filter(img => img.image !== coverImage) || [];

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="min-h-screen bg-primary text-secondary font-sans pb-24"
    >
      {/* Navbar Minimal */}
      <nav className="p-8 flex justify-between items-center bg-white border-b border-gray-200 sticky top-0 z-50">
        <button onClick={() => navigate(-1)} className="flex items-center gap-4 text-sm font-bold tracking-widest hover:text-accent transition-colors">
          &larr; BACK
        </button>
        <img src="/CJV.png" alt="CJV Logo" className="h-8 object-contain cursor-pointer" onClick={() => navigate('/')} />
      </nav>

      {/* Hero Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] bg-gray-100 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.05 }} animate={{ scale: 1 }} transition={transitionCinematic}
          src={coverImage} alt={project.title} className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, ...transitionCinematic }}>
            <div className="inline-block bg-accent text-white px-4 py-1 text-xs font-bold tracking-widest uppercase mb-4">
              {project.category?.name || project.project_type}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">
              {project.title}
            </h1>
            <div className="flex gap-8 text-white font-semibold text-sm tracking-widest uppercase drop-shadow-md">
              {project.location && <div><span className="opacity-70 block text-[10px]">LOCATION</span> {project.location}</div>}
              {project.status && <div><span className="opacity-70 block text-[10px]">STATUS</span> {project.status}</div>}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Section */}
      <div className="px-8 md:px-24 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="md:col-span-2 space-y-12">
          {project.description && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Overview</h2>
              <p className="text-lg text-concrete leading-relaxed whitespace-pre-wrap">{project.description}</p>
            </div>
          )}
          {project.design_concept && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Concept & Details</h2>
              <p className="text-lg text-concrete leading-relaxed whitespace-pre-wrap">{project.design_concept}</p>
            </div>
          )}
        </div>
        <div className="bg-gray-50 p-8 border border-gray-200 self-start space-y-8">
          {project.timeline && (
            <div>
              <strong className="block text-secondary text-sm uppercase tracking-widest mb-2">Timeline</strong>
              <p className="text-concrete">{project.timeline}</p>
            </div>
          )}
          {project.materials_used && (
            <div>
              <strong className="block text-secondary text-sm uppercase tracking-widest mb-2">Materials / Specs</strong>
              <p className="text-concrete whitespace-pre-wrap">{project.materials_used}</p>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <div className="px-8 md:px-24 max-w-7xl mx-auto pt-12">
          <h2 className="text-2xl font-bold text-secondary mb-8 border-l-4 border-accent pl-4">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((img, index) => (
              <motion.img 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                key={img.id} src={img.image} alt={img.caption || `Gallery ${index}`} 
                className="w-full h-[400px] object-cover bg-gray-100"
              />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default ProjectDetail;
