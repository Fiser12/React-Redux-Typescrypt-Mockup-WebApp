import * as React from "react";
import './ticket-purchased-actions.molecule.css'

export interface Props {
    children
}

export const TicketPurchasedActions = (props: Props) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-actions">
            {children}
        </ul>
    );
};