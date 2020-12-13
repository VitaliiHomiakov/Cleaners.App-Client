import {createAction, props} from '@ngrx/store';

const TYPE = '[User]';

export const GetProfile = createAction(`${TYPE} Get Profile`);
export const SetUser = createAction(`${TYPE} Set User`, props<{user: any}>());
export const LoadingUser = createAction(`${TYPE} Loading User`);
export const ResetUser = createAction(`${TYPE} Reset User`);
export const UpdateUser = createAction(`${TYPE} Update User`, props<{user: any}>());
export const UpdateUserPassword = createAction(`${TYPE} Update User Password`, props<{passwords: any}>());
