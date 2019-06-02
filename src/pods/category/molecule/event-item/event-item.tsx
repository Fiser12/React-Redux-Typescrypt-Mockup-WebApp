import * as React from "react";
import {ReactNode} from "react";
import "./event-item.scss";

export interface IProps {
    children: ReactNode;
}

export const EventItem = (props: IProps) => {

    return (
        <div className="event-card__item">
            <strong>{props.children}</strong>
        </div>
    );
};
