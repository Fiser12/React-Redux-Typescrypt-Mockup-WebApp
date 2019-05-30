import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './style.css'
import {Ticket} from "../../../state/vm/ticket.vm";

export interface Props {
    ticket: Ticket;
    event: Event;
    removeTicket: (id:number) => void
    duplicateTicket: (id:number) => void
    toggleState: (id:number) => void
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
                        <a onClick={(event) => (duplicateTicket(ticket.id))}>
                            <i className="fa fa-files-o"></i>
                            <span>Duplicate</span>
                        </a>
                    </li>
                    <li className="action-item">
                        <a onClick={(event) => (removeTicket(ticket.id))}>
                            <i className="fa fa-trash"></i>
                            <span>Remove</span>
                        </a>
                    </li>
                    <li className="action-item">
                        {ticket.status ?
                            <a onClick={(event) => (toggleState(ticket.id))}>
                                <i className="fa fa-eye"></i>
                                <span>Activate</span>
                            </a> :
                            <a onClick={(event) => (toggleState(ticket.id))}>
                                <i className="fa fa-eye-slash"></i>
                                <span>Deactivate</span>
                            </a>
                        }
                    </li>
                </ul>
            </div>
        </li>
    );
};