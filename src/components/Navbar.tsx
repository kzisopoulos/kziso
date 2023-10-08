"use client";
import React, { FC, HTMLAttributes, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";
import { Menu, Rocket, Send } from "lucide-react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useBreakpoints } from "@/hooks/useBreakpoints";
import Link from "next/link";

interface NavbarProps extends HTMLAttributes<HTMLDivElement> {}

const Navbar: FC<NavbarProps> = ({ className, ...props }) => {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const { isMobile } = useBreakpoints();
  const navlinks = [
    {
      to: "/#projects",
      name: "Projects",
      icon: <Rocket className="text-amber-200 " size={20} strokeWidth="3" />,
      type: "internal",
    },
    {
      to: "/#contact",
      name: "Contact",
      icon: <Send className="text-amber-200" size={20} strokeWidth={"3"} />,
      type: "internal",
    },
    {
      to: "https://github.com/kzisopoulos",
      name: "Github",
      icon: (
        <GitHubIcon
          className="text-amber-200"
          {...(!isMobile && { fontSize: "large" })}
        />
      ),
      type: "social",
    },
    {
      to: "https://www.linkedin.com/in/konstantinos-zisopoulos-533678211/",
      name: "LinkedIn",
      icon: (
        <LinkedInIcon
          className="text-amber-200"
          {...(!isMobile && { fontSize: "large" })}
        />
      ),
      type: "social",
    },
  ];

  useEffect(() => {
    if (!isMobile) {
      setNavIsOpen(false);
    }
  }, [isMobile]);

  const handleNavbarOpen = () => {
    setNavIsOpen((prev) => !prev);
  };
  return (
    <nav id="top" className={cn("border-b py-4", className)} {...props}>
      <div className="container">
        <div className="flex items-center justify-between py-4 ">
          <Logo />
          <ul
            className={cn("flex items-center gap-4 text-xl font-semibold", {
              hidden: isMobile,
            })}
          >
            {navlinks.map((link) => (
              <React.Fragment key={link.name}>
                {link.type === "internal" ? (
                  <li
                    key={link.name}
                    className="group relative flex items-center gap-2 p-2 text-amber-200"
                  >
                    {link.icon}
                    <Link
                      aria-label={`Navigate to ${link.name}`}
                      href={link.to}
                      className="translate-x-0 transform-gpu   rounded-sm transition duration-300  ease-in-out  "
                    >
                      {link.name}
                    </Link>
                    <div className="absolute inset-x-0 bottom-0 -my-2 h-[3px] scale-x-0 transform bg-amber-200 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                  </li>
                ) : (
                  <li key={link.name} className="flex items-center gap-2 p-2 ">
                    <Link
                      aria-label={`Link to ${link.name}`}
                      target="_blank"
                      href={link.to}
                      className="translate-x-0 transform-gpu   rounded-sm transition duration-300  ease-in-out hover:text-amber-200 "
                    >
                      {link.icon}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <Menu
            size={30}
            className={cn("cursor-pointer text-amber-200", {
              hidden: !isMobile,
            })}
            onClick={handleNavbarOpen}
          />
        </div>
        {navIsOpen && (
          <div className="px-1 py-6">
            <ul
              className={cn(
                "flex flex-col items-center gap-8 text-xl font-semibold",
              )}
            >
              {navlinks.map((link) => (
                <li
                  key={link.name}
                  className="group relative flex items-center gap-2 text-amber-200"
                >
                  {link.icon}
                  <Link
                    href={link.to}
                    className="translate-x-0 transform-gpu  rounded-sm transition duration-300  ease-in-out "
                  >
                    {link.name}
                  </Link>
                  <div className="absolute inset-x-0 bottom-0 -my-2 h-[3px] scale-x-0 transform bg-amber-200 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
