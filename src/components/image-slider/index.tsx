import styles from "./ImageSlider.module.scss";

import { useRef } from "react";
import { gsap } from "gsap";
import Img_1 from "@/assets/images/01header.webp";
import Img_2 from "@/assets/images/02header.webp";
import Img_3 from "@/assets/images/03header.webp";
import Img_4 from "@/assets/images/04header.webp";
import { useGSAP } from "@gsap/react";

const images = [Img_1, Img_2, Img_3, Img_4];

export const ImageSlider = () => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const containerSlideRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const fadeDuration = 0.01;
    const stayDuration = 1;

    gsap.fromTo(containerSlideRef.current, { y: 140 }, { y: 0, duration: 1.2 });

    // Встановлюємо видимість першого зображення
    gsap.set(imageRefs.current[0], { autoAlpha: 1 });

    // Створюємо таймлайн для анімації
    const tl = gsap.timeline({ repeat: -1, delay: 1.4 });

    // Анімація: показуємо кожне зображення (крім першого) поступово
    tl.to(imageRefs.current.slice(1), {
      delay: stayDuration,
      autoAlpha: 1,
      duration: fadeDuration,
      stagger: stayDuration + fadeDuration,
    })
      // Ховаємо кожне зображення після того, як наступне зображення стало видимим (крім останнього)
      .to(
        imageRefs.current.slice(0, imageRefs.current.length - 1),
        {
          autoAlpha: 0,
          duration: 0.01,
          stagger: stayDuration + fadeDuration,
        },
        stayDuration + fadeDuration
      )
      // Знову показуємо перше зображення
      .set(imageRefs.current[0], { autoAlpha: 1 })
      // Ховаємо останнє зображення, щоб знову показати перше
      .to(
        imageRefs.current[imageRefs.current.length - 1],
        { autoAlpha: 0, duration: fadeDuration },
        `+=${stayDuration}`
      );
  });

  return (
    <div ref={containerSlideRef} className={styles.container}>
      {images.map((src, i) => (
        <img
          key={i}
          ref={(el) => (imageRefs.current[i] = el)}
          src={src}
          alt={`Slideshow ${i}`}
          className={styles.img}
        />
      ))}
    </div>
  );
};
