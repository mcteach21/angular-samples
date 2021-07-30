import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private logger : LogService) { }

  check(){
     this.logger.log('AuthService : check..ok!');
     return true;
  }
}
