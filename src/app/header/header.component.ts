import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobile = window.innerWidth <= 1023;

  constructor() { }

  ngOnInit() { }

  showMenu(){
    let navbar = document.getElementById('navbar');
    navbar.classList.remove('u-desktop-only');
    navbar.classList.remove('header__navbar--hide');
    navbar.classList.add('header__navbar--show');
  }

}
