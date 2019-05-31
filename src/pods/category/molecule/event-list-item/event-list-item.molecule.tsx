import * as React from "react";
import {CardButton} from "../../../../common/atoms/card-button/card.button.atom";
import {Datetime} from "../../../../common/atoms/datetime/datetime.atom";
import {Event} from "../../../../state/vm/event.vm";
import {EventTitle} from "../../atom/event-title/event-title";
import {EventItem} from "../event-item/event-item";
import "./event-list-item.molecule.css";

export interface IProps {
    event: Event;
    eventClick: (id) => (event) => void;
}

export const EventListItem = (props: IProps) => {
    const {event, eventClick} = props;

    return (
        <li className="event-list-item">
            <EventItem>
                <a className="event__thumb" onClick={eventClick(event)}>
                    <EventTitle>{event.title}</EventTitle>
                    <img className="event__image" src={event.thumbnailImageUrl} alt={event.venueName}></img>
                </a>
            </EventItem>
            <div className="event__details">
                <div className="event-venue">
                    <span itemProp="name">{event.venueName}</span>
                </div>
                <div className="event-location">
                    <span><i className="fa fa-map-marker"></i> {event.city}</span>
                </div>
                <Datetime date={event.date} showIcon={true}/>
                <div className="event__actions">
                    <CardButton className={"card_button__ticket-buy"}>Buy</CardButton>
                </div>
            </div>
        </li>
    );
};
