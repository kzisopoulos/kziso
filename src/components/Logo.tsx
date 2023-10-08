import { Cpu } from "lucide-react";
import Link from "next/link";
import { FC, HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLAnchorElement> {}

const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <Link
      aria-label="Logo and link to homepage"
      href="/"
      className="flex items-center gap-2"
      {...props}
    >
      <div className="rounded-sm bg-amber-500 p-2">
        <Cpu size={40} />
      </div>
      <div className="bg-gradient-to-r from-amber-100 to-amber-500 bg-clip-text text-xl font-black tracking-tighter text-transparent md:text-3xl">
        kostas zisopoulos.
      </div>
    </Link>
  );
};

export default Logo;
