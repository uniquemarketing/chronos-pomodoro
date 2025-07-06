import { useEffect, useReducer } from 'react';
import { initialTaskState } from './initialTaskState';
import { TaskContext } from './TaskContext';
import { taskReducer } from './taskReducer';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      console.log('Worker COMPLETED');
      dispatch({
        type: 'COMPLETE_TASK',
      });
      worker.terminate();
    } else {
      dispatch({
        type: 'COUNT_DOWN',
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    console.log(state);
    if (!state.activeTask) {
      console.log('No active task, terminating worker');
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
