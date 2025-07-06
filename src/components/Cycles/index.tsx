import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();
  const cycleSteps = Array.from({ length: state.currentCycle });
  const cycleDescriptionMap = {
    workTime: 'Ciclo de trabalho',
    shortBreakTime: 'Ciclo de descanso curto',
    longBreakTime: 'Ciclo de descanso longo',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos</span>
      <div className={styles.cyclesDots}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.dot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
