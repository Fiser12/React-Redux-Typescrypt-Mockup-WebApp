import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './style.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketListItem} from "../molecule/ticket-list-item.molecule";

export interface Props {
    tickets: Array<Ticket>
}

export const TicketsList = (props: Props) => {
    const {tickets} = props;

    if(tickets === null) {
        return (
            <ul className="tickets-list">
            </ul>
        );
    }

    const ticketsList = tickets.map((ticket:Ticket, key) =>
        <TicketListItem key={key} ticket={ticket}/>
    );

    return (
        <ul className="tickets-list">
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
        </ul>
    );

};