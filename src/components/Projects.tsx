import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useState, useEffect } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  stargazers_count: number;
  forks_count: number;
}

interface Project {
  title: string;
  description: string;
  metrics: string;
  tags: string[];
  github: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const GITHUB_USERNAME = "DhananJayKumarMV";

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const repos: GitHubRepo[] = await response.json();
        
        // Filter out forks and sort by stars/recent activity
        const filteredRepos = repos
          .filter(repo => !repo.name.includes('.github.io') && repo.description && repo.name !== GITHUB_USERNAME)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6); // Show top 6 projects

        const transformedProjects: Project[] = filteredRepos.map(repo => ({
          title: repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: repo.description || "GitHub repository with source code and documentation",
          metrics: `${repo.stargazers_count} stars • ${repo.forks_count} forks • Updated ${new Date(repo.updated_at).toLocaleDateString()}`,
          tags: [
            ...(repo.language ? [repo.language] : []),
            ...repo.topics.slice(0, 4)
          ].filter(Boolean),
          github: repo.html_url
        }));

        setProjects(transformedProjects);
        setError(null);
      } catch (err) {
        console.error('Error fetching GitHub repositories:', err);
        setError('Failed to load projects from GitHub');
        
        // Fallback to static projects if API fails
        setProjects([
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
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProjects();
  }, []);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-light text-foreground mb-16 text-center">
          Projects
        </h2>
        
        {loading ? (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-muted-foreground">Loading projects from GitHub...</p>
          </div>
        ) : error ? (
          <div className="text-center text-muted-foreground">
            <p>{error}</p>
            <p className="text-sm mt-2">Showing fallback projects</p>
          </div>
        ) : null}
        
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