import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {}

const AboutMe: FC<AboutMeProps> = ({ className, ...props }) => {
  return (
    <div className={cn("container", className)} {...props}>
      <h2 className="bg-gradient-to-r from-white to-amber-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
        So who am I ?
      </h2>
      <div className=" py-10 text-sm tracking-wider md:text-xl">
        <p>
          Hello! I&apos;m Kostas, a dedicated web developer with a profound
          passion for creating exceptional digital experiences. My journey has
          been shaped by a deep fascination for programming, and I bring this
          enthusiasm to every project I undertake.
        </p>
      </div>
      <div className=" py-4 text-sm tracking-wider md:text-xl">
        <p>
          My diverse web development expertise, gained through various
          experiences, spans industries from finance to navigating the dynamic
          world of forex trading. I&apos;ve built user-friendly Android and iOS
          apps using JavaScript. With a holistic perspective on digital
          solutions, I also excel in crafting enterprise-level applications,
          leveraging OpenAI&apos;s cutting-edge tools and APIs. Lets collaborate
          to bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
