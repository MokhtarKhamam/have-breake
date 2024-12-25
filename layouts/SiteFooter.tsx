import Logo from "@/components/layouts/Logo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const SiteFooter = () => {
  return (
    <footer className=" border border-t ">
      <div className="container flex items-start justify-between  gap-5">
        <Logo />
        <section className="flex justify-between items-center flex-1 grid-cols-1 gap-10 xxs:grid-cols-2 sm:grid-cols-4">
          {siteConfig.footerNav.map((item) => (
            <div key={item.title} className="space-y-3">
              <h4 className="text-base font-medium">{item.title}</h4>
              <ul className="space-y-2.5">
                {item.items.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      target={link?.external ? "_blank" : undefined}
                      rel={link?.external ? "noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.title}
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </footer>
  );
};

export default SiteFooter;
