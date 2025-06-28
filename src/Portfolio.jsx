import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, Server, ChevronDown, Award, Trophy, MapPin, Phone } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
    backend: ['Java', 'Spring Boot', 'Basic Django', 'REST APIs'],
    database: ['MySQL', 'PostgreSQL', 'Redis'],
    ml: ['Supervised Algorithms', 'Pandas', 'NumPy', 'Scikit-learn'],
    tools: ['Git', 'GitHub', 'Postman', 'Maven']
  };

  const mainProjects = [
    {
      title: "Crime Rate Prediction & Analysis",
      type: "Acadamic Major Project",
      description: "Django-based web application analyzing crime data using K-means clustering and Random Forest regression for area classification and future crime prediction.",
      features: [
        "K-means clustering for crime rate classification",
        "Random Forest regression for prediction",
        "Data preprocessing with Label Encoding & MinMax Scaling",
        "Interactive dashboard with charts and analytics",
        "CSV upload and real-time analysis"
      ],
      tech: ["Django", "Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      github: "https://github.com/SKY975Yadav/Crime-Rate-Prediction-And-Analysis",
      category: "Machine Learning"
    },
    {
      title: "SKY - Online Course Platform",
      type: "Full Stack Project",
      description: "Full-stack learning management system with role-based authentication, course management, and enrollment system.",
      features: [
        "JWT-based authentication with role management",
        "User registration and profile management",
        "Comprehensive course management system",
        "Student enrollment tracking",
        "Admin dashboard with analytics",
        "Swagger API documentation"
      ],
      tech: ["Java 17", "Spring Boot", "Spring Security", "React.js", "MySQL", "Redis", "Tailwind CSS"],
      github: "https://github.com/SKY975Yadav/Online-Course-Platform",
      category: "Full Stack"
    },
    {
      title: "Developer Portfolio",
      type: "Frontend Project",
      description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations and contemporary design.",
      features: [
        "Responsive design with mobile-first approach",
        "Smooth scroll animations and transitions",
        "Interactive project showcase",
        "Modern glassmorphism design elements",
        "Performance optimized components"
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript", "CSS Animations"],
      github: "https://github.com/SKY975Yadav",
      category: "Frontend"
    }
  ];

  const otherProjects = [
    {
      title: "SKY ATM System",
      description: "Java-based desktop application simulating ATM operations with secure transaction processing.",
      features: [
        "ATM Functionalities : Withdraw, deposit, balance check, pinchange, mini statement, Ratings.",
        "Transaction History: View a detailed transaction history",
        "Visually interactive interface built using JavaFX"
      ],
      tech: ["Java", "JavaFX","MySQL", "JDBC"]
    },
    {
      title: "Brain Age Prediction",
      description: "Machine learning model for predicting brain age using neuroimaging data with Django web interface.",
      features: [
        "Supervised learning algorithms implementation",
        "Data preprocessing and feature engineering",
        "Model evaluation and validation"
      ],
      tech: ["Python", "Django", "Machine Learning", "Pandas"]
    }
  ];

  const achievements = [
    {
      title: "1st Rank in College",
      description: "B.Tech 1st Year on GeeksforGeeks platform",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "LeetCode Top 150",
      description: "Solved interview questions challenge",
      icon: <Award className="w-6 h-6" />
    },
    {
      title: "500+ Problems Solved",
      description: "Combined on LeetCode and GeeksforGeeks",
      icon: <Code className="w-6 h-6" />
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SKY
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.home ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              GATUMIDA SAIKRISHNA
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Java Full Stack Developer & Software Engineer
            </p>
            <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/SKY975Yadav" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/sai-krishna-g-a0b89132a/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:saikrishnagatumida@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate Java Full Stack Developer with expertise in modern web technologies and machine learning. 
                  I specialize in building scalable applications using React.js, Spring Boot, and various databases.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With a strong foundation in data structures and algorithms, I've solved over 500 problems across 
                  competitive programming platforms, demonstrating my problem-solving capabilities and dedication to continuous learning.
                </p>
                <div className="flex flex-wrap gap-4">
                  {['Problem Solving', 'Communication', 'Team Work', 'Hard Working'].map((trait) => (
                    <span key={trait} className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Complete Interview Preparation (GeeksforGeeks)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-yellow-400" />
                      <span>Software Engineer Certificate (HackerRank)</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 text-center">
                      <div className="text-purple-400 mb-2 flex justify-center">{achievement.icon}</div>
                      <h4 className="font-semibold text-sm">{achievement.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={category} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {category === 'frontend' && <Code className="w-6 h-6 text-purple-400 mr-3" />}
                    {category === 'backend' && <Server className="w-6 h-6 text-blue-400 mr-3" />}
                    {category === 'database' && <Database className="w-6 h-6 text-green-400 mr-3" />}
                    {category === 'ml' && <Brain className="w-6 h-6 text-pink-400 mr-3" />}
                    {category === 'tools' && <Code className="w-6 h-6 text-yellow-400 mr-3" />}
                    <h3 className="text-xl font-semibold capitalize">
                      {category === 'ml' ? 'Machine Learning' : category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 hover:bg-purple-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.projects ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            
            {/* Main Projects - Highlighted */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
              {mainProjects.map((project, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-6 border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 group shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-semibold">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold mt-2 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-purple-400">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-500/20 rounded text-xs border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Other Projects - Compact Section */}
            <div className="border-t border-white/10 pt-12">
              <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
                Other Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300">
                    <h4 className="text-lg font-semibold mb-2 text-white">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="mb-3">
                      <ul className="text-xs text-gray-400 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-500/20 rounded text-xs border border-gray-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:saikrishnagatumida@gmail.com"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group"
              >
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">saikrishnagatumida@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/sai-krishna-g-a0b89132a/"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group"
              >
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </a>
              <a
                href="https://github.com/SKY975Yadav"
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 text-center group"
              >
                <Github className="w-8 h-8 text-gray-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">View my projects</p>
              </a>
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                Ready to build something amazing together? Let's connect!
              </p>
              <a
                href="mailto:saikrishnagatumida@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Gatumida Saikrishna. Built with React.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;