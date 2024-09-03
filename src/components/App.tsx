import { useEffect, useRef, useState } from "react";
import { HeroSection } from "./sections/hero";
import { Navigation } from "./sections/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showSection, setShowSection] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  const handleShow = () => {
    setShowSection(true);
  };

  useEffect(() => {
    if (heroRef.current && navigationRef.current) {
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      ScrollTrigger.create({
        trigger: navigationRef.current,
        start: "top top",
        end: "bottom top",
        pin: false,
        scrub: true,
      });
    }
  }, [showSection]);

  return (
    <>
      <div ref={heroRef}>
        <HeroSection showSlider={showSection} handleShow={handleShow} />
      </div>
      {showSection && (
        <div ref={navigationRef}>
          <Navigation />
        </div>
      )}
    </>
  );
}

export default App;
