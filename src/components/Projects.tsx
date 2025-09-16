import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
}

export default function Projects() {
  // todo: replace with user's actual project data
  const projects: Project[] = [
    {
      title: "Advanced Food Recognition and Calorie Tracking ",
      description: "Developed an end-to-end ML system for food recognition and calorie tracking using CNNs, MLPs, and RNNs. Achieved 73% classification accuracy and reduced calorie estimation error to 164 kcal MAE. Deployed via Flask APIs and Streamlit for real-time user interaction.",
      technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Flask", "Streamlit"],
      githubUrl: "https://github.com/ggaikwad-29/Advanced-Food-Recognition-and-Calorie-Tracking-System-Using-Machine-Learning",
      liveUrl: "https://demo.objectdetection.com",
      category: "Machine Learning"
    },
    {
      title: "Robust Object Detection System for Autonomous Vehicles",
      description: "This project aims to develop a robust object detection system for autonomous vehicles that can perform accurately under adverse weather conditions. The solution addresses challenges such as reduced visibility, noise, and distortion of critical features, enhancing detection accuracy and reducing the risk of accidents.",
      technologies: ["Python", "PyTorch", "OpenCV", "BDD100K Dataset", "Google Colab"],
      githubUrl: "https://github.com/ggaikwad-29/Robust-Object-Detection-in-Adverse-Weather-Conditions-for-Autonomous-Vehicles",
      category: "Computer Vision"
    },
    {
      title: "Enlarging-Effective-GPU-Memory-for-AI-Tensor-Operations",
      description: "Researched and implemented memory-efficient GPU allocation strategies for large-scale AI computations. Developed a distributed memory-sharing approach, reducing tensor processing time by 30% ",
      technologies: ["Python", "CUDA", "Ray", "Kubernetes", "MLflow", "Docker", "Redis"],
      githubUrl: "https://github.com/ggaikwad-29/Enlarging-Effective-GPU-Memory-for-AI-Tensor-Operations",
      category: "Parallel and Distributed Systems"
    },
    {
      title: "Plant Disease Detection and Pesticide Recommendation Using Machine Learning",
      description: "Develop CNN based version to design and develop a sturdy and correct CNN version mainly tailored for crop ailment detection. Achieve high detection accuracy. The objective is to achieve excessive accuracy in detecting crop diseases and providing customized treatment recommendations and personalized therapy tips based at the recognized disease.",
      technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn", "OpenCV", "Streamlit"],
      githubUrl: "https://github.com/ggaikwad-29/PLANT-DISEASE-DETECTION-AND-PESTIDICDE-RECOMMENDATION-USING-MACHINE-LEARNING",
      liveUrl: "https://analytics-dashboard.com",
      category: "Machine Learning"
    }
  ];

  const handleGithubClick = (url: string) => {
    console.log(`Opening GitHub: ${url}`);
    window.open(url, '_blank');
  };

  const handleLiveClick = (url: string) => {
    console.log(`Opening live demo: ${url}`);
    window.open(url, '_blank');
  };

  const getCategoryColor = (category: Project['category']) => {
    switch (category) {
      case 'Computer Vision': return 'bg-blue-100 text-blue-800';
      case 'NLP': return 'bg-green-100 text-green-800';
      case 'Machine Learning': return 'bg-purple-100 text-purple-800';
      case 'Distributed Systems': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcase of AI/ML projects demonstrating expertise in Computer Vision, NLP, and Distributed Systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-lg hover-elevate h-full" data-testid={`card-project-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <Badge 
                      className={`text-xs mb-3 ${getCategoryColor(project.category)}`}
                      data-testid={`badge-category-${index}`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs"
                          data-testid={`badge-tech-${index}-${techIndex}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={() => handleGithubClick(project.githubUrl)}
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      data-testid={`button-github-${index}`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </Button>
                    {project.liveUrl && (
                      <Button
                        onClick={() => handleLiveClick(project.liveUrl!)}
                        size="sm"
                        className="gap-2 flex-1"
                        data-testid={`button-demo-${index}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}