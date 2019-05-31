import * as React from "react";
import './ticket-purchased-item.molecule.css'

export interface Props {
    children
}

export const TicketPurchasedItem = (props: Props) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-item">
            {children}
        </ul>
    );
};