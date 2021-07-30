import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class LogService {

//   log(msg: any) {
//       console.log(new Date() + ": " + JSON.stringify(msg));
//   }
// }
@Injectable()
export class LogService {
    log(msg: any) {
        console.log(msg);//new Date() + ": " + JSON.stringify(msg));
    }
}