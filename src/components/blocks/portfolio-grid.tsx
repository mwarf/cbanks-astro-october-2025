import { useState } from "react";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/portfolio-data";
import { ProjectVideoModal } from "./project-video-modal";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  const handleFilterChange = (category: string) => {
    if (category === filter) return;
    setIsAnimating(true);
    setFilter(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => handleFilterChange(category)}
            className={cn(
              "rounded-full transition-all duration-300",
              filter === category ? "px-6" : "px-4 opacity-70 hover:opacity-100"
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300",
        isAnimating ? "opacity-50" : "opacity-100"
      )}>
        {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group border-none shadow-none bg-transparent animate-in fade-in zoom-in-95 duration-500 fill-mode-both"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-0 space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                  <a href={`/portfolio/${project.id}`} className="block h-full w-full">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                  </a>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedProject(project);
                      }}
                      className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20 pointer-events-auto cursor-pointer"
                    >
                      <Play className="w-8 h-8 text-white fill-white" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{project.client}</span>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>
                  <a href={`/portfolio/${project.id}`} className="block">
                    <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                  </a>
                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
        ))}
      </div>

      <ProjectVideoModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
