import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Download } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8754794503',
      href: 'tel:+918754794503',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'bhuvan186sh@email.com',
      href: 'mailto:bhuvan186sh@email.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ariyalur, Tamil Nadu',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to discuss opportunities or collaborate on exciting projects? Let's connect!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-primary to-primary-glow rounded-lg p-3">
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <a 
                            href={info.href}
                            className="text-lg font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Call to Action */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-semibold mb-3">Looking for opportunities in:</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {['Software Development', 'Web Development', 'System Analysis', 'Database Management'].map((area, index) => (
                      <span 
                        key={index}
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  
                  <Button className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Message Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 Bhuvanesh M. Computer Science Student at SASTRA University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;