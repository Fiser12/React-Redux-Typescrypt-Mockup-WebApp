import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './event-list-item.molecule.css'

export interface Props {
    event: Event;
    eventClick: (id) => (event) => void
}

export const EventListItem = (props: Props) => {
    const { event, eventClick } = props;

    return (
        <li className="event-list-item">
            <div className="event__item">
                <a className="event__thumb" onClick={eventClick(event)}>
                    <div className="event__title">
                        <strong>{event.title}</strong>
                    </div>
                    <img className="event__image" src={event.thumbnailImageUrl} alt={event.venueName}></img>
                </a>
            </div>
            <div className="event__details">
                <div className="event-venue">
                    <span itemProp="name">{event.venueName}</span>
                </div>
                <div className="event-location">
                    <span><i className="fa fa-map-marker"></i> {event.city}</span>
                </div>
                <time className="datetime" dateTime={event.date.toDateString()}>
                    <div className="event-date">
                        <i className="fa fa-calendar"></i>
                        {event.date.toDateString()}
                    </div>
                </time>
                <div className="event__actions">
                    <a className="event-buy-button">Buy</a>
                </div>
            </div>
        </li>
    );
};