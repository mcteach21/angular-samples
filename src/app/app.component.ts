import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Samples';
  isAuthenticated = false;

  
  authenticated() {
    console.log(localStorage.getItem('authenticated'));
    if(localStorage.getItem('authenticated') === 'true') {
        console.log("YES");
        return true;
    } else {
        console.log("NO");
        return null;    
    }
  }

  // logout(){
  //     localStorage.setItem('authenticated', 'false');
  //     localStorage.setItem('currentUser', 'null');

  //     this.router.navigate(['/about']);
  // }
}
