"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function LogoShine() {
  return (
    <div className="relative inline-block overflow-hidden">
      <Image
        src="/predict.svg"
        alt="Logo"
        width={500}
        height={80}
        className="brightness-0 invert"
      />

      <motion.div
        className="absolute inset-0"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1,
        }}
        style={{
          width: "30%",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.9), transparent)",
          transform: "skewX(-20deg)",
        }}
      />
    </div>
  );
}