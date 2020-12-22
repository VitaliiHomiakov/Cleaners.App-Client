import {Statuses} from '../../app.constants';
import {Action, createReducer, on} from '@ngrx/store';
import * as historyActions from '../actions/history.actions';
import {Pagination} from '../../interfaces/common.interface';
import {History} from '../../interfaces/history.interface';
import * as constants from '../../app.constants';

export interface HistoryState {
  data: {
    items: History[],
    pagination: Pagination
  };
  status: Statuses;
}

export const initialState: HistoryState = {
  data: {
   items: [],
    pagination: {...constants.Pagination}
  },
  status: Statuses.UNINITIALIZED,
};

const history = createReducer(
  initialState,
  on(historyActions.SetHistory, (state, payload) => {
    return {
      ...state,
      data: payload.history
    };
  }),
  on(historyActions.AddHistory, (state, payload) => {
    return {
      ...state,
      data: {
        items: [
          ...state.data.items,
          ...payload.history.items
        ],
        pagination: payload.history.pagination
      }
    };
  })
);

export function historyReducer(state: HistoryState | undefined, action: Action) {
  return history(state, action);
}
