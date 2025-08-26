import { Button } from '@/components/ui/button';
import { Download, Mail, Star } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToExperience = () => {
    const element = document.querySelector('#experience');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-hero-bg to-hero-light rounded-3xl p-8 md:p-12 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <span className="text-white text-sm font-medium">Hello!</span>
          </div>
          
          <div className="absolute top-4 right-32 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left content */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                I'm <span className="text-white">Bhuvanesh</span>,
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-6">
                Computer Science Student
              </h2>
              
              <p className="text-white/80 text-lg mb-8 max-w-md">
                Motivated BTech student with strong programming skills, seeking opportunities 
                to apply academic knowledge in real-world projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={scrollToExperience} size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full px-8">
                  View Portfolio
                </Button>
                <Button onClick={scrollToContact} variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary rounded-full px-8">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire me
                </Button>
              </div>
            </div>

            {/* Right content - Profile photo */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                {/* Background circle */}
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-white/20 to-white/10 rounded-full absolute inset-0"></div>
                
                {/* Profile photo */}
                <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 bg-white/10">
                  <img 
                    src="/profile-photo.png" 
                    alt="Bhuvanesh M - Computer Science Student" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.log("Image failed to load");
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log("Image loaded successfully")}
                  />
                </div>

                {/* Experience badge */}
                <div className="absolute bottom-4 right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="text-center">
                    <div className="flex justify-center mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">3+</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;