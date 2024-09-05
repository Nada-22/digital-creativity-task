import { UserI } from './../../../shared/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface UserState {
  users: UserI[];
  error: any | null;
}

export const initialState: UserState = {
  users: [],
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state, { users }) => ({ ...state, users })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({ ...state, error })),

  on(UserActions.addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(UserActions.addUserFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),

  on(UserActions.updateUserSuccess, (state, { user }) => ({
    ...state,
    users: state.users.map(p => (p.id === user.id ? user : p)),
  })),
  
  on(UserActions.deleteUserSuccess, (state, { id }) => ({
    ...state,
    users: state.users.filter(p => p.id !== id),
  }))
);
