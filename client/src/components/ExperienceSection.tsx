import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'AI & Software Developer Intern',
      company: 'Elena Geo Tech Private Limited',
      location: 'Bengaluru, India',
      duration: '2025',
      type: 'Internship',
      achievements: [
        'Designed and developed an AI-powered CRM platform integrated with a Retrieval-Augmented Generation (RAG) chatbot using React.js, Node.js/Express.js, FastAPI, and MongoDB.',
        'Implemented semantic document search by converting technical product manuals into high-dimensional vector embeddings stored in ChromaDB, enabling accurate question answering.',
        'Integrated Large Language Models (LLMs) with RAG systems to generate reliable responses with company-specific knowledge, eliminating AI hallucinations.',
        'Developed core CRM functionalities including secure user authentication, lead management modules, and client communication tracking workflows.',
        'Designed and documented system architecture, entity-relationship models, and data flow processes to ensure system scalability and security.'
      ],
      technologies: ['React.js', 'FastAPI', 'Node.js', 'ChromaDB', 'MongoDB', 'RAG Chatbots', 'LLM Integration', 'Python']
    },
    {
      role: 'Intern',
      company: 'Ramco Cements',
      location: 'Tamil Nadu, India',
      duration: '2025',
      type: 'Internship',
      achievements: [
        'Gained hands-on experience with ERP systems covering Sales, Materials, Finance, HR, Production, Maintenance, and IT Infrastructure',
        'Strengthened knowledge of IT security, networking, and connectivity models for enterprise systems',
        'Worked with cross-functional teams to understand business processes',
        'Applied academic knowledge in real-world enterprise environment',
      ],
      technologies: ['ERP Systems', 'IT Infrastructure', 'Network Security', 'Business Processes', 'System Integration']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-bg text-dark-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional experience and hands-on learning in enterprise environments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-dark-card border-gray-700 mb-8">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 mr-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-1">{exp.role}</h3>
                      <p className="text-primary-glow font-medium text-lg">{exp.company}</p>
                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <span className="bg-primary/20 text-primary-glow px-4 py-2 rounded-full text-sm font-medium">
                    {exp.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements & Learning</h4>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies & Systems</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary/20 text-primary-glow px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Experience Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">2</div>
                <p className="text-gray-400">Internships Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">12+</div>
                <p className="text-gray-400">Business Domains</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">10+</div>
                <p className="text-gray-400">Technologies Learned</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;