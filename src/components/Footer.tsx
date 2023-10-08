"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  const scrollToTop = () => {
    const navRef = document.getElementById("top");
    navRef?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className={cn("border-t py-4", className)} {...props}>
      <div className="container relative">
        <Button
          aria-label="Scroll to top button"
          variant="outline"
          className="absolute -top-10 right-8 h-12 w-12 rounded-full bg-amber-500"
          onClick={scrollToTop}
        >
          <ArrowUp size={20} />
        </Button>
      </div>
      <div className="mt-4 text-center text-xs">
        &reg; Konstantinos Zisopoulos {new Date().getFullYear()} All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
