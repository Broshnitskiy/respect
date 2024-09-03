import { useRef } from "react";
import styles from "./Nav.module.scss";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import { Header } from "../../header";

export const Navigation = () => {
  const containerSlideRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!containerSlideRef.current || !titleRef.current) return;

      gsap.fromTo(
        containerSlideRef.current,
        { y: 140 },
        { y: 0, duration: 1.2 }
      );

      gsap.fromTo(
        titleRef.current.querySelectorAll("span"),
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1,
          stagger: 0.05,
          ease: "power2.inOut",
          delay: 0.1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%", // починається коли верх заголовка досягає 80% висоти вьюпорта
            end: "bottom top", // закінчується коли низ заголовка досягає верху вьюпорта
            once: true, // анімація відбудеться тільки один раз
          },
        }
      );
    },
    { scope: containerSlideRef }
  );

  return (
    <section ref={containerSlideRef} className={styles.wrapper}>
      <Header />
      <h1 className={styles.title} ref={titleRef}>
        {"Growing businesses by building relationships"
          .split("")
          .map((el, i) => {
            return <span key={i}>{el}</span>;
          })}
      </h1>
      <p className={styles.info}>
        B2B Marketing & LinkedIn Lead Generation agency
      </p>
    </section>
  );
};
