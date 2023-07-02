import styles from "./styles.module.css";

const Remember = () => {
  return (
    <div className={styles.remember}>
      <div className={styles.rememberTitle}>Stay updated with a weekly update newsletter</div>
      <div className={styles.rememberSubtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis blanditiis corporis qui eligendi, odit harum obcaecati laudantium eos quas excepturi.</div>
      <form className={styles.rememberForm}>
        <input className={styles.rememberInput} type="email" placeholder="youremail@example.com" />
        <button className={styles.rememberButton}>yo</button>
      </form>
    </div>
  );
}

export default Remember;
