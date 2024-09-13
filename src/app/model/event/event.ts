export interface Event {
        _eventId: String;
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
