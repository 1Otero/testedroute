import { Component, Input} from '@angular/core';
import User from '../../../../../model/user/user';

@Component({
  selector: 'app-card-user-info',
  templateUrl: './card-user-info.component.html',
  styleUrl: './card-user-info.component.css'
})
export class CardUserInfoComponent{
 @Input() meuser!:User;
}
