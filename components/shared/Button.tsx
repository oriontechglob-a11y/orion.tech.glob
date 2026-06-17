"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { Button as BaseButton, type ButtonProps as BaseButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SharedButtonProps = BaseButtonProps & {
  href?: string;
  children: ReactNode;
};

export function Button({ href, children, ...props }: SharedButtonProps) {
  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.97 },
    transition: { type: "spring" as const, stiffness: 420, damping: 24 },
  };

  if (href) {
    return (
      <motion.span
        className={cn("inline-flex", props.className?.includes("w-full") && "w-full")}
        {...motionProps}
      >
        <BaseButton asChild {...props}>
          <Link href={href}>{children}</Link>
        </BaseButton>
      </motion.span>
    );
  }

  return (
    <motion.span
      className={cn("inline-flex", props.className?.includes("w-full") && "w-full")}
      {...motionProps}
    >
      <BaseButton {...props}>{children}</BaseButton>
    </motion.span>
  );
}
