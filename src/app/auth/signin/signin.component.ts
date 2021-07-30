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
     this.signinForm = this.formBuilder.group(
       {
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
       }
     );
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
              this.router.navigate(['/about']);
          },
          (error) => {
              this.errorMessage = error;
          }
        );
      }
  }

}
