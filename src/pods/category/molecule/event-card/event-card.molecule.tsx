import * as React from "react";
import {CardButton} from "../../../../common/atoms/card-button/card.button.atom";
import {Datetime} from "../../../../common/atoms/datetime/datetime.atom";
import {Event} from "../../../../state/vm/event.vm";
import {EventTitle} from "../../atom/event-title/event-title";
import {EventItem} from "../event-item/event-item";
import "./event-card.molecule.scss";

export interface IProps {
    event: Event;
    eventClick: (event: Event) => void;
}

export const EventCard = (props: IProps) => {
    const {event, eventClick} = props;

    return (
        <li className="event-card">
            <EventItem>
                <a className="event-card__thumb" onClick={(jsEvent) => eventClick(event)}>
                    <EventTitle>{event.title}</EventTitle>
                    <img className="event-card__image" src={event.thumbnailImageUrl} alt={event.venueName}></img>
                </a>
            </EventItem>
            <div className="event-card__details">
                <div className="event-card__venue">
                    <span itemProp="name">{event.venueName}</span>
                </div>
                <div className="event-card__location">
                    <span><i className="fa fa-map-marker"></i> {event.city}</span>
                </div>
                <Datetime date={event.date} showIcon={true}/>
                <div className="event-card__actions">
                    <CardButton className={"card_button card_button--ticket-buy"}>Buy</CardButton>
                </div>
            </div>
        </li>
    );
};
