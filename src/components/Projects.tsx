import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart City Analytics",
      description: "Leveraged Python, Spark, and Pandas to address urban challenges in Vancouver using ML models (GBTRegressor, RandomForest, Linear Regression) to predict housing trends and CO2 emissions",
      metrics: "Created visualizations with Matplotlib and Folium for policy-making",
      tags: ["Python", "Machine Learning", "Data Visualization", "Urban Analytics"],
      github: "https://github.com/DhananJayKumarMV"
    },
    {
      title: "Blog Generation with LLaMA 2",
      description: "Built a Streamlit app for personalized blog generation using LLaMA 2 (7B), reducing manual content creation by 50%",
      metrics: "90% accuracy in relevant content generation via LangChain",
      tags: ["NLP", "LLM", "Automation", "AI"],
      github: "https://github.com/DhananJayKumarMV"
    },
    {
      title: "Multiclass Disease Classification",
      description: "Advanced machine learning system for medical diagnosis using deep learning techniques for accurate disease classification",
      metrics: "High precision multi-class classification model",
      tags: ["Deep Learning", "Healthcare", "Classification", "TensorFlow"],
      github: "https://github.com/DhananJayKumarMV/Multiclass_Disease_Classification"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Comprehensive customer segmentation solution using unsupervised learning techniques to identify distinct customer groups and behaviors",
      metrics: "Enhanced marketing targeting efficiency",
      tags: ["Clustering", "Customer Analytics", "Machine Learning", "Business Intelligence"],
      github: "https://github.com/DhananJayKumarMV/Customer_Segmentation"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="bg-accent/50 p-3 rounded-md mb-6">
                <span className="text-sm text-primary font-medium">{project.metrics}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-2"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;