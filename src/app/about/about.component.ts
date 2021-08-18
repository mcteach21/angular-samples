import { Component, OnInit } from '@angular/core';

import { User } from '../modele/user';
import { LogService } from '../service/log.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit 
{
  //user : User = JSON.parse(localStorage.getItem('currentUser')!);

  userJson = localStorage.getItem('currentUser');
  user : User = new User(); // this.userJson !== null ? JSON.parse(this.userJson) : new User();

  isAuthenticated = false;

  constructor(private logger : LogService) { 

    

  }

  ngOnInit(): void {
    this.userJson = localStorage.getItem('currentUser');
    this.logger.log(' currentUser : '+(this.userJson==''));

    this.user = (this.userJson !== null && this.userJson !== '') ? JSON.parse(this.userJson) : new User();

    this.isAuthenticated = (this.userJson !== null && this.userJson !== '');
  }

  get currentUser() {
    return this.isAuthenticated?this.user.firstName+' '+this.user.lastName:'';
  }



}
