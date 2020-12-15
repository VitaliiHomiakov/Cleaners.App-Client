import {Statuses} from '../../app.constants';
import {Action, createReducer, on} from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import {User} from '../../interfaces/user.interface';


export interface UserState {
  data: User;
  status: Statuses;
  barcode: string;
}

export const initialState: UserState = {
  data: {} as User,
  status: Statuses.UNINITIALIZED,
  barcode: ''
};

const user = createReducer(
  initialState,
  on(userActions.SetUser, (state, payload) => {
    return {
      ...state,
      data: payload.user,
      status: Statuses.LOADED
    };
  }),
  on(userActions.LoadingUser, (state) => {
    return {
      ...state,
      data: null,
      status: Statuses.LOADING
    };
  }),
  on(userActions.SetUserBarcode, (state, payload) => {
    return {
      ...state,
      barcode: payload.barcode
    };
  }),
  on(userActions.ResetUser, (state => ({...state, data: null, status: Statuses.UNINITIALIZED})))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return user(state, action);
}
