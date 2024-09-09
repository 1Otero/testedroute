export interface Event {
        eventId:Number|String;
        name:String;
        description:String;
        //storeId:String;
        status:Number;
        place:String;
        startEvent:Date;
        endEvent:Date;
        notView:Number;
        codEvent?:String;
        createdEvent?: Date;
        //producerId:String;
}
