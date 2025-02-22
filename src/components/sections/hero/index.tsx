import { FC, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";
import { LoadingNumbers } from "../../loading";
import { BlackSquare } from "../../black-square";
import { LogoGroup } from "../../logo-group";
import { ImageSlider } from "../../image-slider";
import styles from "./Hero.module.scss";

gsap.registerPlugin(TextPlugin);

const NUMBERS = [
  "02",
  "06",
  "12",
  "24",
  "48",
  "56",
  "64",
  "76",
  "82",
  "98",
  "100",
];

interface IHeroSectionProps {
  showSlider: boolean;
  handleShow: () => void;
}

export const HeroSection: FC<IHeroSectionProps> = ({
  showSlider,
  handleShow,
}) => {
  const loaderRef = useRef(null);
  const squareRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [showSquare, setShowSquare] = useState(true);

  useGSAP(
    () => {
      tl.current = gsap.timeline({ repeat: 0 });

      NUMBERS.forEach((number, i) => {
        tl.current?.to(loaderRef.current, {
          text: number,
          duration: 0.1,
          ease: "none",
          delay: i === 0 ? 0 : 0.1,
        });
      });

      tl.current?.to(loaderRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          setShowLogo(true);

          gsap.to(squareRef.current, {
            duration: 1,
            delay: 2,
            y: "-100vh",
            ease: "power1.inOut",
            onComplete: () => {
              setShowSquare(false);
            },
          });
        },
      });
    },
    { scope: loaderRef }
  );

  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>Digital Marketing Agency</p>
      {!showLogo && (
        <div className={styles.numbers}>
          <LoadingNumbers ref={loaderRef} items={NUMBERS} />
        </div>
      )}
      {showLogo ? <LogoGroup handleShow={handleShow} /> : null}
      {showSquare && <BlackSquare ref={squareRef} />}
      {showSlider && <ImageSlider />}
    </section>
  );
};
