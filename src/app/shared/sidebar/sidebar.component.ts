import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [  
  `
    li {
      /* En esta parte se puede indicar un estilo especifico que solo aplique al componente. */ 
      cursor: pointer;  
    }
  `
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
