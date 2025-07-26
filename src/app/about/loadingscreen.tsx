'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (imageRef.current && overlayRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'auto';
          if (onFinish) onFinish();
        },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(0)' }
      )
        .to([imageRef.current], {
          opacity: 0,
          delay: 0.3,
          duration: 0.3,
        })
        .to(overlayRef.current, {
          y: '-100%',
          duration: 1,
          ease: 'power2.inOut',
        });
    }

    // 3. Cleanup function to re-enable scrolling if the component unmounts unexpectedly
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [onFinish]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 font-seasons_b left-0 w-full h-full bg-background z-50 flex pt-42 justify-center"
    >
      <img
        ref={imageRef}
        src="/logo.png"
        className="opacity-0 absolute rounded-4xl sm:w-[350px] w-[220px] sm:mt-[110px] mt-[60px]"
        alt="CET MUN Logo"
      />
    </div>
  );
}