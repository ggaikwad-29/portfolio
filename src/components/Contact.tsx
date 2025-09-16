import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const handleEmailClick = () => {
    console.log('Opening email client');
    window.location.href = 'mailto:ggaikwad@hawk.illinoistech.edu';
  };

  const handleLinkedInClick = () => {
    console.log('Opening LinkedIn profile');
    window.open('http://www.linkedin.com/in/gayatrisg');
  };

  const handleGithubClick = () => {
    console.log('Opening GitHub profile');
    window.open('https://github.com/ggaikwad-29', '_blank');
  };

  const handlePhoneClick = () => {
    console.log('Initiating phone call');
    window.location.href = 'tel:+3123997465';
  };

  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or discussing opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-lg hover-elevate" data-testid="card-contact-info">
            <CardHeader>
              <CardTitle className="text-xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">ggaikwad@hawk.illinoistech.edu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (312) 399-7465</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-md">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Chicago, IL, USA</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover-elevate" data-testid="card-social-links">
            <CardHeader>
              <CardTitle className="text-xl">Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Follow my work and connect with me on these platforms
              </p>
              
              <div className="space-y-3">
                <Button
                  onClick={handleEmailClick}
                  variant="outline"
                  className="w-full justify-start gap-3"
                  data-testid="button-contact-email"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
                
                <Button
                  onClick={handleLinkedInClick}
                  variant="outline"
                  className="w-full justify-start gap-3"
                  data-testid="button-contact-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </Button>
                
                <Button
                  onClick={handleGithubClick}
                  variant="outline"
                  className="w-full justify-start gap-3"
                  data-testid="button-contact-github"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </Button>

                <Button
                  onClick={handlePhoneClick}
                  variant="outline"
                  className="w-full justify-start gap-3"
                  data-testid="button-contact-phone"
                >
                  <Phone className="w-5 h-5" />
                  Call Me
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 shadow-md">
            <p className="text-muted-foreground mb-4">
              Open to opportunities in AI/ML engineering, research positions, and consulting projects
            </p>
            <Button 
              onClick={handleEmailClick}
              size="lg"
              data-testid="button-primary-contact"
            >
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}