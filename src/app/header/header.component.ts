import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  showMenu(){
    let navbar = document.getElementById('navbar');
    navbar.classList.remove('desktop-only');
    navbar.classList.remove('hide-menu');
    navbar.classList.add('show-menu');
  }

}
