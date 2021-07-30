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
       // avec firebase (auth) : 
       // firebase.auth().createUserWithEmailAndPassword(email, password).then(
       //      () => {
       //        resolve();
       //      },
       //      (error) => {
       //        reject(error);
       //      }
       //    );

      // pour tests.. 
      setTimeout(() => {
        var check = (email=='mc@mc.com' && password=='123'); 
        
        this.logger.log("AuthService : async checking auth..Complete! "+check);
        var error = 'access denied!';
        if (!check) {
          reject(error);
        } else {
          resolve();
        }
      }, 1000);

    });
  }
}
