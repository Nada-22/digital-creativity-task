// src/app/store/effects/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { UserService } from '../../../shared/services/user.service';
import * as UserActions from './user.actions';
import * as LoaderActions from '../loader/loader.actions';
import { UserI } from 'src/app/shared/interfaces/user.interface';
import { Store } from '@ngrx/store';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService,private store:Store) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      tap(() => this.store.dispatch(LoaderActions.startLoading())),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(
          map(data =>{

            this.store.dispatch(LoaderActions.stopLoading())
            
            return UserActions.loadUsersSuccess({ users: data.data });
          }
            ),
          catchError(error => {
            this.store.dispatch(LoaderActions.stopLoading())
           return of(UserActions.loadUsersFailure({ error }))
          })
        )
      )
    )
  );


}
