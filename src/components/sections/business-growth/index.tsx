import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import styles from "./BusinessGrowth.module.scss";
import { useRef } from "react";
import { BarChart } from "../../bar-chart";
import { Statistics } from "../../statistics";

export const BusinessGrowth = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (!titleRef.current || !paragRef.current) return;

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

    gsap.fromTo(
      paragRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: paragRef.current,
          start: "top 90%", // починається коли верх параграфа досягає 90% висоти вьюпорта
          end: "bottom top", // закінчується коли низ параграфа досягає верху вьюпорта
          once: true, // анімація відбудеться тільки один раз
        },
      }
    );
  });

  return (
    <section className={styles.section}>
      <div className={styles.chartWrapper}>
        <h2 className={styles.title} ref={titleRef}>
          {"Consitent leads flow to streamline Your business growth."
            .split("")
            .map((el, i) => {
              return <span key={i}>{el}</span>;
            })}
        </h2>
        <p className={styles.parag} ref={paragRef}>
          We combine disruptive marketing techniques with proven tech solutions
          to provide maximum business value.{" "}
        </p>

        <BarChart />
      </div>

      <Statistics />
    </section>
  );
};
