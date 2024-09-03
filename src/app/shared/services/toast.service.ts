import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
    

constructor(private messageService:MessageService){

}

  showSuccessToast(message: string) {
    this.messageService.add({
      severity: 'success',
      // summary:'title',
      detail: message,
      contentStyleClass: 'success_toast',
     
      icon: 'pi-check-circle',
      
    });
  }
  showInfoToast(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: message,
    });
  }
  showWarnToast(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
    });
  }
  showErrorToast(message: string) {
    this.messageService.add({
      severity: 'error',
      contentStyleClass: 'error_toast',
      detail: message,
     
    });
  }
}
