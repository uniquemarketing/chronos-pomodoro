import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import styles from './styles.module.css';

export function CountDown() {
  const { state } = useTaskContext();
  return (
    <div className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
}
