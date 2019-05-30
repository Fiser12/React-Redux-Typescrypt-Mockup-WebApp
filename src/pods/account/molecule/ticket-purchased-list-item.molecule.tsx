import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './ticket-purchased-list-item.molecule.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {ActivateButton} from "../atom/ActivateButton";
import {RemoveButton} from "../atom/RemoveButton";
import {DuplicateButton} from "../atom/DuplicateButton";

export interface Props {
    ticket: Ticket;
    event: Event;
    removeTicket: (id: number) => void
    duplicateTicket: (id: number) => void
    toggleState: (id: number) => void
}

export const TicketPurchasedListItem = (props: Props) => {
    const {ticket, event, removeTicket, duplicateTicket, toggleState} = props;

    if (event == null) {
        return <></>
    }

    return (
        <li className="ticket-purchased-list-item">

            <div className="ticket-purchased-event">
                <img className="event__image" src={event.thumbnailImageUrl}></img>
                <div className="event-info">
                    <h4 className="event__title">{event.title}</h4>
                    <time className="datetime" dateTime={event.date.toDateString()}>
                        {event.date.toDateString()}
                    </time>
                    <span className="location">{event.venueName + " " + event.city + " " + event.country}</span>
                </div>
            </div>

            <div className="ticket-purchased-item">
                <ul className="ticket-purchased-actions">
                    <li className="action-item">
                        <DuplicateButton duplicateElement={(event) => duplicateTicket(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <RemoveButton removeElement={(event) => removeTicket(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <ActivateButton status={ticket.status} toggleState={(event) => toggleState(ticket.id)}/>
                    </li>
                </ul>
            </div>
        </li>
    );
};