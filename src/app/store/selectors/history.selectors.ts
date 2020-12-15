import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HistoryState} from '../reducers/history.reducer';

export const historyState = createFeatureSelector<HistoryState>('history');

export const selectHistory = createSelector(
  historyState,
  (state) => state
);
