import Rs from "@/assets/svg/rs.svg";
import Arrow from "@/assets/svg/arrow-right.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img className={styles.logo} src={Rs} alt="logo" />
        <ul className={styles.list_1}>
          {["Services", "Case Studies", "Blog"].map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
        <ul className={styles.list_2}>
          {["We're hiring", "Contacts"].map((el) => {
            return <li key={el}>{el}</li>;
          })}
        </ul>
        <button className={styles.btn} type="button">
          <img src={Arrow} alt="Arrow" />
          <p>Book a call</p>
        </button>
      </nav>
    </header>
  );
};
