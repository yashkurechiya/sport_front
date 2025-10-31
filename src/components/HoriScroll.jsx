import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Chart from '../games/Chart';
import Achievement from '../games/Achievement';
 

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function HoriScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Pin the trigger element for the duration of the scroll
    const pin = gsap.to(sectionRef.current, {
      translateX: () => `-${sectionRef.current.scrollWidth - triggerRef.current.offsetWidth}px`,
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${sectionRef.current.scrollWidth - triggerRef.current.offsetWidth}`,
        scrub: 0.5, // Smoothly ties the animation to the scrollbar
        pin: true,  // Pins the trigger element
        invalidateOnRefresh: true,
      },
    });

    // Cleanup function to kill the animation on component unmount
    return () => {
      pin.kill();
    };
  }, []);

  return (
    // The trigger container that gets pinned
    <div className="scroll-trigger" ref={triggerRef}>
      {/* The section that moves horizontally */}
      <div className="scroll-section" ref={sectionRef}>

         

        <div className="scroll-panel h-max-screen color-1 back"><Achievement /></div>
        <div className="scroll-panel h-max-screen color-2  "><Chart /></div>
        <div className="scroll-panel h-max-screen color-3  "><h1>Panel 3</h1></div>
        <div className="scroll-panel h-max-screen color-4 "><h1>Panel 4</h1></div>
        <div className="scroll-panel h-max-screen color-5  "><h1>Panel 5</h1></div>
      </div>
    </div>
  );
}

export default HoriScroll;