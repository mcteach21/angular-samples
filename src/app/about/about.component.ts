import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user : any = localStorage.getItem('currentUser') || '??';
  constructor() { }

  ngOnInit(): void {
  }

}
