import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import syncedRepos from "@/data/repos.json";

interface Project {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  github: string;
}

const GITHUB_USERNAME = "DhananJayKumarMV";

// Curated projects (these take priority over synced GitHub repos, and cover
// repos that need custom copy or that the sync can't see, e.g. forks)
const curatedProjects: Project[] = [
  {
    title: "C.O.S.M.I.C",
    description: "Architected a parallel data ingestion pipeline routing structured panel events to 3 concurrent AI models via a Modal serverless GPU orchestration layer, achieving under 500ms end-to-end latency. Designed a WebSocket streaming layer and FastAPI orchestration server coordinating parallel model inference.",
    metrics: "1st place Suno Challenge, 3rd place Google DeepMind Challenge — Music HackSpace Hackathon (100+ participants)",
    tags: ["Python", "FastAPI", "Modal GPU", "WebSocket", "Claude Vision"],
    github: `https://github.com/${GITHUB_USERNAME}/JBrunson`
  },
  {
    title: "Smart City Analytics",
    description: "Leveraged Python, Spark, and Pandas to address urban challenges in Vancouver using ML models (GBTRegressor, RandomForest, Linear Regression) to predict housing trends and CO2 emissions",
    metrics: "Created visualizations with Matplotlib and Folium for policy-making",
    tags: ["Python", "Machine Learning", "Data Visualization", "Urban Analytics"],
    github: `https://github.com/${GITHUB_USERNAME}`
  },
  {
    title: "Blog Generation with LLaMA 2",
    description: "Built a Streamlit app for personalized blog generation using LLaMA 2 (7B), reducing manual content creation by 50%",
    metrics: "90% accuracy in relevant content generation via LangChain",
    tags: ["NLP", "LLM", "Automation", "AI"],
    github: `https://github.com/${GITHUB_USERNAME}`
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

// A GitHub Action (.github/workflows/sync-repos.yml) periodically regenerates
// src/data/repos.json from the GitHub API, so new repos show up automatically
// without a code change. Curated entries above take precedence over duplicates.
const normalizeTitle = (title: string) =>
  title.toLowerCase().replace(/\s+/g, "").replace(/[^a-z0-9]/g, "");

const curatedTitles = new Set(curatedProjects.map((project) => normalizeTitle(project.title)));

const uniqueSyncedProjects = (syncedRepos as Project[]).filter(
  (project) => !curatedTitles.has(normalizeTitle(project.title))
);

const projects: Project[] = [...curatedProjects, ...uniqueSyncedProjects];

const Projects = () => {
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
