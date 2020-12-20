import {createAction, props} from '@ngrx/store';
import {User} from '../../interfaces/user.interface';

const TYPE = '[User]';

export const GetProfile = createAction(`${TYPE} Get Profile`);
export const SetUser = createAction(`${TYPE} Set User`, props<{user: User}>());
export const GetUserBarcode = createAction(`${TYPE} Get User Barcode`);
export const SetUserBarcode = createAction(`${TYPE} Set User Barcode`, props<{barcode: string}>());
export const LoadingUser = createAction(`${TYPE} Loading User`);
export const ResetUser = createAction(`${TYPE} Reset User`);
export const UpdateUser = createAction(`${TYPE} Update User`, props<{user: User}>());
export const UpdateUserPassword = createAction(`${TYPE} Update User Password`, props<{passwords: any}>());
export const SendInvite = createAction(`${TYPE} Send Invite`, props<{params: any}>());
