import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './event-list-item.molecule.css'
import {BuyButton} from "../../../common/atoms/buy-button";
import {EventTitle} from "../atom/event-title";
import {Datetime} from "../../../common/atoms/datetime";
import {EventItem} from "./event-item";

export interface Props {
    event: Event;
    eventClick: (id) => (event) => void
}

export const EventListItem = (props: Props) => {
    const { event, eventClick } = props;

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
                    <BuyButton/>
                </div>
            </div>
        </li>
    );
};