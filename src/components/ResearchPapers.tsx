import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FileText, ExternalLink, Calendar } from 'lucide-react';

interface ResearchPaper {
  title: string;
  abstract: string;
  authors: string[];
  conference?: string;
  journal?: string;
  year: number;
  status: 'published' | 'under-review' | 'in-progress';
  url?: string;
  keywords: string[];
}

export default function ResearchPapers() {
  // todo: replace with user's actual research papers
  const papers: ResearchPaper[] = [
    {
      title: "Plant Disease Detection and Cure Recommendation Using Machine Learning",
      abstract: "Plant disease detection is vital for ensuring crop quality and yield. Manual methods are time-consuming and inefficient, while automated approaches offer faster and more accurate results. This paper presents a machine learning-based system using convolutional neural networks (CNN) for detecting and classifying plant leaf diseases. Techniques such as K-means clustering, Support Vector Machine (SVM), and Random Forest are applied for feature extraction and classification. The proposed model achieves high accuracy, with ResNet50 and SVM reaching 97.86%. The system can assist farmers in early diagnosis, reducing losses and improving agricultural productivity.",
      authors: ["Gayatri Sanjay Gaikwad", "Mihir Girish Bhattad", "Sanyukta Rajendra Holkar", "Pritamsingh Solanki", "Dr. V. A. Suryawanshi"],
      conference: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      year: 2022,
      status: "published",
      url: "https://doi.org/10.22214/ijraset.2022.48198",
      keywords: ["Plant Disease Detection", "CNN", "Machine Learning", "Agriculture", "Leaf Classification"]
    },
    {
      title: "Crop Disease Detection and Pesticide Recommendation Using CNN",
      abstract: "Agriculture is a key sector in India, but crop diseases significantly reduce yield and quality. Traditional detection methods are slow and labor-intensive, creating challenges for farmers. This paper presents an automated approach for crop disease detection and pesticide recommendation using Convolutional Neural Networks (CNN). The model processes leaf images through preprocessing, feature extraction, and classification to identify diseases such as Apple Scab, Strawberry Leaf Scorch, and Corn Northern Blight. Experimental results show CNNs provide high accuracy and efficiency in detecting crop diseases, offering farmers timely and effective disease management strategies. This system reduces human effort, improves productivity, and supports sustainable agriculture.",
      authors: ["Sanyukta Rajendra Holkar", "Gayatri Sanjay Gaikwad", "Mihir Girish Bhattad", "Pritamsingh Solanki", "Dr. V. A. Suryawanshi"],
      conference: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
      year: 2023,
      status: "published",
      url: "https://doi.org/10.22214/ijraset.2023.52919",
      keywords: ["Crop Disease Detection", "CNN", "Image Processing", "Pesticide Recommendation", "Agriculture"]
    },
    {
      title: "Traffic Management Using VANET And 5G",
      abstract: "Vehicular Ad-hoc Networks (VANETs) combined with 5G technology provide an advanced solution for traffic management, reducing congestion, accidents, and pollution. Modern vehicles equipped with sensors enable features such as collision avoidance, lane tracking, and semi-autonomous driving. This paper proposes a VANET trust model integrated with 5G to enhance security, safety, and communication efficiency. The model supports intelligent transportation by improving real-time data exchange, reducing delays, and ensuring reliable connectivity. Applications include accident prevention, traffic rule monitoring, and improved driver assistance. The integration of VANET and 5G demonstrates significant potential to transform road safety and traffic management systems.",
      authors: ["Gayatri Sanjay Gaikwad", "Sanyukta Rajendra Holkar", "Dr. Nilesh Uke, Professor"],
      conference: "International Journal of Advanced Technology in Engineering and Science",
      year: 2022,
      status: "published",
      url: "http://www.ijates.com/images/short_pdf/1649756560_T1038.pdf",
      keywords: ["VANET", "5G", "Intelligent Transportation System (ITS)", "Traffic Management", "Trust Model", "IoT", "Connected Vehicles"]
    }
  ];

  const handlePaperClick = (url: string) => {
    console.log(`Opening paper: ${url}`);
    window.open(url, '_blank');
  };

  const getStatusColor = (status: ResearchPaper['status']) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'under-review': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: ResearchPaper['status']) => {
    switch (status) {
      case 'published': return 'Published';
      case 'under-review': return 'Under Review';
      case 'in-progress': return 'In Progress';
      default: return status;
    }
  };

  return (
    <section id="research" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Research Papers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI/ML through peer-reviewed research and publications
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <Card key={index} className="shadow-lg hover-elevate" data-testid={`card-paper-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-md">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <CardTitle className="text-xl leading-tight">{paper.title}</CardTitle>
                      <div className="flex flex-col items-end gap-2">
                        <Badge 
                          className={`text-xs ${getStatusColor(paper.status)}`}
                          data-testid={`badge-status-${index}`}
                        >
                          {getStatusText(paper.status)}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-3">
                      <span className="font-medium">Authors:</span> {paper.authors.join(', ')}
                    </p>
                    
                    {(paper.conference || paper.journal) && (
                      <p className="text-sm text-primary font-medium mb-4">
                        {paper.conference || paper.journal}
                      </p>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Abstract</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {paper.abstract}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Keywords</h4>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, keywordIndex) => (
                        <Badge 
                          key={keywordIndex}
                          variant="outline"
                          className="text-xs"
                          data-testid={`badge-keyword-${index}-${keywordIndex}`}
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {paper.url && paper.status === 'published' && (
                    <div className="pt-2">
                      <Button
                        onClick={() => handlePaperClick(paper.url!)}
                        variant="outline"
                        size="sm"
                        className="gap-2"
                        data-testid={`button-paper-${index}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Read Paper
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}