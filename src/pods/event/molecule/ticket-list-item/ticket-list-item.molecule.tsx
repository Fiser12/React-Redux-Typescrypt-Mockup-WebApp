import * as React from "react";
import {CardButton} from "../../../../common/atoms/card-button/card.button.atom";
import {Ticket} from "../../../../state/vm/ticket.vm";
import "./ticket-list-item.molecule.css";

export interface IProps {
    ticket: Ticket;
}

export const TicketListItem = (props: IProps) => {
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
                <CardButton className={"card_button__ticket-buy"}>Buy</CardButton>
            </td>
        </tr>
    );
};
