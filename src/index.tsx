import React from "react";
import styles from "./styles.module.css";

const Hermes = () => {
  return (
    <div className={styles.hermes}>
      <div className={styles.hermesTitle}>Stay updated with a weekly update newsletter</div>
      <div className={styles.hermesSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis corporis qui eligendi, odit harum obcaecati laudantium eos quas excepturi.</div>
      <form className={styles.hermesForm}>
        <input className={styles.hermesInput} type="email" placeholder="youremail@example.com" />
        <button className={styles.hermesButton}>Join</button>
      </form>
    </div>
  );
}

export default Hermes;
