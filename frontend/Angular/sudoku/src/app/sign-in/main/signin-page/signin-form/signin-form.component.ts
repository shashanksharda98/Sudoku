import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, take, map } from 'rxjs/operators';


@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  hide = true
  loginForm = new FormGroup({})
  constructor(private formBuilder: FormBuilder, private router: Router, private store: AngularFirestore) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], CustomValidator.email(this.store)],
      password: ['',[Validators.required]]
    })
  }

  
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  
  
  logIn(){
    console.log(this.loginForm.controls.email);
    
    if(this.loginForm.invalid){
      
    }else if(this.loginForm.valid){

    }else{

    }
  }

  getErrorMessage(){
    if(this.loginForm.controls.email.hasError('required')){
      return 'You must enter a value';
    }
    if(this.loginForm.controls.email.hasError('email')){
      return 'not a valid email'
    }
    return !this.loginForm.controls.email.hasError('usernameAvailable') ? 'not a registered email' : '';
  }

}


export class CustomValidator{
  static email(store: AngularFirestore){
    return (control: AbstractControl) =>{
      const email = control.value.toLowerCase();

      return store.collection('users', ref => ref.where('email', '==', email) )
      .valueChanges().pipe(
        debounceTime(500),
        take(1),
        map(arr => arr.length? null : {usernameAvailable:false} ),

        
      )
    }
  }
}