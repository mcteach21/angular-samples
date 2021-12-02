import { Component } from '@angular/core';

// translate module
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Samples';
  isAuthenticated = false;
  
  param = {value : 'mc'};
  selectLang : string = 'en';
  TransLang = [];

  constructor(public translate: TranslateService){
      translate.setDefaultLang(this.selectLang);
      translate.addLangs(['en', 'fr', 'kb']);
      
      // translate.use('fr');
  }
  ngOnInit(){
      this.TransLang = [...this.translate.getLangs()];
  }

  authenticated() {
    if(localStorage.getItem('authenticated') === 'true') {
        return true;
    } else {
        return null;    
    }
  }

  setTransLanguage(){
      console.log(this.translate.getLangs()+' ==> '+this.selectLang);
      this.translate.use(this.selectLang);
  }

}
