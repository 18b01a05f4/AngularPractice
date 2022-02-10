import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm! : FormGroup; 

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : ['',[Validators.required,Validators.minLength(3)]], 
      password : ['',[Validators.required,Validators.minLength(3)]]
    })
  }

  constructor(private fb : FormBuilder, private router : Router, private route : ActivatedRoute) { }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.router.navigate(['/vieworadd']);
  }

}
