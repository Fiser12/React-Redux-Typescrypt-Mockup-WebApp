import * as React from "react";
import {Datetime} from "../../../common/atoms/datetime";
import {Event} from "../../../state/vm/event.vm";
import {Ticket} from "../../../state/vm/ticket.vm";
import {ActivateButton} from "../atom/activate-button";
import {DuplicateButton} from "../atom/duplicate-button";
import {Location} from "../atom/location";
import {RemoveButton} from "../atom/remove-button";
import {TicketPurchasedActions} from "./ticket-purchased-actions.molecule";
import {TicketPurchasedEvent} from "./ticket-purchased-event.molecule";
import {TicketPurchasedItem} from "./ticket-purchased-item.molecule";
import "./ticket-purchased-list-item.molecule.css";

export interface IProps {
    event: Event;
    duplicateTicketDispatch: (id: number) => void;
    removeTicketDispatch: (id: number) => void;
    ticket: Ticket;
    toggleStateDispatch: (id: number) => void;
}

export const TicketPurchasedListItem = (props: IProps) => {
    const {ticket, event, removeTicketDispatch, duplicateTicketDispatch, toggleStateDispatch} = props;

    if (event == null) {
        return <></>;
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
                        <DuplicateButton duplicateElement={(eventHtml) => duplicateTicketDispatch(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <RemoveButton removeElement={(eventHtml) => removeTicketDispatch(ticket.id)}/>
                    </li>
                    <li className="action-item">
                        <ActivateButton
                            status={ticket.status}
                            toggleState={(eventHtml) => toggleStateDispatch(ticket.id)}
                        />
                    </li>
                </TicketPurchasedActions>
            </TicketPurchasedItem>
        </li>
    );
};
