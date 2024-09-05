import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.producer';

export const selectUserState = createFeatureSelector<UserState>('users');



export const selectAllUsers = createSelector(selectUserState, state => {
    
    return state.users;
});

export const selectUserError = createSelector(selectUserState, state => state.error);
// export const selectUserError = createSelector(
//     selectUserState,
//     (state: UserState) => {
//         console.log(state);
        
//      return   state.error
//     }
// );
