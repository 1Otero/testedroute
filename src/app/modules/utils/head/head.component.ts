import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrl: './head.component.css'
})
export class HeadComponent {
 isLogged:Boolean=false;
 //isLogged:Boolean=true;
 listMenuProducer= [{
  name: "home",
  role: [1,2,3],
  isUrl: true,
  navChild: [{
    name: "",
    role: 1,
    navChild: [{
      name: "",
      role: 1,
      navChild: null
    }]
  }]
 },{
  name: "diagramas",
  role: [2,3,4],
  isUrl: false,
  navChild: [{
    name: "",
    role: 1,
    navChild: null
  }]  
 },{
  name: "dashboard",
  role: [2,3,4],
  isUrl: true,
  navChild: [{
    name: "",
    role: 1,
    navChild: null
  }]  
 }];
}
