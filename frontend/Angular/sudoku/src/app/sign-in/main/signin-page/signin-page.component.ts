import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  
}
