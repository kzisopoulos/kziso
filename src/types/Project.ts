import { LocalImage } from "./LocalImage";

export interface Project {
  title: string;
  subtitle: string;
  image: LocalImage;
  technologies: LocalImage[];
  description: string;
  linkToSite: string;
}
