import { Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private logger : LogService) { }


  check(email: string, password: string): Promise<boolean> {

    this.logger.log('AuthService : checking auth..'+email+' '+password);

    return new Promise<boolean>((resolve: any, reject: any) => {
      setTimeout(() => {
        var check = (email=='mc@mc.com' && password=='123'); // pour tests..
        // avec firebase (auth) : firebase.auth().signInWithEmailAndPassword(email, password)

        this.logger.log("AuthService : async checking auth..Complete! "+check);
        
        if (!check) {
          reject('access denied!');
        } else {
          resolve();
        }
      }, 1000);
    });
  }
}
