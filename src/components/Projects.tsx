import { useState } from 'react';
import { ExternalLink, Github, Calendar, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'ClassPilot',
      description: 'A comprehensive education platform designed with curated content, real-time search (Meilisearch), and instructor-specific dashboards.',
      longDescription: 'Designed a modular education platform using Flask, React, PostgreSQL, Docker, and JWT, with curated content, real-time search (Meilisearch), and instructor-specific dashboards. Architected scalable architecture with REST APIs and streamlined deployment, enabling smooth onboarding of new colleges, dynamic course expansion, and maintainable long-term growth.',
      technologies: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker', 'JWT', 'Meilisearch'],
      duration: 'June 2025 – Present',
      category: 'Full Stack',
      featured: true,
      liveUrl: '#',
      githubUrl: 'https://github.com/kartikeyakrishna/Tutorial'
    },
    {
      title: 'ReactForge',
      description: 'A modular multi-site React builder platform enabling users to create, customize, and deploy isolated apps from a single codebase.',
      longDescription: 'Built a modular multi-site React builder platform enabling users to create, customize, and deploy isolated apps from a single codebase supporting seamless site switching via environment config. Developed a scalable Flask backend and shared UI library (npm), integrating drag-and-drop (react-dnd), 3D rendering (react-three-fiber), and auto-static builds with Vite for streamlined deployment.',
      technologies: ['React', 'Flask', 'Vite', 'React DnD', 'Three.js', 'NPM Library'],
      duration: 'Jan 2025 – March 2025',
      category: 'Platform',
      featured: true,
      liveUrl: '#',
      githubUrl: 'https://github.com/kartikeyakrishna/reactforge'
    },
    {
      title: 'WhatsApp AI Assistant',
      description: 'AI-powered WhatsApp bot for automated lead handling, bookings, and customer support using Meta\'s API.',
      longDescription: 'Created WhatsApp and email-based AI assistants using Meta\'s API and webhook triggers, auto processing lead handling, bookings, and support tasks reducing manual effort by 80 percent. Integrated with CRM systems and generated 25+ qualified leads.',
      technologies: ['Python', 'Flask', 'OpenAI API', 'WhatsApp API', 'Webhooks'],
      duration: 'July 2025 – Present',
      category: 'AI/ML',
      featured: false,
      liveUrl: '#',
      githubUrl: null  // Temporarily hidden due to sensitive information
    }
  ];

  const categories = ['All', 'Full Stack', 'Platform', 'AI/ML'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="text-lg text-gray-600 dark:text-white mt-4 max-w-2xl mx-auto">
            A showcase of my technical projects spanning full-stack development, AI/ML, and platform development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-black text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Folder className="text-primary-600" size={20} />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.category === 'Full Stack' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      project.category === 'AI/ML' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      project.category === 'Platform' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-gray-100 text-gray-800 dark:bg-black dark:text-white'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {/* Temporarily commented out until projects are completed */}
                    {/* {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="p-2 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )} */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="p-2 text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <div className="flex items-center text-sm text-gray-600 dark:text-white mb-4">
                  <Calendar size={14} className="mr-1" />
                  {project.duration}
                </div>

                <p className="text-gray-600 dark:text-white text-sm leading-relaxed mb-4">
                  {project.featured ? project.longDescription : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-white dark:bg-black text-gray-700 dark:text-white rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {/* Temporarily commented out until projects are completed */}
                  {/* {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Live Demo
                    </a>
                  )} */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <Github size={14} className="mr-2" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-white mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/kartikeyakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Github size={16} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
