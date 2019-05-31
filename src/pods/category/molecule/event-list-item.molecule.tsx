import * as React from "react";
import {BuyButtonAtom} from "../../../common/atoms/buy-button.atom";
import {DatetimeAtom} from "../../../common/atoms/datetime.atom";
import {Event} from "../../../state/vm/event.vm";
import {EventTitle} from "../atom/event-title";
import {EventItem} from "./event-item";
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
                <DatetimeAtom date={event.date} showIcon={true}/>
                <div className="event__actions">
                    <BuyButtonAtom/>
                </div>
            </div>
        </li>
    );
};
