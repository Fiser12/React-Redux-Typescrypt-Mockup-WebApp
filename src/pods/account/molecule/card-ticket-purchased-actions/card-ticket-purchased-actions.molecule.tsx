import * as React from "react";
import {ReactNode} from "react";
import "./card-ticket-purchased-actions.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const TicketPurchasedActions = (props: IProps) => {
    const {children} = props;

    return (
            <ul className="card-ticket-purchased__actions">
                {children}
            </ul>
    );
};
