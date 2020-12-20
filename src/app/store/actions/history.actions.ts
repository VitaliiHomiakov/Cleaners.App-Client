import {createAction, props} from '@ngrx/store';

const TYPE = '[History]';

export const GetHistory = createAction(`${TYPE} Get History`, props<{params}>());
export const SetHistory = createAction(`${TYPE} Set History`, props<{history}>());
