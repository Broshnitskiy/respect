import { forwardRef } from "react";
import styles from "./BlackSquare.module.scss";

export const BlackSquare = forwardRef<HTMLDivElement>((props, ref) => {
  return <div className={styles.square} ref={ref} {...props}></div>;
});
