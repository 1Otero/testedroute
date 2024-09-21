import User from "./user";

export interface InfoUserByEvent {
 _id:String,
 eventId:String,
 attended:String,
 dataCreated:Date,
 meUser: User
}
