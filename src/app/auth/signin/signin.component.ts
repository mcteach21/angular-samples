import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup , FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth.service';
import { LogService } from '../../service/log.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  signinForm!: FormGroup;
  errorMessage: string = '';

  constructor( private authService: AuthService, private formBuilder : FormBuilder,
    private logger : LogService, private router: Router) {

  }

  ngOnInit(): void {
     // init form
     // this.signinForm = this.formBuilder.group(
     // // {
     // //    email: ['', [Validators.required, Validators.email]],
     // //    password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
     // // }
     // );
  }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;

  formIsNotValid() {
     return this.email.hasError('required') || this.email.hasError('email') || this.password.hasError('required');
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  onSubmit(): void {

      this.authService.check(this.email.value, this.password.value).then(
        () => {
            this.logger.log('response from service (check) : ok!');
            this.router.navigate(['/about']);
        },
        (error) => {
            this.errorMessage = error;
        }
      );
  }

}
