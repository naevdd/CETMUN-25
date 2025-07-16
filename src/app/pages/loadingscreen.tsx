'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onFinish }) {
  const overlayRef = useRef(0);
  const textRef = useRef(0);
  const imageRef = useRef(0);

  useEffect(() => {
    const text = 'CET MUN 2025';
    const letters = text.split('');

    // Render each character including spaces as span
    textRef.current.innerHTML = letters
      .map((char) =>
        char === ' '
          ? `<span class="inline-block opacity-0">&nbsp;</span>`
          : `<span class="inline-block opacity-0">${char}</span>`
      )
      .join('');

    const spans = textRef.current.querySelectorAll('span');

    const tl = gsap.timeline({
      onComplete: () => {
        if (onFinish) onFinish();
      },
    });

    tl.to(spans, {
      opacity: 1,
      stagger: 0.06,
      ease: 'power2.out',
      duration: 0.5,
    })
      .fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(0)' }
      )
      .to([textRef.current, imageRef.current], {
        opacity: 0,
        delay: 0.5,
        duration: 0.5,
      })
      .to(overlayRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut',
      });
  }, [onFinish]);


  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full bg-background z-50 flex pt-42 justify-center"
    >
      <h1
        ref={textRef}
        className="text-gradient font-serif text-8xl tracking-wide whitespace-nowrap"
      />
      <img ref={imageRef} src="/logo.png" width={250} priority="true" className="opacity-0 absolute rounded-4xl mt-[200px]"></img>
    </div>
  );
}
