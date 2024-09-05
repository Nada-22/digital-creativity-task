import { createSelector } from '@ngrx/store';
import { AppState, LoaderState } from './loader.reducer';

export const selectLoadingState = (state: any) => state.isLoading;

export const selectIsLoading = createSelector(
  selectLoadingState,
  (state: LoaderState) => {       
   return state ? state.isLoading : false
} 
);
