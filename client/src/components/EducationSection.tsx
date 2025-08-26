import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science and Business Systems',
      institution: 'SASTRA University, Thanjavur',
      duration: '2023 - 2027',
      status: 'Current',
      description: 'Pursuing Bachelor of Technology with specialization in Computer Science and Business Systems, focusing on software development, business analytics, and system design.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Vidya Mandir Matriculation Higher Secondary School',
      duration: '2021 - 2023',
      status: 'Completed',
      description: 'Completed higher secondary education with strong foundation in mathematics and physics.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 mr-4">
                        <GraduationCap className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-primary/20 text-primary' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
                
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-primary-glow/10 rounded-bl-full"></div>
              </Card>
            ))}
          </div>
          
          {/* Academic Highlights */}
          <Card className="mt-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Academic Highlights</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Years of Study</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">5+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Technical Skills</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Internship</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;