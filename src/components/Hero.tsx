import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ExploreIcon from "@mui/icons-material/Explore";
import Technologies from "./Technologies";
import { technologiesImg } from "@/constants/images";
import { VisualEnhancment } from "./VisualEnhancment";

interface HeroProps extends HTMLAttributes<HTMLDivElement> {}

const Hero: FC<HeroProps> = ({ className, ...props }) => {
  return (
    <div className={cn("container", className)} {...props}>
      <h1 className="bg-gradient-to-r from-white to-amber-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
        Crafting Digital Experiences, One Line of Code at a Time.
      </h1>
      <Technologies images={technologiesImg} size={55} className="py-8" />
      <VisualEnhancment />
      <div className="relative py-10 text-sm tracking-wider md:text-xl">
        <FormatQuoteIcon className="mx-auto my-2 block text-3xl text-amber-200" />
        <p>
          Welcome to my digital playground, where I bring ideas to life. As a
          versatile web developer, I specialize in Next.js, React, TypeScript,
          Tailwind CSS, MySQL, Node.js with Express, and more. With a passion
          for crafting seamless user experiences and creative problem-solving, I
          thrive in web development. With hands-on experience of OpenAI&apos;s
          tools and APIs, having applied them in enterprise-level projects. Lets
          collaborate and turn your vision into an interactive reality.
        </p>
        <FormatQuoteIcon className="mx-auto my-2 block text-3xl text-amber-200" />
      </div>
      <div className="flex flex-col gap-4 text-sm md:flex-row md:text-xl">
        <Link
          aria-label="Link to projects section"
          href="/#projects"
          className="flex w-48 items-center justify-center gap-1 rounded-md border bg-amber-500 px-4 py-3 font-bold uppercase  hover:bg-amber-600"
        >
          Explore
          <ExploreIcon />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
