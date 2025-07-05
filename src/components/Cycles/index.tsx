import styles from './styles.module.css';
export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>
      <div className={styles.cyclesDots}>
        <span className={`${styles.dot} ${styles.workTime}`}> </span>
        <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
        <span className={`${styles.dot} ${styles.workTime}`}> </span>
        <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
        <span className={`${styles.dot} ${styles.workTime}`}> </span>
        <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
        <span className={`${styles.dot} ${styles.workTime}`}> </span>
        <span className={`${styles.dot} ${styles.longBreakTime}`}> </span>
      </div>
    </div>
  );
}
