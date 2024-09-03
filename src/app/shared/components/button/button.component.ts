import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonTypeE } from '../../enums/button-type.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input({required:true}) styleType: ButtonTypeE = ButtonTypeE.Primary;
  @Input() label!: string;
  @Input() btnType: string = 'button';
  @Input() isLoading: boolean = false;
  @Input() disabled: boolean = false;
  @Input() icon!: string;
  @Input() classes!: string;
  @Input() jsonIcon!:string;
  @Input() primeIcon!:string;
  
  @Output() buttonClick= new EventEmitter();



  emitClickEvent(): void {
    this.buttonClick.emit();
  }

  ngOnInit(): void {


  }

}
