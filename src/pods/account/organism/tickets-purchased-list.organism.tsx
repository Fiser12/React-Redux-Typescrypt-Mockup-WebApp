import * as React from "react";
import {TicketPurchasedListItem} from "../molecule/ticket-purchased-list-item.molecule";
import './tickets-purchased-list.organism.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    tickets: Array<Ticket>
    events: Array<Event>
    removeTicket: (id:number) => void
    duplicateTicket: (id:number) => void
    toggleState: (id:number) => void
}

export const TicketPurchasedList = (props: Props) => {
    const {tickets, events, duplicateTicket, toggleState, removeTicket} = props;

    if(tickets === null) {
        return (
            <ul className="tickets-purchased-list">
            </ul>
        );
    }

    const getEventByTicketId = (ticketId) => events.filter((event: Event) => event.id == ticketId)
    const ticketsList = tickets.map((ticket:Ticket, key) =>
        <TicketPurchasedListItem
            key={key}
            ticket={ticket}
            event={getEventByTicketId(ticket.eventId)[0]}
            duplicateTicket={duplicateTicket}
            toggleState={toggleState}
            removeTicket={removeTicket}
        />
    );

    return (
        <ul className="tickets-purchased-list">
            {ticketsList}
        </ul>
    );

};