import { Dot } from "./dot";

import styles from "./LogoGroup.module.scss";
import { Respect } from "./respect";
import { Studio } from "./studio";

export const LogoGroup = () => {
  return (
    <div className={styles.container}>
      <div>
        <Respect />
      </div>
      <div className={styles.containerDot}>
        <Dot />
      </div>
      <div className={styles.containerStudio}>
        <Studio />
      </div>
    </div>
  );
};
