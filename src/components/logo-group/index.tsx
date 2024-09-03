import { Dot } from "./dot";

import styles from "./LogoGroup.module.scss";
import { Respect } from "./respect";
import { Studio } from "./studio";

export const LogoGroup = ({ handleShow }: { handleShow: () => void }) => {
  return (
    <div className={styles.container}>
      <div>
        <Respect handleShow={handleShow} />
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
