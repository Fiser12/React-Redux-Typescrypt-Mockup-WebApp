import * as React from "react";
import './event-title.css'

export interface Props {
    children
}

export const EventTitle = (props: Props) => {

    return (
        <div className="event__title">
            <strong>{props.children}</strong>
        </div>
    );
};