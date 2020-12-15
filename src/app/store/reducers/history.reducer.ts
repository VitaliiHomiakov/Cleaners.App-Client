import {Statuses} from '../../app.constants';
import {Action, createReducer, on} from '@ngrx/store';
import * as historyActions from '../actions/history.actions';

export interface HistoryState {
  data: any;
  status: Statuses;
}

export const initialState: HistoryState = {
  data: {} as any,
  status: Statuses.UNINITIALIZED,
};

const history = createReducer(
  initialState,
  on(historyActions.SetHistory, (state, payload) => {
    return {
      ...state,
    };
  }),
);

export function historyReducer(state: HistoryState | undefined, action: Action) {
  return history(state, action);
}
