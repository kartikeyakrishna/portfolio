import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [
    'Full Stack Developer',
    'AI/ML Enthusiast', 
    'Python Developer',
    'React Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-black dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-bounce-slow">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-black flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-700 dark:text-white">KC</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm{' '}
            <span className="text-gradient">
              Kartikeya Krishna
            </span>
          </h1>

          {/* Animated Subtitle */}
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-white mb-6 h-10">
            <span>I'm a </span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto mb-8 leading-relaxed">
            Computer Science student at NIT Trichy with expertise in full-stack development, 
            AI/ML, and modern web technologies. Passionate about building innovative solutions 
            and contributing to impactful projects.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:kartikeya.chintala@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://linkedin.com/in/kartikeya-krishna-6986b3231"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/kartikeyakrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
