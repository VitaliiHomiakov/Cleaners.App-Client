import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HistoryState} from '../reducers/history.reducer';

export const historyState = createFeatureSelector<HistoryState>('history');

export const selectHistory = createSelector(
  historyState,
  (state) => state
);

export const selectHistories = createSelector(
  selectHistory,
  state => state.data
);

export const selectFirstHistories = createSelector(
  selectHistory,
  state => state.data.items.slice(0, 5)
);
