import * as React from "react";
import {Event} from "../../../../state/vm/event.vm";
import {EventCard} from "../../molecule/event-card/event-card.molecule";
import "./events-list.organism.scss";

export interface IProps {
    events: Event[];
    eventClick: (event: Event) => void;
}

export const EventsList = (props: IProps) => {
    const {events, eventClick} = props;

    if (events === null) {
        return (
            <ul className="events-list">
            </ul>
        );
    }

    const eventsList = events.map((event: Event, key) =>
        <EventCard key={key} event={event} eventClick={eventClick}></EventCard>,
    );

    return (
        <ul className="events-list">
            {eventsList}
        </ul>
    );

};
