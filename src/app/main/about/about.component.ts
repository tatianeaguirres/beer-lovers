import { Component, OnInit } from '@angular/core';

import techStack from './tech-stack.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  techStack = techStack;

  constructor() { }

  ngOnInit() { }

}
