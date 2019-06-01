import * as React from "react";
import {ReactNode} from "react";
import "./event-title.scss";

export interface IProps {
    children: ReactNode;
}

export const EventTitle = (props: IProps) => {

    return (
        <div className="event__title">
            <strong>{props.children}</strong>
        </div>
    );
};
