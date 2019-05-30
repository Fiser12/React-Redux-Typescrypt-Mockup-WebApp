import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import './style.css'

export interface Props {
    event: Event;
}

export const EventListItem = (props: Props) => {
    const { event } = props;

    return (
        <li className="event-list-item">
            <div className="event__item">
                <a className="event__thumb" href="#">
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
                    <a href="#" className="event-buy-button">Buy</a>
                </div>
            </div>
        </li>
    );
};
