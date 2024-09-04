import { createAction, props } from '@ngrx/store';
import { UserI } from '../../../shared/interfaces/user.interface';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: UserI[] }>());
export const loadUsersFailure = createAction('[User] Load Users Failure', props<{ error: string }>());

export const addUser = createAction('[User] Add User', props<{ user: UserI }>());
export const addUserSuccess = createAction('[User] Add User Success', props<{ user: UserI }>());
export const addUserFailure = createAction('[User] Add User Failure', props<{ error: string }>());

export const updateUser = createAction('[User] Update User', props<{ user: UserI }>());
export const updateUserSuccess = createAction('[User] Update User Success', props<{ user: UserI }>());
export const updateUserFailure = createAction('[User] Update User Failure', props<{ error: string }>());

export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
export const deleteUserSuccess = createAction('[User] Delete User Success', props<{ id: number }>());
export const deleteUserFailure = createAction('[User] Delete User Failure', props<{ error: string }>());
