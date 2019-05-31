import * as React from "react";
import {ReactNode} from "react";
import "./ticket-purchased-event.molecule.css";

export interface IProps {
    children: ReactNode;
}

export const TicketPurchasedEvent = (props: IProps) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-event">
            {children}
        </ul>
    );
};
