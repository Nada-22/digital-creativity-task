// store/loading.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as LoadingActions from './loader.actions';

export interface AppState {
  loading: LoaderState;
 
}
export interface LoaderState {
  isLoading: boolean;
}

export const initialLoadingState: LoaderState = {
  isLoading: false,
};

export const loadingReducer = createReducer(
  initialLoadingState,
  on(LoadingActions.startLoading, state => ({ ...state, isLoading: true })),
  on(LoadingActions.stopLoading, state => ({ ...state, isLoading: false }))
);
