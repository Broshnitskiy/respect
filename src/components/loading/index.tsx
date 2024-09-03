import { forwardRef } from "react";
import styles from "./Loading.module.scss";

export const LoadingNumbers = forwardRef<HTMLDivElement, { items: string[] }>(
  ({ items }, ref) => {
    return (
      <p className={styles.number} ref={ref}>
        {items[0]}
      </p>
    );
  }
);
