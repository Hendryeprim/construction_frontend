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
      <nav className="p-8 flex justify-between items-center border-b border-gray-200">
        <div onClick={() => navigate('/')} className="cursor-pointer">
          <img src="/cjv_logo.png" alt="CJV Infra and Realty" className="h-12 object-contain" />
        </div>
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest text-secondary">
          <span onClick={() => navigate('/')} className="cursor-pointer hover:text-accent transition-colors">HOME</span>
          <span onClick={() => navigate('/infra')} className="cursor-pointer hover:text-accent transition-colors">CJV INFRA</span>
          <span className="text-accent">CJV REALTY</span>
          <span onClick={() => navigate('/contact')} className="cursor-pointer hover:text-accent transition-colors">CONTACT</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 md:px-24 bg-gray-50 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-6 max-w-4xl leading-tight"
        >
          More Than a Broker. A Complete Team for Your Property.
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg max-w-3xl mb-8"
        >
          CJV Realty has over 20 years of experience helping families buy land and property in Chennai and across Tamil Nadu. We do not just show you a plot and step away. Our team walks with you through every stage, from finding the right property to registering it in your name, and we stay with you after the sale as well.
        </motion.p>
        <motion.button 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => navigate('/contact')}
          className="bg-accent text-primary px-8 py-4 text-sm font-bold tracking-widest hover:bg-secondary transition-colors"
        >
          ENQUIRE ABOUT PROPERTIES
        </motion.button>
      </header>

      {/* Content Section */}
      <section className="px-8 md:px-24 py-16 grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Our Process, End to End</h2>
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
            <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">What we verify</h2>
            <ul className="list-disc list-inside space-y-2 text-concrete">
              <li>Property documents are complete and proper</li>
              <li>Ownership is clear and genuine</li>
              <li>Plot dimensions match the documents</li>
              <li>Layout details and size are correct</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Why choose CJV Realty</h2>
            <ul className="space-y-4 text-concrete">
              <li><strong className="text-secondary">Experience:</strong> Around 20 years in Chennai and Tamil Nadu property.</li>
              <li><strong className="text-secondary">Team support:</strong> A dedicated team, not just a broker showing you land.</li>
              <li><strong className="text-secondary">End-to-end service:</strong> From negotiation to registration and beyond.</li>
              <li><strong className="text-secondary">Verified properties:</strong> Every property is checked before it reaches you.</li>
            </ul>
          </div>
        </div>
      </section>

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
    </motion.div>
  );
}

export default Realty;
