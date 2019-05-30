import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import {EventListItem} from "../molecule/event-list-item.molecule";
import './style.css'

export interface Props {
    events: Array<Event>
}

export const EventsList = (props: Props) => {
    const {events} = props;

    if(events === null) {
        return (
            <ul className="events-list">
            </ul>
        );
    }

    const eventsList = events.map((event:Event, key) =>
        <EventListItem key={key} event={event}></EventListItem>
    );

    return (
        <ul className="events-list">
            {eventsList}
        </ul>
    );

};
