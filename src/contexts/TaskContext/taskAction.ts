// useReducer <- hook do React que recebe um reducer e um estado inicial
// reducer <- função que recebe o estado atual e uma ação, e retorna o novo estado
// state <- o estado atual
// action <- a ação disparada, geralmente é um objeto com type e (opcionalmente) payload
// type <- o tipo da ação, geralmente uma string (pode ser enum, constante, etc)
// payload <- os dados extras enviados junto com a action, se necessário para atualizar o estado

import type { TaskModel } from '../../models/TaskModel';
import type { TaskStateModel } from '../../models/TaskStateModel';

// export enum TaskActionTypes {
//   START_TASK = 'START_TASK',
//   INTERRUPT_TASK = 'INTERRUPT_TASK',
//   RESET_STATE = 'RESET_STATE',
// }

export type TaskActionsWithPayload =
  | {
      type: 'START_TASK';
      payload: TaskModel;
    }
  | {
      type: 'CHANGE_SETTINGS';
      payload: TaskStateModel['config'];
    }
  | {
      type: 'COUNT_DOWN';
      payload: { secondsRemaining: number };
    };

export type TaskActionsWithoutPayload =
  | {
      type: 'RESET_STATE';
    }
  | {
      type: 'INTERRUPT_TASK';
    }
  | {
      type: 'COMPLETE_TASK';
    };

export type TaskActionModel =
  | TaskActionsWithPayload
  | TaskActionsWithoutPayload;
