"use client";

import Link from "next/link";
import Image from "next/image";
import { BriefcaseBusiness, GitBranch, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <motion.footer
      className="bg-primary text-white"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-white transition-transform duration-300 ease-out hover:scale-105">
              <Image
                src="/images/orion-mark.png"
                alt="Orion Tech logo"
                width={44}
                height={44}
                className="h-full w-full object-cover"
              />
            </span>
            Orion Tech
          </div>
          <p className="max-w-md text-sm leading-7 text-white/75">
            Premium web and app development for teams that need dependable engineering, polished
            interfaces, and launch-ready delivery.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
            Quick Links
          </h2>
          <div className="grid gap-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
            Connect
          </h2>
          <a
            href="mailto:oriontech.glob@gmail.com"
            className="mb-5 flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" /> oriontech.glob@gmail.com
          </a>
          <div className="flex gap-3" aria-label="Social links">
            {[GitBranch, BriefcaseBusiness, MessageCircle].map((Icon, index) => (
              <a
                key={index}
                href="#"
                aria-label="Social profile placeholder"
                className="grid h-10 w-10 place-items-center rounded-md border border-white/20 text-white/75 transition-colors hover:bg-white hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} Orion Tech. All rights reserved.
      </div>
    </motion.footer>
  );
}
