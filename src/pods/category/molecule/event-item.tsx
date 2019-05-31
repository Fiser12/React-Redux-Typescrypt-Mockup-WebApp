import * as React from "react";
import {ReactNode} from "react";
import "./event-item.css";

export interface IProps {
    children: ReactNode;
}

export const EventItem = (props: IProps) => {

    return (
        <div className="event__item">
            <strong>{props.children}</strong>
        </div>
    );
};
