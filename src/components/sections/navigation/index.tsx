import { useRef } from "react";
import styles from "./Nav.module.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export const Navigation = () => {
  const containerSlideRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(containerSlideRef.current, { y: 140 }, { y: 0, duration: 1.2 });
  });

  return <div ref={containerSlideRef} className={styles.wrapper}></div>;
};
