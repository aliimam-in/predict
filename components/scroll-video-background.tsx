'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function ScrollStory() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const [duration, setDuration] = useState(0);
  const videoTime = useTransform(scrollYProgress, [0, 1], [0, duration]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onLoaded = () => setDuration(video.duration);
    video.addEventListener('loadedmetadata', onLoaded);
    return () => video.removeEventListener('loadedmetadata', onLoaded);
  }, []);

  useEffect(() => {
    return videoTime.on('change', (v) => {
      if (videoRef.current && isFinite(v)) {
        videoRef.current.currentTime = v;
      }
    });
  }, [videoTime]);

  // ✅ HELPER: har scene ke liye opacity banata hai [enter_start, enter_end, hold_end, exit_end]
  function useScene(enter: [number, number], exit: [number, number]) {
    const fadeIn = useTransform(scrollYProgress, [enter[0], enter[1]], [0, 1]);
    const fadeOut = useTransform(scrollYProgress, [exit[0], exit[1]], [1, 0]);

    // Dono ko combine karo — minimum lena safe hai kyunki ek time pe sirf ek active hoga
    return useTransform(
      [fadeIn, fadeOut] as any,
      ([fi, fo]: number[]) => Math.min(fi, fo)
    );
  }

  // 🎯 7 SCENES — har ek cleanly enters and exits, koi overlap nahi
  // Format: useScene([enter_start, enter_end], [exit_start, exit_end])
  const op1 = useScene([1, 0.1], [0.1, 0.12]);
  const op2 = useScene([0.12, 0.14], [0.18, 0.20]);
  const op3 = useScene([0.20, 0.22], [0.28, 0.30]);
  const op4 = useScene([0.30, 0.32], [0.38, 0.40]);
  const op5 = useScene([0.60, 0.62], [0.70, 0.72]);
  const op6 = useScene([0.70, 0.72], [0.72, 0.82]);
  const op7 = useScene([0.80, 0.82], [0.80, 0.92]);
  // (Scenes 6 & 7 added below if needed — same pattern)

  return (
    <div ref={containerRef} className="relative h-[700vh]">

      {/* VIDEO */}
      <div className="sticky top-0 h-screen w-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source src="/blood.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT LAYER */}
        <div className="absolute inset-0 pointer-events-none">

          {/* SCENE 1 — Center */}
          <motion.div
            style={{ opacity: op1 }}
            className="absolute px-10 inset-0 flex items-center justify-center text-center"
          >
            <h1 className="text-white text-5xl font-medium">
              There is an <span className='text-purple-500 font-playfair'>organ</span> that <br /> predicts<span className='text-purple-500 font-playfair'> everything.</span>
            </h1>
          </motion.div>

          {/* SCENE 2 — Left */}
          <motion.div
            style={{ opacity: op2 }}
            className="absolute left-10 top-1/4 text-left"
          >
            <p className="text-white">The Organ</p>
            <h2 className="text-6xl text-purple-500 font-playfair">Muscle</h2>

          </motion.div>

          {/* SCENE 3 — Right */}
          <motion.div
            style={{ opacity: op3 }}
            className="absolute w-72 right-10 top-1/4 text-right"
          >
            <h2 className="text-4xl ">When <span className='text-purple-500 font-playfair'>muscle</span>  deslines - <span className='text-purple-500 font-playfair'>everything</span> follows.</h2>

          </motion.div>

          {/* SCENE 4 — Center */}
          <motion.div
            style={{ opacity: op4 }}
            className="absolute left-10 w-72 top-1/3 -mt-44 text-left"
          >

            <h2 className="text-4xl font-playfair">Most <span className='text-purple-500 font-playfair'>chronic disease </span> doesn't start in the  <span className='text-purple-500 font-playfair'>organ</span> that fails.</h2>
            <p className="text-white pt-4"> It starts in the muscle that stopped protecting it.</p>
            <p className="text-white uppercase text-xs opacity-80 pt-4"> Years earlier.</p>
          </motion.div>

          {/* SCENE 5 — Center Final */}
          <motion.div
            style={{ opacity: op5 }}
            className="absolute right-10 top-1/2 text-right"
          >
            <p className="text-white pr-10" >The Signal</p>
            <h2 className="text-6xl text-purple-500 font-playfair">Blood.</h2>

          </motion.div>

          <motion.div
            style={{ opacity: op6 }}
            className="absolute left-10 w-72 top-1/3 text-left"
          >
            <h2 className="text-6xl text-purple-500 font-playfair">Blood</h2>

            <p className="text-white">A live data stream. Following through you. Right now.</p>
          </motion.div>

          {/* SCENE 3 — Right */}
          <motion.div
            style={{ opacity: op7 }}
            className="absolute right-10 top-1/2 text-right"
          >
            <h2 className="text-4xl w-80 font-playfair">Your blood carries <span className='text-purple-500 font-playfair'>your true age. </span> </h2>
            <p className="text-white pt-4" >Every second, it circulates signals:</p>
            <div className="space-y-2 text-white">
              <p>• The rate of breakdown</p>
              <p>• The capacity to regenerate</p>
              <p>• The metabolic efficiency</p>
              <p>• The inflammatory burden</p>
              <p>• The vascular integrity</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}