import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../../service/home/home.service';
import { Producer } from '../../../model/producer/producer';
import { Store } from '../../../model/store/store';
import { CardStoreComponent } from '../../store/page/card-store/card-store.component';
import { AlertPrincipalService } from '../../../service/alert/alert-principal.service';
import { EventService } from '../../../service/event/event.service';
import { EventAndProducerInfo } from '../../../model/event/more/event-and-producer-info';
import { HeadComponent } from '../../utils/head/head.component';
import { HeadService } from '../../../service/utils/head/head.service';
import { Dialog } from '@angular/cdk/dialog';
import { CreateStoreByProducerComponent } from '../../store/create-store-by-producer/create-store-by-producer.component';

@Component({
  selector: 'app-home-producer',
  templateUrl: './home-producer.component.html',
  styleUrl: './home-producer.component.css',
})
export class HomeProducerComponent implements OnChanges{
  //aqui debe recibir el id del producer que va ingresar, y asi mostrar informacion
  producer!:Producer;
  listStore!:Store[];
  private producerId?:String;
  @Input() listEventsInfoProducer?:EventAndProducerInfo[];
  @Input() tstChanges:string='';
  constructor(private router:Router, private homeService:HomeService, private alertPrincipalService:AlertPrincipalService, 
    private eventService:EventService, private cdtChanges:ChangeDetectorRef, private headService:HeadService,
    private dialog:Dialog){
    this.getInfoProducerAndStore();
  }
  ngOnChanges(changes: SimpleChanges){
    console.log("changes:")
    console.log(changes['tstChanges'])
    if(changes['tstChanges']){
     console.log("response: ")
     console.log(this.tstChanges) 
    }
  }
  getInfoProducerAndStore(){
    var idProducer= 0;
    let bodyProducer= localStorage.getItem("producer")
    if(bodyProducer == null){
      const navigate= this.router.getCurrentNavigation(); 
      idProducer= navigate?.extras?.state?.['id']
    }else{
      var jsonBody= JSON.parse(bodyProducer)
      //idProducer= Number.parseInt(jsonBody.producerId)
      idProducer= jsonBody._producerId
      this.fillProducerAndStores(idProducer)
      this.fillEventsByProducer(idProducer)
    }
  }
  fillProducerAndStores(idProducer:Number){
    //const producer= navigate?.extras?.state?.['producer']
    var arrayHome: any;
    //this.producer= producer
    this.homeService.getHomeProducer(idProducer)
    .subscribe(hp => {
      const bodyHomeProducer= hp;
      const successBody= Object.assign(bodyHomeProducer.success)
      if(successBody!==undefined || bodyHomeProducer.status!=404){
        successBody[0]==undefined?console.log("not yet store"):arrayHome=successBody.listStore
        this.producer= successBody.producer
        //let meProducerId =successBody.producer._producerId
        let meProducerId = this.producer._producerId
        this.producerId= meProducerId
        // if(successBody[0].listStore.length == 1 && successBody[0].listStore[0]==null){
        //   this.listStore= []
        //   return
        // }
        this.headService.refreshInfo({age: 27, id: 777, name: this.producer.name})
        this.listStore= successBody.listStore
        localStorage.setItem("listStore", JSON.stringify(this.listStore.map(s => {
          return {_storeId: s._storeId, "codStore": s.codStore}
        })))
        return;
      }
      ///Aqui se debe tocar la alarma o alert global 
      ////
      ////
      ///
      ////
      console.log("not yet store")
      return;
    });
  }
  fillEventsByProducer(producerId:Number){
    this.eventService.getAllEventsByProducer(producerId.toString()).subscribe((e) => {
      console.log("listEvents:")
      // console.log(e.success)
      this.listEventsInfoProducer= e.success
      // console.log(this.listEventsInfoProducer[0])
      // console.log(typeof this.listEventsInfoProducer[0].meEvents)
      // console.log(this.listEventsInfoProducer[0].meEvents.name)
      // console.log(this.listEventsInfoProducer[0].meEvents)
    })
  }
  viewNewClient(){
     this.dialog.open(CreateStoreByProducerComponent, {
      data: {producerId: this.producerId},
      height: "600px",
      width: "800px"
     })
  }
}
