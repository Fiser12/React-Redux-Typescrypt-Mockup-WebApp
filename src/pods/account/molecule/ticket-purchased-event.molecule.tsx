import * as React from "react";
import './ticket-purchased-event.molecule.css'

export interface Props {
    children
}

export const TicketPurchasedEvent = (props: Props) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-event">
            {children}
        </ul>
    );
};