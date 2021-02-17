import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  navItems = [
    {
      linkId: 1, linkName: 'Home'
    },
    {
      linkId: 2, linkName: 'About'
    },
    {
      linkId: 3, linkName: 'Contact'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
