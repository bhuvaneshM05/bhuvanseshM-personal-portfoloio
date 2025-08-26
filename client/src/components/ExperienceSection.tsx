import { Card, CardContent } from '@/components/ui/card';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const achievements = [
    'Gained hands-on experience with ERP systems covering Sales, Materials, Finance, HR, Production, Maintenance, and IT Infrastructure',
    'Strengthened knowledge of IT security, networking, and connectivity models for enterprise systems',
    'Worked with cross-functional teams to understand business processes',
    'Applied academic knowledge in real-world enterprise environment',
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
          {/* Main Experience Card */}
          <Card className="bg-dark-card border-gray-700 mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-6">
                <div className="flex items-start mb-4 lg:mb-0">
                  <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 mr-4">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">Intern</h3>
                    <p className="text-primary-glow font-medium text-lg">Ramco Cements</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>Tamil Nadu, India</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <span className="bg-primary/20 text-primary-glow px-4 py-2 rounded-full text-sm font-medium">
                  Internship
                </span>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievements & Learning</h4>
                <div className="grid gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-glow mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Technologies & Systems</h4>
                <div className="flex flex-wrap gap-2">
                  {['ERP Systems', 'IT Infrastructure', 'Network Security', 'Business Processes', 'System Integration'].map((skill, index) => (
                    <span 
                      key={index}
                      className="bg-primary/20 text-primary-glow px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience Summary Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">1</div>
                <p className="text-gray-400">Internship Completed</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">8+</div>
                <p className="text-gray-400">Business Domains</p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-card border-gray-700 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary-glow mb-2">5+</div>
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