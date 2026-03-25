import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        className="w-35"
        src={logo}
        loading="eager"
        height="auto"
        width="auto"
        quality={100}
        alt="The Shirin Resort logo"
      />
      <span className="hidden sm:block text-lg font-semibold text-purple-500">
        The Shirin Resort
      </span>
    </Link>
  );
}

export default Logo;
