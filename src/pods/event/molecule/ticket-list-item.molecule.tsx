import * as React from "react";
import './ticket-list-item.molecule.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {BuyButton} from "../atom/BuyButton";

export interface Props {
    ticket: Ticket;
}

export const TicketListItem = (props: Props) => {
    const {ticket} = props;

    return (
        <tr className="ticket__row">
            <td className="column__location">
                <span className="ticket__name">Ticket number: {ticket.id}</span>
                <span className="ticket__location">
                    <span className="seat">Sector: ###</span>
                    <span className="seat">Row: ##</span>
                </span>
            </td>
            <td className="column__quantity">{ticket.quantity}</td>
            <td className="column__price">
                <span>{ticket.unitPrice / 100} €</span>
            </td>
            <td className="column__action">
                <BuyButton/>
            </td>
        </tr>
    );
};