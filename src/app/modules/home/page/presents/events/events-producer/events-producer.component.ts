import { Component, EventEmitter, input, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Event } from '../../../../../../model/event/event';
import { EventAndProducerInfo } from '../../../../../../model/event/more/event-and-producer-info';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-events-producer',
  templateUrl: './events-producer.component.html',
  styleUrl: './events-producer.component.css'
})
export class EventsProducerComponent implements OnChanges {

@Input() listTest?:EventAndProducerInfo[];
@Input("listEventsProducer") listEventsProducer?:EventAndProducerInfo[];
 
@Input() totalItems: number = 0;
@Input() ofCurrentIndex:number= 0;
@Input() currentIndex:number= 0;
@Input() pageSize: number = 3;
@Input() currentPage: number = 1;

@Output() pageChange = new EventEmitter<number>();
@Output() pageSizeChange = new EventEmitter<number>();

meEndIndex= 4


constructor(){}
ngOnChanges(changes:SimpleChanges){
 console.log(changes)
 if(changes["pageSize"]){
  console.log("changes: ")
  console.log(changes)
 }
 if(changes["listEventsProducer"]){
   console.log(changes["listEventsProducer"].currentValue)
   console.log(changes["listEventsProducer"].previousValue)
   console.log(changes["listEventsProducer"].firstChange)
   this.totalItems= this.listEventsProducer?.length==undefined?0:this.listEventsProducer?.length
   this.listTest= this.listEventsProducer?.slice(this.ofCurrentIndex, this.pageSize)
  //  this.currentIndex= 0;
  //  this.ofCurrentIndex= 0;
 }
}

get totalPages(): number {
  return Math.ceil(this.totalItems / this.pageSize);
}

changePage(page: number): void {
  if (page >= 1 && page <= this.totalPages) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
    console.log(this.listEventsProducer?.length as number / this.pageSize)
  // 2
  let valorMaximo= this.pageSize * this.currentPage
  this.ofCurrentIndex= (valorMaximo) - this.pageSize
  console.log(this.pageSize)
  console.log(this.ofCurrentIndex)
  console.log(valorMaximo)
  this.listTest= this.listEventsProducer?.slice(this.ofCurrentIndex, valorMaximo)
  }
  
  // this.currentIndex= this.pageSize * this.currentPage
  // this.ofCurrentIndex= (this.currentIndex + 1) - this.pageSize
  // console.log(page)
  // this.currentPage= page
  // console.log(this.currentPage)
  // console.log(this.currentIndex)
  // this.changePageSize(this.currentIndex as number)
}

changePageSize(newSize: number): void {
  this.pageSize = newSize * this.currentPage;
  this.ofCurrentIndex= this.pageSize - newSize
  console.log(this.pageSize)
  console.log(this.totalItems)
  // const endIndex = (event.pageIndex + 1) * event.pageSize;
  // startIndex= endIndex - event.pageSize
  this.listTest= this.listEventsProducer?.slice(this.ofCurrentIndex, this.pageSize)
  //if(this.pageSize < this.totalItems){
  if(this.pageSize > this.totalItems){
    //this.pageSize = newSize;
  //this.pageSize = newSize * this.currentPage;
  // this.currentPage = 1;
  console.log("changeSize: ")
  console.log(this.ofCurrentIndex)
  console.log(this.pageSize)
  //this.listTest= this.listEventsProducer?.slice(0, this.pageSize)
  this.listTest= this.listEventsProducer?.slice(this.ofCurrentIndex, this.pageSize)
  console.log(this.pageChange)
  console.log(this.pageSize)
  console.log(this.listTest)
  this.pageSizeChange.emit(this.pageSize);
  this.pageChange.emit(this.currentPage);
  return
  }
  return
  // this.currentPage= 1
  // this.listTest= this.listEventsProducer
  // this.pageSize= newSize
  // this.ofCurrentIndex= 1
}

protected readonly Math = Math;


data = [
  { name: 'Event 1', description: 'Description 1' },
  { name: 'Event 2', description: 'Description 2' },
  { name: 'Event 3', description: 'Description 3' },
  { name: 'Event 4', description: 'Description 4' },
  { name: 'Event 5', description: 'Description 5' }
  // Agrega más datos según sea necesario
];

displayedColumns: string[] = ['name','description'];
//di:EventAndProducerInfo
dataSource = new MatTableDataSource(this.listEventsProducer);

@ViewChild(MatPaginator) paginator!: MatPaginator;

ngOnInit() {
  this.dataSource.paginator = this.paginator;
}

startIndex = 0
onPageChange(event: PageEvent) {
  console.log(event.length)
  console.log(event)
  
  const endIndex = (event.pageIndex + 1) * event.pageSize;
  this.startIndex= endIndex - event.pageSize
  // if(event.pageIndex == 0){
  //   startIndex =(event.pageIndex * event.pageSize);
  //   this.dataSource.data = this.data.slice(startIndex, endIndex);
  //   return 
  // }
  // startIndex =(event.pageIndex * event.pageSize) - event.pageSize;
  console.log(this.startIndex)
  console.log(event.pageSize)
  console.log(event.length)
  console.log(endIndex)
  //this.dataSource.data = this.data.slice(startIndex, endIndex);
  //this.dataSource.data = this.listEventsProducer?.slice(this.startIndex, endIndex) || [];
  this.dataSource.data = this.listEventsProducer?.slice(this.startIndex, endIndex) || [];
  //if(event.pageSize < event.length){
  if(event.pageSize > event.length){
  //const startIndex = event.pageIndex * event.pageSize;
  
  console.log(this.startIndex)
  console.log(endIndex)
  console.log(this.dataSource)
  this.dataSource.data = this.listEventsProducer?.slice(this.startIndex, endIndex) || [];
  // this.dataSource.data = this.data.slice(startIndex, endIndex);
  console.log(this.dataSource.data)
  this.meEndIndex= endIndex
  return
  }
  event.pageIndex= 1
  // event.
}
onCount(e:any){
  console.log("e: ")
  console.log(e.target.value)
  this.meEndIndex= 4
}
onPageSizeChange() {
    console.log(this.meEndIndex)
  console.log(this.dataSource.data)
  //this.dataSource.data = this.data.slice(0, this.meEndIndex);
  this.dataSource.data = this.listEventsProducer?.slice(this.startIndex, this.meEndIndex) || [];
  return this.meEndIndex
}


}
