import * as React from "react";
import {Event} from "../../../state/vm/event.vm";
import {EventListItem} from "../molecule/event-list-item.molecule";

export interface Props {
    events: Array<Event>
}

export const EventsList = (props: Props) => {
    const {events} = props;

    const eventsList = events.map((event:Event) =>
        <EventListItem event={event}></EventListItem>
    );

    return (
        <ul className="events-list">
            {eventsList}
        </ul>
    );

};