import { FC, ReactElement } from "react";
import styles from "./Container.module.scss";

interface IContProps {
  children: ReactElement;
}

export const Container: FC<IContProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
