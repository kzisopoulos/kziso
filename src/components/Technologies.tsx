"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { Tooltip, TooltipProvider } from "./ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { LocalImage } from "@/types/LocalImage";

interface TechnologiesProps extends HTMLAttributes<HTMLDivElement> {
  images: LocalImage[];
  size: number;
}

const Technologies: FC<TechnologiesProps> = ({
  className,
  images,
  size,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      <TooltipProvider>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {images.map((img) => (
            <Tooltip key={img.id}>
              <TooltipTrigger>
                <Image
                  src={img.path}
                  alt={img.alt}
                  width={size}
                  height={size}
                  className={`h-[${size}px] w-[${size}px]`}
                />
              </TooltipTrigger>
              <TooltipContent className="mb-2 rounded-lg bg-gray-900 p-2">
                {img.tooltip}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

export default Technologies;
