import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import { siteConfig } from "@/config/site";

const Logo = () => {
  return (
    <div>
      <Link href="/" className="items-center space-x-2 flex">
        <Icons.logo className="size-7" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
    </div>
  );
};

export default Logo;
