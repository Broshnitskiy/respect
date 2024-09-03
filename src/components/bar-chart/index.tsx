import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./BarChart.module.scss";
import { useGSAP } from "@gsap/react";

const data = [
  { id: "1", value: 23 },
  { id: "2", value: 53 },
  { id: "3", value: 61 },
  { id: "4", value: 58 },
  { id: "5", value: 30 },
  { id: "6", value: 63 },
  { id: "7", value: 55 },
  { id: "8", value: 83 },
  { id: "9", value: 71 },
  { id: "10", value: 88 },
  { id: "11", value: 90 },
  { id: "12", value: 65 },
  { id: "13", value: 90 },
  { id: "14", value: 98 },
];

gsap.registerPlugin(ScrollTrigger);

export const BarChart = () => {
  const chartRef = useRef<HTMLUListElement | null>(null);

  useGSAP(() => {
    if (chartRef.current) {
      const bars = chartRef.current.querySelectorAll(`.${styles.item} div`);

      gsap.fromTo(
        bars,
        { height: "0%" },
        {
          height: (index) => `${data[index].value}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top 80%", // Анімація починається, коли верх секції досягає 80% висоти вьюпорта
            end: "bottom top", // Закінчується, коли нижній край секції досягає верху вьюпорта
            toggleActions: "play none none none", // Анімація відбудеться тільки один раз
          },
        }
      );
    }
  }, []);

  return (
    <ul className={styles.list} ref={chartRef}>
      {data.map(({ id, value }) => {
        return (
          <li key={id} className={styles.item}>
            <p>{value}</p>
            <div
              style={{
                width: "100%",
                background: "#E63E3A",
              }}
            ></div>
          </li>
        );
      })}
    </ul>
  );
};
