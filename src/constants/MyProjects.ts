import { Project } from "@/types/Project";
import { technologiesImg } from "./images";

export const myProjects: Project[] = [
  {
    title: "HealthyMinds",
    subtitle: "Clinical Psychologist website",
    image: {
      id: "healthyminds",
      alt: "Healthyminds Website",
      path: "/healthyminds.png",
      tooltip: "Healthyminds",
    },
    linkToSite: "https://www.healthyminds.gr/",
    description:
      "Healthyminds, a Clinical Pshycologist office website for blogging. It's built with Nextjs, Sanity IO and Tailwindcss.",
    technologies: [
      ...technologiesImg.filter((tech) =>
        ["nextjs", "react", "tailwindcss"].includes(tech.id),
      ),
      {
        id: "sanity",
        alt: "Sanity IO logo",
        path: "/sanity.svg",
        tooltip: "Sanity IO",
      },
    ],
  },
  {
    title: "Collaborate App",
    subtitle: "Task management SaaS solution",
    image: {
      id: "collaborate",
      alt: "Collaborate app Website",
      path: "/collaborate.png",
      tooltip: "Collaborate App",
    },
    linkToSite: "https://collaborate-ten.vercel.app/",
    description:
      "Collaborate app, is a SaaS created for small teams to manage their tasks efficiently.It's built with React, Node , MySQL and Tailwindcss.",
    technologies: [
      ...technologiesImg.filter((tech) =>
        ["react", "node", "mysql", "tailwindcss"].includes(tech.id),
      ),
    ],
  },
];
