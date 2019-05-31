import * as React from "react";
import {ReactNode} from "react";
import "./ticket-purchased-actions.molecule.css";

export interface IProps {
    children: ReactNode;
}

export const TicketPurchasedActions = (props: IProps) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-actions">
            {children}
        </ul>
    );
};
