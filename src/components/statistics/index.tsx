import { useGSAP } from "@gsap/react";
import styles from "./Statistics.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const mockData = [
  {
    id: "1",
    text: "Revenue generated for clients",
    score: 1570,
    mlBlock: "",
    mlCont: "auto",
  },
  {
    id: "2",
    text: "Conversationd opened",
    score: 1200,
    mlBlock: "40%",
    mlCont: "20%",
  },
  {
    id: "3",
    text: "Leads generated via targeted",
    score: 378,
    mlBlock: "",
    mlCont: "",
  },
  {
    id: "4",
    text: "Calls scheduled for clients",
    score: 197,
    mlBlock: "55%",
    mlCont: "10%",
  },
];

export const Statistics = () => {
  const listRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    if (listRef.current) {
      const listItems = listRef.current.querySelectorAll(`.${styles.listItem}`);
      const contentWrappers = listRef.current.querySelectorAll(
        `.${styles.contentWrapper}`
      );

      gsap.fromTo(
        listItems,
        { width: "0%" },
        {
          width: "auto",
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%", // починається коли верх секції досягає 80% висоти вьюпорта
            end: "bottom top", // закінчується коли низ секції досягає верху вьюпорта
            toggleActions: "play none none none", // анімація відбудеться тільки один раз
          },
        }
      );

      gsap.fromTo(
        contentWrappers,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          delay: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 60%",
            end: "bottom 30%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  return (
    <ul className={styles.list} ref={listRef}>
      {mockData.map((el) => {
        return (
          <li
            className={styles.listItem}
            key={el.id}
            style={{ marginLeft: el.mlBlock }}
          >
            <div
              className={styles.contentWrapper}
              style={{ marginLeft: el.mlCont }}
            >
              <p className={styles.text}>{el.text}</p>
              <p className={styles.score}>{el.score}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
