import { UserGenderE, UserStatusE } from './../../../shared/enums/user.enum';
import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { ButtonTypeE } from 'src/app/shared/enums/button-type.enum';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CountryService } from 'src/app/shared/services/country.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import * as UserActions from '../../../core/store/user/user.actions';
import { CountryI } from 'src/app/shared/interfaces/country.interface';
import { phoneValidator } from 'src/app/core/validators/phone.validator';
import { Observable, tap } from 'rxjs';
import { selectUserError } from 'src/app/core/store/user/user.selectors';
import { UserI } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent {

  userForm!: FormGroup;
  ButtonTypeE = ButtonTypeE;
  isSubmitted = false;
  isLoading = false;
  UserGenderE=UserGenderE;
  UserStatusE=UserStatusE;
  countries!:CountryI[];
  @Input() user!:UserI;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router,
    private countryService:CountryService,
    private store: Store

  ) {}
  
  ngOnInit(): void {
   
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      father_name: ['', [Validators.required]],
      grandfather_name: ['', [Validators.required]],
      family_branch_name: ['', [Validators.required]],

      gender: ['', [Validators.required]], //

      phone: ['', [Validators.required,phoneValidator(),Validators.maxLength(9),Validators.minLength(9)]],
      phone_code: ['', [Validators.required]],
      email: ['', [Validators.required]],

      password: ['', [Validators.required]],
      password_confirmation: ['', [Validators.required]],

      date_of_birth: ['', [Validators.required]],
      tribe: ['', [Validators.required]],
      
      country_code: ['', [Validators.required]],
      country_id: ['', [Validators.required]],

      active: ['', [Validators.required]],
      is_premium: ['', [Validators.required]],
     
    })

    this.getAllCountries();
    this.formErrors();
    setTimeout(() => {
      
    }, 200);
    if (this.user) {
      
      this.userForm.patchValue(this.user);
      this.userForm.get('password')?.disable();
      this.userForm.get('password_confirmation')?.disable();
      let active=this.userForm.get('active')?.value;
      let is_premium=this.userForm.get('is_premium')?.value;
       this.userForm.patchValue({
         active:active==1? true:false,
         is_premium:is_premium==1?true:false
       })

    }
  }

  getAllCountries(){

    this.countryService.getAllCountries().subscribe((res: any) => {
      this.countries = res.data;
    })
  }

  onSubmit(){

    this.isSubmitted=true;
   let active=this.userForm.get('active')?.value;
   let is_premium=this.userForm.get('is_premium')?.value;
    this.userForm.patchValue({
      active:active? 1:0,
      is_premium:is_premium?1:0
    })
    if (this.userForm.invalid) return;
    if (this.user) {
    this.updateUser();  
    }else{
      this.createUser();
    }

    
  }
  createUser(){
    
    this.store.dispatch(UserActions.addUser({ user:this.userForm.value }))
  }

  updateUser(){
    this.store.dispatch(UserActions.updateUser({ user:{id:this.user.id, ... this.userForm.value} }));

  }
  onSelectCountry(event:any){
    let country = this.countries.find(c=>c.id==event.value);
    
    this.userForm.patchValue({
      country_code: country?.iso2,
      phone_code:country?.phonecode
    })
    
    
  }
  formErrors(){
    
    this.store.pipe(select(selectUserError)).subscribe({
      next: (error) => {
        if (!!error?.errors) {
          
        let  validationErrors=error.errors as Array<any>;
        validationErrors.forEach((error: any) => {
          const formControl = this.userForm.get(error.field);
          if (formControl) {
            formControl.setErrors({ serverError: error.msg });
          }
        })
        }
      }
    })
    
  }

}
