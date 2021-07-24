import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  hide = true
  signupForm : FormGroup = new FormGroup({})
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ["",[Validators.required, Validators.minLength(3)]],
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required]],
      re_password:["",[Validators.required]]
    })
  }

  signUp(){
    if(this.signupForm.valid){

    }else if(this.signupForm.invalid){

    }else{

    }
  }

}
