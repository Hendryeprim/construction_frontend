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

function Realty() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects('realty'); // Use project_type=REALTY
        setProjects(data);
      } catch (error) {
        console.error("Failed to load realty projects", error);
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
      {/* Navbar */}
      <nav className="p-4 md:p-8 flex flex-col md:flex-row justify-between items-center border-b border-gray-200 bg-white gap-4 md:gap-0">
        <div onClick={() => navigate('/')} className="cursor-pointer shrink-0">
          <img src="/CJV.png" alt="CJV Infra and Realty" className="h-12 object-contain" />
        </div>
        <div className="flex gap-6 md:gap-8 text-xs md:text-sm font-semibold tracking-widest text-secondary overflow-x-auto w-full md:w-auto pb-2 md:pb-0 whitespace-nowrap justify-start md:justify-end no-scrollbar">
          <span onClick={() => navigate('/')} className="cursor-pointer hover:text-accent transition-colors">HOME</span>
          <span onClick={() => navigate('/infra')} className="cursor-pointer hover:text-accent transition-colors">CJV INFRA</span>
          <span className="text-accent">CJV REALTY</span>
          <span onClick={() => navigate('/contact')} className="cursor-pointer hover:text-accent transition-colors">CONTACT</span>
          <span onClick={() => navigate('/about')} className="cursor-pointer hover:text-accent transition-colors">ABOUT</span>
        </div>
      </nav>

      {/* Projects Gallery */}
      <main className="px-8 md:px-24 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">Current Properties & Land</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64 text-accent tracking-widest font-bold">LOADING PROPERTIES...</div>
        ) : projects.length === 0 ? (
          <div className="text-concrete text-center">NO PROPERTIES FOUND. PLEASE CHECK BACK LATER.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const coverImage = getProjectImage(project);
              
              return (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="group cursor-pointer bg-white border border-gray-100 hover:shadow-xl transition-shadow rounded-sm overflow-hidden"
                >
                  <motion.div layoutId={`project-image-container-${project.id}`} className="overflow-hidden relative aspect-[4/3] bg-gray-200">
                    <motion.img 
                      layoutId={`project-image-${project.id}`}
                      src={coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                    />
                  </motion.div>
                  <div className="p-6">
                    <motion.h3 layoutId={`project-title-${project.id}`} className="text-xl font-bold text-secondary mb-2">{project.title}</motion.h3>
                    <div className="flex justify-between items-center text-xs font-semibold text-concrete tracking-widest uppercase">
                      <span>{project.location || 'CHENNAI'}</span>
                      <span className="text-accent">{project.status || 'AVAILABLE'}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      {/* Trust Section */}
      <section className="py-20 bg-primary border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-secondary mb-6"
          >
            Verified Properties. Trusted Guidance. End-to-End Support.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-concrete text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            From identifying the right property to document verification, negotiation, registration and after-sales support, our team helps you through every step.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary text-primary text-center px-8 border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for the Right Property?</h2>
          <p className="text-gray-300 text-sm md:text-base mb-10 max-w-xl mx-auto">
            Tell us your requirement and our team will help you explore suitable property options.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-accent text-white px-10 py-4 font-bold tracking-widest text-sm hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            ENQUIRE ABOUT PROPERTIES
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}

export default Realty;
