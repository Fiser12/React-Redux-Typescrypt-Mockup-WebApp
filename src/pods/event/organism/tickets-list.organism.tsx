import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './tickets-list.organism.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketListItem} from "../molecule/ticket-list-item.molecule";

export interface Props {
    tickets: Array<Ticket>
}

export const TicketsList = (props: Props) => {
    const {tickets} = props;

    if (tickets === null) {
        return (
            <div className="tickets-list">
            </div>
        );
    }

    const ticketsList = tickets.map((ticket: Ticket, key) =>
        <TicketListItem key={key} ticket={ticket}/>
    );

    return (
        <table className="tickets-table">
            <thead>
            <tr>
                <th className="column__location">Localidad</th>
                <th className="column__quantity">Disponibles</th>
                <th className="column__price">Precio por entrada</th>
                <th className="column__action"></th>
            </tr>
            </thead>
            <tbody>
            {ticketsList}
            </tbody>
        </table>
    );

};