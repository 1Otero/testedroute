export interface EventAndStore {
    storeId: String,
    status: Number,
    notView: Number,
    producerId: String,
    description: String,
    meEvents: {_id: String,
    _eventId: String,
    name: String,
    description: String,
    storeId: Number,
    status: Number,
    place: String,
    createdEvent: Date,
    startEvent: Date,
    endEvent: Date,
    notView: Number,
    codEvent: String}
}
