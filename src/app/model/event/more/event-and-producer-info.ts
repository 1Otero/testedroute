import { Event }  from "../event"

export interface EventAndProducerInfo {
    producerId: String,
    storeId: String,
    _id: String,    
    meEvents:Event,
}
