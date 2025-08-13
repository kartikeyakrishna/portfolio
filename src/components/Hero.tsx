import { useEffect, useState, useMemo } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = useMemo(() => [
    'Python Developer',
    'AI/ML Enthusiast', 
    'Full Stack Developer',
    'Problem Solver'
  ], []);

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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-black dark:via-black dark:to-black pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-3xl">
                <img 
                  src="/profile.jpg" 
                  alt="Kartikeya Krishna" 
                  className="w-full h-full object-cover object-right-top transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 group-hover:from-blue-500/20 group-hover:to-purple-600/20 transition-all duration-300"></div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border-2 border-primary-200 dark:border-primary-800 opacity-20 group-hover:opacity-40 transition-all duration-300"></div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-2 space-y-6">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient block sm:inline">
                Kartikeya Krishna
              </span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-300 h-8 lg:h-10">
              <span>I'm a </span>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              <span className="animate-slide-up" style={{animationDelay: '0.1s'}}>Computer Science student at </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '0.2s'}}>NIT Trichy</span>
              <span className="animate-slide-up" style={{animationDelay: '0.3s'}}> with expertise in </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '0.4s'}}>Full-Stack Development</span>
              <span className="animate-slide-up" style={{animationDelay: '0.5s'}}>, </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '0.6s'}}>AI/ML</span>
              <span className="animate-slide-up" style={{animationDelay: '0.7s'}}>, and </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '0.8s'}}>Modern Automation Technologies</span>
              <span className="animate-slide-up" style={{animationDelay: '0.9s'}}>.<br />Passionate about building </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '1.0s'}}>Innovative Solutions</span>
              <span className="animate-slide-up" style={{animationDelay: '1.1s'}}> and delivering </span>
              <span className="text-gradient font-semibold animate-slide-up" style={{animationDelay: '1.2s'}}>Impactful Projects</span>
              <span className="animate-slide-up" style={{animationDelay: '1.3s'}}>.</span>
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://mail.google.com/mail/?view=cm&to=kartikeya.chintala@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/kartikeya-krishna-6986b3231"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/kartikeyakrishna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 border border-gray-200 dark:border-gray-700"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="text-center mt-8 lg:mt-16">
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            aria-label="Scroll down"
          >
            <ChevronDown size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
