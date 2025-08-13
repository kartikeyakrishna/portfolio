import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About text */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-dark">
              <p className="text-gray-600 dark:text-white leading-relaxed">
                I'm Kartikeya Krishna Chintala, a passionate Computer Science student at NIT Trichy 
                with a strong foundation in full-stack development and artificial intelligence. 
                My journey in technology began with curiosity about how software works, and has 
                evolved into a deep expertise in modern web technologies and AI/ML.
              </p>
              
              <p className="text-gray-600 dark:text-white leading-relaxed">
                Throughout my academic journey and internship experiences, I've had the privilege 
                of working on diverse projects that span from HR automation platforms handling 
                13,000+ employee records to AI-powered solutions that streamline business operations. 
                I thrive on solving complex problems and building scalable solutions that make a 
                real impact.
              </p>

              <p className="text-gray-600 dark:text-white leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or working on innovative solutions that bridge the gap 
                between technology and real-world problems.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-black rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-white">Internships</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-black rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-white">Major Projects</div>
              </div>
            </div>
          </div>

          {/* Right side - Education & Details */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-gray-50 dark:bg-black p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="mr-2 text-primary-600" size={24} />
                Education
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Bachelor of Technology - Computer Science and Engineering
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">NIT Trichy</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-white mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span className="mr-4">Trichy, TN</span>
                    <Calendar size={14} className="mr-1" />
                    <span>Nov 2022 - May 2026</span>
                  </div>
                </div>

                <div className="border-l-4 border-gray-300 dark:border-black pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Higher Secondary - PCM
                  </h4>
                  <p className="text-gray-600 dark:text-white">Narayana Jr College</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-white mt-1">
                    <MapPin size={14} className="mr-1" />
                    <span className="mr-4">Hyderabad, TS</span>
                    <Calendar size={14} className="mr-1" />
                    <span>Aug 2020 - June 2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-black dark:to-black p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Info
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white">Phone:</span>
                  <span className="text-gray-900 dark:text-white font-medium">8522880813</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white">Email:</span>
                  <span className="text-gray-900 dark:text-white font-medium">kartikeya.chintala@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white">Location:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Trichy, India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-white">Available:</span>
                  <span className="text-green-600 dark:text-green-400 font-medium">For Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
