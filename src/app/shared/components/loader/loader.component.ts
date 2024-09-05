import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {AppState, LoaderState } from 'src/app/core/store/loader/loader.reducer';
import { selectIsLoading } from 'src/app/core/store/loader/loader.selector';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.isLoading$ = this.store.select(selectIsLoading);
    this.isLoading$.subscribe(res=>{
      console.log(res);
    })
  }
}
