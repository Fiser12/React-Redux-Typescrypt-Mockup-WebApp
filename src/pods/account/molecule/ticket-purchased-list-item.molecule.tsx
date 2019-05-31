import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './ticket-purchased-list-item.molecule.css'
import {Ticket} from "../../../state/vm/ticket.vm";
import {ActivateButton} from "../atom/activate-button";
import {RemoveButton} from "../atom/remove-button";
import {DuplicateButton} from "../atom/duplicate-button";
import {Location} from "../atom/location";
import {Datetime} from "../../../common/atoms/datetime";
import {TicketPurchasedItem} from "./ticket-purchased-item.molecule";
import {TicketPurchasedActions} from "./ticket-purchased-actions.molecule";
import {TicketPurchasedEvent} from "./ticket-purchased-event.molecule";

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
            <TicketPurchasedEvent>
                <img className="event__image" src={event.thumbnailImageUrl}></img>
                <div className="event-info">
                    <h4 className="event__title">{event.title}</h4>
                    <Datetime date={event.date} showIcon={false}/>
                    <Location city={event.venueName} venueName={event.city} country={event.country}/>
                </div>
            </TicketPurchasedEvent>

            <TicketPurchasedItem>
                <TicketPurchasedActions>
                    <li className="action-item">
                        <DuplicateButton duplicateElement={(event) => duplicateTicket(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <RemoveButton removeElement={(event) => removeTicket(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <ActivateButton status={ticket.status} toggleState={(event) => toggleState(ticket.id)}/>
                    </li>
                </TicketPurchasedActions>
            </TicketPurchasedItem>
        </li>
    );
};