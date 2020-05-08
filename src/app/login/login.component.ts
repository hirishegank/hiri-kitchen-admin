import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from './../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User;

  signinForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private auth: AuthenticationService,private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });


    if (this.auth.user$) { this.signinForm.reset();}
  }

  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.signinForm.invalid) {
      this.signinForm.reset();
      return;
    }
    else {
      const email = this.signinForm.value.email;
      const password = this.signinForm.value.password;
      this.auth.login(email, password);
    }
  }

}
