import { Component, Input, OnInit } from '@angular/core';
import User from '../../../../model/user/user';
import { InfoUserByEvent } from '../../../../model/user/info-user-by-event';

@Component({
  selector: 'app-all-users-by-event',
  templateUrl: './all-users-by-event.component.html',
  styleUrl: './all-users-by-event.component.css'
})
export class AllUsersByEventComponent implements OnInit {
  //@Input() eventId:String= "";
  @Input() listAllUsersByEvent!:InfoUserByEvent[];
  constructor(){}
  ngOnInit(): void {
    console.log("this.listAllUsersByEvent: ")
    console.log(this.listAllUsersByEvent)
  }
}
