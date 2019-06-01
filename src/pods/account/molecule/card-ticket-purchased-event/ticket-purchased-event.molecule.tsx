import * as React from "react";
import {ReactNode} from "react";
import "./ticket-purchased-event.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const TicketPurchasedEvent = (props: IProps) => {
    const {children} = props;

    return (
        <ul className="card-ticket-purchased__event">
            {children}
        </ul>
    );
};
