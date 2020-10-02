import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMobile = window.innerWidth <= 1023;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.onCloseWhenClickingOnMobile();
  }

  onCloseOnMobile() {
    this.elementRef.nativeElement.classList.remove('header__navbar--show');
    this.elementRef.nativeElement.classList.add('header__navbar--hide');
  }

  onCloseWhenClickingOnMobile() {
    if (window.innerWidth <= 1023) {
      this.elementRef.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile();
      });
    }
  }

}
