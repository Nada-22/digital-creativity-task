// src/app/store/effects/user.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from '../../../shared/services/user.service';
import * as UserActions from './user.actions';
import { UserI } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getAllUsers().pipe(
          map(data =>{

            console.log(data);
            
            return UserActions.loadUsersSuccess({ users: data.data });
          }
            ),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );


}
