export class Ticket {
    public sellerId: number;
    public eventId: number;
    public id: number;
    public quantity: number;
    public unitPrice: number;
    public status: boolean;

    public constructor(
        id: number,
        sellerId: number,
        eventId: number,
        quantity: number,
        unitPrice: number,
        status: boolean,
    ) {
        this.id = id;
        this.sellerId = sellerId;
        this.eventId = eventId;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.status = status;
    }
}
