import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate Computer Science student with a drive for innovation and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Objective Card */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">My Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and detail-oriented BTech Computer Science and Business Systems student 
                with strong programming skills in C and C++, seeking an internship opportunity at 
                an IT company. Eager to apply academic knowledge in real-world projects, contribute 
                to innovative solutions, and gain hands-on experience in software development and teamwork.
              </p>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Currently studying at SASTRA University</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Completed internship at Ramco Cements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Certified in multiple technical courses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Based in Ariyalur, Tamil Nadu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Courses */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3 mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Certifications</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg border border-border bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">NPTEL</h4>
                  <p className="text-sm text-muted-foreground">Project Management</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">Ministry of Heavy Industry</h4>
                  <p className="text-sm text-muted-foreground">VR Applications Development</p>
                </div>
                <div className="p-4 rounded-lg border border-border bg-secondary/30">
                  <h4 className="font-semibold text-primary mb-2">CSC</h4>
                  <p className="text-sm text-muted-foreground">Diploma in C Programming</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;