import * as React from "react";
import {Datetime} from "../../../../common/atoms/datetime/datetime.atom";
import {Event} from "../../../../state/vm/event.vm";
import {Ticket} from "../../../../state/vm/ticket.vm";
import {Location} from "../../atom/location/location.atom";
import {TicketButton} from "../../atom/ticket-button/ticket-button.atom";
import {TicketPurchasedActions} from "../ticket-purchased-actions/ticket-purchased-actions.molecule";
import {TicketPurchasedEvent} from "../ticket-purchased-event/ticket-purchased-event.molecule";
import {TicketPurchasedItem} from "../ticket-purchased-item/ticket-purchased-item.molecule";
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
                        <TicketButton
                            className={"fa fa-files-o"}
                            onClick={(eventHtml) => duplicateTicketDispatch(ticket.id)}
                        >Duplicate</TicketButton>
                    </li>
                    <li className="action-item">
                        <TicketButton
                            className={"fa fa-trash"}
                            onClick={(eventHtml) => removeTicketDispatch(ticket.id)}
                        >Remove</TicketButton>
                    </li>
                    <li className="action-item">
                        <TicketButton
                            className={!ticket.status ? "fa fa-eye" : "fa fa-eye-slash"}
                            onClick={(eventHtml) => toggleStateDispatch(ticket.id)}
                        >{ticket.status ? "Disable" : "Enable"}</TicketButton>
                    </li>
                </TicketPurchasedActions>
            </TicketPurchasedItem>
        </li>
    );
};
