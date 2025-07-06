import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  // Tips
  const tipsForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime}min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime}min</span>,
    longBreakTime: (
      <span>Descanso longo de {state.config.longBreakTime}min</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime}min</span>,
    shortBreakTime: (
      <span>Próximo Descanso curto de {state.config.shortBreakTime}min</span>
    ),
    longBreakTime: (
      <span>Próximo Descanso longo de {state.config.longBreakTime}min</span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
