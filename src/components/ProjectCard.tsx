import { Project } from "@/types/Project";
import { FC, HTMLAttributes } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Technologies from "./Technologies";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({
  className,
  project,
  ...props
}) => {
  return (
    <Card
      className="max-w-sm border-none bg-gray-800 shadow-sm  shadow-white/10"
      {...props}
    >
      <CardHeader>
        <CardTitle className=" font-extrabold ">{project.title}</CardTitle>
        <CardDescription className="text-white">
          {project.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative h-72">
        <Image
          src={project.image.path}
          alt={project.image.alt}
          fill
          quality={75}
          sizes={"50vw"}
          className="object-cover"
        />
      </CardContent>
      <CardFooter className="flex h-[17rem]  flex-col gap-3">
        <Technologies images={project.technologies} size={40} className="" />
        <div className="flex-1 self-start">{project.description}</div>
        <Link
          aria-label={`Link to ${project.title} website`}
          href={project.linkToSite}
          target="_blank"
          className="flex items-center self-end rounded-lg bg-amber-500 px-3 py-2 font-bold"
        >
          Visit site
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
