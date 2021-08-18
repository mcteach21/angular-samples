import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { LogService } from '../../service/log.service';

import { User } from '../../modele/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  // array in local storage for registered users
  users : User[] = JSON.parse(localStorage.getItem('users') || '{}') || [];
  //currentUser : User = {};
  
  signinForm!: FormGroup;
  errorMessage: string = '';

  constructor( private authService: AuthService, private formBuilder : FormBuilder,
    private logger : LogService, private router: Router) {

  }

  ngOnInit(): void {
     // init form
     this.signinForm = this.formBuilder.group(
       {
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
       }
     );

    //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}') 

  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required]);
  hide = true;

  formIsValid() {
     return this.signinForm.valid;  //.email.hasError('required') || this.signinForm.email.hasError('email') 
          //|| this.signinForm.password.hasError('required');
  }

  onSubmit(): void {

      if (this.signinForm.valid) {
        const email = this.signinForm.get('email')?.value;
        const password = this.signinForm.get('password')?.value;


        this.authService.check(email, password).then(
          () => {
              this.logger.log('response from service (check) : ok!');

              let currentUser = {
                  id: 1000,
                  firstName: 'Homer',
                  lastName: 'Simpson',
                  login: 'homer',
                  password: '123+aze', 
                  token: 'fake-jwt-token'
              } 

              localStorage.setItem('authenticated', JSON.stringify(true));
              localStorage.setItem('currentUser', JSON.stringify(currentUser));
              
              this.router.navigate(['/about']);
          },
          (error) => {
              this.errorMessage = error;
          }
        );
      }
  }

}
