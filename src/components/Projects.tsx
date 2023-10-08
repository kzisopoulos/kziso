import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import { myProjects } from "@/constants/MyProjects";
import ProjectCard from "./ProjectCard";
import { VisualEnhancment } from "./VisualEnhancment";

interface ProjectsProps extends HTMLAttributes<HTMLDivElement> {}

const Projects: FC<ProjectsProps> = ({ className, ...props }) => {
  return (
    <div id="projects" className={cn("container", className)} {...props}>
      <h2 className="bg-gradient-to-r from-white to-amber-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
        Projects
      </h2>
      <VisualEnhancment />
      <div className="mt-12 flex flex-wrap justify-center gap-10 lg:justify-start">
        {myProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
