import {createAction, props} from '@ngrx/store';
import {History} from '../../interfaces/history.interface';
import {CommonResponse} from '../../interfaces/common.interface';

const TYPE = '[History]';

export const GetHistory = createAction(`${TYPE} Get History`, props<{params}>());
export const SetHistory = createAction(`${TYPE} Set History`, props<{history: CommonResponse<History[]>}>());
export const AddHistory = createAction(`${TYPE} Add History`, props<{history: CommonResponse<History[]>}>());
