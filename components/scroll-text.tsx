'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollTextOverlay() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const text1 = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const text2 = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const text3 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const text4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);

  return (
    <div ref={containerRef} className="relative h-[600vh]">

      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-20">

        <motion.div style={{ opacity: text1 }} className="absolute text-white text-5xl font-bold text-center">
          There is an <span className="text-blue-500">organ</span> that predicts everything.
        </motion.div>

        <motion.div style={{ opacity: text2 }} className="absolute text-white left-20 top-1/3">
          <h2 className="text-6xl font-bold">Muscle</h2>
          <p className="text-white/60">THE ORGAN</p>
        </motion.div>

        <motion.div style={{ opacity: text3 }} className="absolute text-white text-6xl">
          Innovation
        </motion.div>

        <motion.div style={{ opacity: text4 }} className="absolute text-white text-6xl">
          Let’s Build
        </motion.div>

      </div>
    </div>
  );
}