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

function Infra() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchProjects(); // fetch all
        // Filter out Realty, keep Interior and Construction
        const infraProjects = data.filter(p => 
          p.project_type === 'INTERIOR' || p.project_type === 'CONSTRUCTION'
        );
        setProjects(infraProjects);
      } catch (error) {
        console.error("Failed to load infra projects", error);
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
          <span className="text-accent">CJV INFRA</span>
          <span onClick={() => navigate('/realty')} className="cursor-pointer hover:text-accent transition-colors">CJV REALTY</span>
          <span onClick={() => navigate('/contact')} className="cursor-pointer hover:text-accent transition-colors">CONTACT</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="py-24 px-8 md:px-24 bg-gray-50 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-6 max-w-4xl leading-tight"
        >
          25 Years of Building Homes, Schools and Roads You Can Trust
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="text-concrete text-lg max-w-3xl mb-8"
        >
          CJV Infra has been building for over 25 years, with more than 200 successful projects delivered in Chennai and surrounding areas. From family homes and villas to school buildings and government road projects, we handle construction and interior design under one roof.
        </motion.p>
        <motion.button 
          initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
          onClick={() => navigate('/contact')}
          className="bg-accent text-primary px-8 py-4 text-sm font-bold tracking-widest hover:bg-secondary transition-colors"
        >
          TALK TO OUR TEAM
        </motion.button>
      </header>

      {/* Content Section */}
      <section className="px-8 md:px-24 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">What we build</h2>
          <ul className="space-y-4 text-concrete">
            <li><strong className="text-secondary">Residential construction:</strong> Independent houses and dream homes built to your needs and budget.</li>
            <li><strong className="text-secondary">Villas:</strong> Villas, including premium villa projects.</li>
            <li><strong className="text-secondary">Interior design:</strong> Complete interior design and execution for homes and spaces.</li>
            <li><strong className="text-secondary">School buildings:</strong> School buildings and other institutional construction.</li>
            <li><strong className="text-secondary">Road projects:</strong> Road projects, including government road works.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-6 border-l-4 border-accent pl-4">Why choose CJV Infra</h2>
          <ul className="space-y-4 text-concrete">
            <li><strong className="text-secondary">25 years of experience:</strong> More than two decades of hands-on experience means better planning and better finishing.</li>
            <li><strong className="text-secondary">Proven track record:</strong> Over 200 projects completed across homes, schools, villas and roads.</li>
            <li><strong className="text-secondary">Better value:</strong> Our experience and efficient execution help us offer budgets lower than typical market rates, without compromising on quality.</li>
            <li><strong className="text-secondary">One team, start to finish:</strong> Construction and interiors handled together, so you deal with one team.</li>
          </ul>
        </div>
      </section>

      {/* Projects Gallery */}
      <main className="px-8 md:px-24 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Portfolio</h2>
        {loading ? (
          <div className="flex justify-center items-center h-64 text-accent tracking-widest font-bold">LOADING PROJECTS...</div>
        ) : projects.length === 0 ? (
          <div className="text-concrete text-center">NO PROJECTS FOUND. PLEASE ADD PROJECTS VIA THE CMS.</div>
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
                      <span className="text-accent">{project.category?.name || 'INFRA'}</span>
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

export default Infra;
