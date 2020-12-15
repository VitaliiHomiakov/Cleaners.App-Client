import {ActionReducerMap} from '@ngrx/store';
import {userReducer, UserState} from './user.reducer';
import {historyReducer, HistoryState} from './history.reducer';

export interface AppState {
  user: UserState;
  history: HistoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  user: userReducer,
  history: historyReducer,
};
