import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export const authGuard: CanActivateChildFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.isLoggedIn());

  if (!authService.isLoggedIn()) {

    
    router.navigate(['/auth']);
    return false;

  }
    
    return true;
 

};
