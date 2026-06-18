"use client";

import Link from "next/link";
import Image from "next/image";
import { LockKeyhole, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/shared/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY, scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.94)"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 14px 40px rgba(11,31,58,0.08)"],
  );

  return (
    <motion.header
      style={{ backgroundColor, boxShadow }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md"
    >
      <motion.div className="h-1 origin-left bg-accent" style={{ scaleX: scrollYProgress }} />
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 font-semibold text-primary"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-md bg-primary shadow-sm transition-transform duration-300 ease-out group-hover:-rotate-3 group-hover:scale-105">
            <Image
              src="/images/orion-mark.png"
              alt="Shree Hari Hardware Mart logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="text-lg tracking-tight">Shree Hari Hardware Mart</span>
        </Link>
        <div className="depth-card hidden items-center gap-1 rounded-md border border-border bg-white p-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-md px-4 py-2 text-sm font-black text-muted transition-colors hover:text-primary",
                pathname === link.href && "bg-primary text-white hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <div className="depth-card flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-surface text-accent">
              <LockKeyhole className="h-3.5 w-3.5" />
            </span>
            Secure Live
          </div>
          <Button href="/contact" size="sm">
            Get a Quote
          </Button>
        </div>
        <motion.button
          type="button"
          className="relative z-[70] grid h-12 w-12 shrink-0 place-items-center rounded-md border border-primary bg-primary text-white shadow-xl shadow-primary/20 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
              >
                <Menu className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            className="depth-card border-t border-border bg-white px-4 py-6 shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <motion.div
              className="mx-auto flex max-w-7xl flex-col gap-3"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex min-h-12 items-center rounded-md border border-border px-3 text-base font-black text-primary hover:bg-surface",
                      pathname === link.href && "bg-primary text-white hover:bg-primary",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                className="pt-2"
              >
                <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
