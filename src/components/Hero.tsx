import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Download, MapPin, Mail } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const handleDownloadResume = () => {
    console.log('Download resume clicked');
    // todo: implement resume download functionality
  };

  const scrollToContact = () => {
    console.log('Scrolling to contact section');
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen bg-slate-100 flex items-center justify-center pt-20 px-6 shadow">
      <div className="mx-20 grid grid-cols-2 gap-12">
        <div className='lg:flex items-center'>
          <div>
            <h3 className='text-4xl md:text-5xl font-bold text-foreground mb-4'>Gayatri Sanjay Gaikwad</h3>
            <p>
              I'm an 
              <span className ="font-bold">
                <Typewriter 
                options={{
                  strings: ['AI Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
              </span>
          </p>
          
          <p className='mt-5'>
            AI/ML enthusiast with expertise in NLP and Computer Vision, skilled in building scalable, real-time solutions like food recognition, autonomous object detection, and plant disease identification. Improved model accuracy by up to 40% using deep learning, preprocessing, and transfer learning. Proficient in Python, PyTorch, TensorFlow, with peer-reviewed publications and international conference presentations
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleDownloadResume}
              className="gap-2"
              data-testid="button-download-resume"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </Button>
          </div>
          </div>
        </div>
        
        <div className='lg:ml-12'>
          <img src="./gayatri.jpeg" height="500" width="500"  alt="my-picture"/>
        </div>
      </div>
    </section>
  );
}