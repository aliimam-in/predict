'use client';

import Image from 'next/image';
import styles from './logo.module.css';

export function LogoShine() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Bada logo */}
      <div className="relative overflow-hidden">
        <Image
          src="/Predict-Logo.png"
          alt="logo"
          width={320}
          height={160}
          className={styles.logo}
        />
        <span className={styles.shine} />
      </div>

      {/* Coming Soon */}
      <div className="flex flex-col items-center gap-2">
        <p className={styles.comingSoon}>Coming Soon</p>
        <div className={styles.dots}>
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}