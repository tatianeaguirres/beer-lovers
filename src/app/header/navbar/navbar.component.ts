import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.onCloseWhenClickingOnMobile();
  }

  onCloseOnMobile() {
    this.el.nativeElement.classList.remove('show-menu');
    this.el.nativeElement.classList.add('hide-menu');
  }

  onCloseWhenClickingOnMobile() {
    if (window.innerWidth <= 1023) {
      this.el.nativeElement.addEventListener('click', () => {
        this.onCloseOnMobile();
      });
    }
  }

}
