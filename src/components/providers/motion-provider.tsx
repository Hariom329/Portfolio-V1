'use client';

import type { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
    >
      {children}
    </MotionConfig>
  );
}
