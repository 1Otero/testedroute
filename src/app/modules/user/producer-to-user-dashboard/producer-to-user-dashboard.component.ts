import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producer-to-user-dashboard',
  templateUrl: './producer-to-user-dashboard.component.html',
  styleUrl: './producer-to-user-dashboard.component.css'
})
export class ProducerToUserDashboardComponent {
 constructor(private router:Router){
  let navigation= router.getCurrentNavigation()
  let eventId= navigation?.extras?.state?.["eventId"]
  //Recordarme traer todos los usuarios al eventos, relacionados con este eventId 
  //crear la relacion con la tabla de evento y usuario que va asistir al evento. que tambien tiene asistencia, y estado de pago
 }
}
