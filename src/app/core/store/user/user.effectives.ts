import { addUser } from './user.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../../shared/services/user.service';
import * as UserActions from './user.actions';
import * as LoaderActions from '../loader/loader.actions';
import { UserI } from 'src/app/shared/interfaces/user.interface';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/shared/services/toast.service';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
     private userService: UserService,
      private store: Store,
      private toastService:ToastService
    ) { }

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => this.store.dispatch(LoaderActions.startLoading())),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(
          map(data => {

            this.store.dispatch(LoaderActions.stopLoading());
            return UserActions.loadUsersSuccess({ users: data.data });
          }
          ),
          catchError(error => {
            this.store.dispatch(LoaderActions.stopLoading());
            return of(UserActions.loadUsersFailure({ error }))
          })
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.addUser),
      tap(() => this.store.dispatch(LoaderActions.startLoading())),
      mergeMap(({ user }) =>
        this.userService.createUser(user).pipe(
          map(newUser => {

            this.store.dispatch(LoaderActions.stopLoading());
            this.toastService.showSuccessToast(newUser.message || 'user added successfully');
            return UserActions.addUserSuccess({ user: newUser.data })
          }
          ),
          catchError(error => {

            this.store.dispatch(LoaderActions.stopLoading());
            this.toastService.showErrorToast(error.message || 'something wrong please try agin');

            return of(UserActions.addUserFailure({ error: error.error }))
          }
          )
        )
      )
    )
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.updateUser),
      tap(() => this.store.dispatch(LoaderActions.startLoading())),
      mergeMap(({ user }) =>
        this.userService.updateUser(user.id,user).pipe(
          map(updatedUser =>{

            this.store.dispatch(LoaderActions.stopLoading());
            this.toastService.showSuccessToast(updatedUser.message || 'user added successfully');

            return UserActions.updateUserSuccess({ user: updatedUser.data })}),
          catchError(error =>{

            this.store.dispatch(LoaderActions.stopLoading());
            this.toastService.showErrorToast(error.message || 'something wrong please try agin');

            return of(UserActions.updateUserFailure({ error: error.error }))
          }
            )
        )
      )
    )
  );



}
