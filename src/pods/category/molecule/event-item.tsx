import * as React from "react";
import './event-item.css'

export interface Props {
    children
}

export const EventItem = (props: Props) => {

    return (
        <div className="event__item">
            <strong>{props.children}</strong>
        </div>
    );
};