import { Component, Input } from '@angular/core';
import { StoreCoordinationService } from '../../../service/storecoordination/store-coordination.service';
import { Store } from '../../../model/store/store';

@Component({
  selector: 'app-create-store-by-producer',
  templateUrl: './create-store-by-producer.component.html',
  styleUrl: './create-store-by-producer.component.css'
})
export class CreateStoreByProducerComponent {
 producerId!:String
 //comentar
 @Input() store:Store= {
   _storeId: null,
   name: '',
   email: '',
   description: '',
   status: 1,
   codStore: '',
   nitStore: '',
   notView: 0,
   createdDate: new Date()
 }
//@Input() store!:Store
 constructor(private storeAndProducer:StoreCoordinationService){
  this.producerId= "668e8e636b4872d7e7264998"
 }
 creteStoreByProducer(){
  console.log("create store by producer")
  console.log(this.store)
  console.log(this.producerId)
   if(this.store && this.producerId && this.store.name.length > 2 || this.store.nitStore.length > 2){
    console.log(this.producerId)
    console.log(this.store)
    this.storeAndProducer.createStoreByProducer(this.store, this.producerId)
    .subscribe((e) => {
      console.log(e)
    })
    return 
   }
   console.log("se debe poner un mensaje para avisar al cliente que debe llenar los datos faltantes")
   
  }
}
