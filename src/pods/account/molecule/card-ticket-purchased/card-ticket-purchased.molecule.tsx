import * as React from "react";
import {Datetime} from "../../../../common/atoms/datetime/datetime.atom";
import {Event} from "../../../../state/vm/event.vm";
import {Ticket} from "../../../../state/vm/ticket.vm";
import {Location} from "../../atom/location/location.atom";
import {TicketButton} from "../../atom/ticket-button/ticket-button.atom";
import {TicketPurchasedActions} from "../card-ticket-purchased-actions/card-ticket-purchased-actions.molecule";
import {TicketPurchasedEvent} from "../card-ticket-purchased-event/ticket-purchased-event.molecule";
import "./card-ticket-purchased.molecule.scss";

export interface IProps {
    event: Event;
    duplicateTicketDispatch: (id: number) => void;
    removeTicketDispatch: (id: number) => void;
    ticket: Ticket;
    toggleStateDispatch: (id: number) => void;
}

export const CardTicketPurchased = (props: IProps) => {
    const {ticket, event, removeTicketDispatch, duplicateTicketDispatch, toggleStateDispatch} = props;

    if (event == null) {
        return <></>;
    }

    return (
        <li className="card-ticket-purchased">
            <TicketPurchasedEvent>
                <img className="card-ticket-purchased__image" src={event.thumbnailImageUrl}></img>
                <div className="card-ticket-purchased__info">
                    <h4 className="card-ticket-purchased__title">{event.title}</h4>
                    <Datetime date={event.date} showIcon={false}/>
                    <Location city={event.venueName} venueName={event.city} country={event.country}/>
                </div>
            </TicketPurchasedEvent>

            <TicketPurchasedActions>
                <li className="card-ticket-purchased__button">
                    <TicketButton
                        className={"fa fa-files-o"}
                        onClick={(eventHtml) => duplicateTicketDispatch(ticket.id)}
                    >Duplicate</TicketButton>
                </li>
                <li className="card-ticket-purchased__button">
                    <TicketButton
                        className={"fa fa-trash"}
                        onClick={(eventHtml) => removeTicketDispatch(ticket.id)}
                    >Remove</TicketButton>
                </li>
                <li className="card-ticket-purchased__button">
                    <TicketButton
                        className={!ticket.status ? "fa fa-eye" : "fa fa-eye-slash"}
                        onClick={(eventHtml) => toggleStateDispatch(ticket.id)}
                    >{ticket.status ? "Disable" : "Enable"}</TicketButton>
                </li>
            </TicketPurchasedActions>
        </li>
    );
};
