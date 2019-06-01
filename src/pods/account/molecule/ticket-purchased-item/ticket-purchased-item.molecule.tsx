import * as React from "react";
import {ReactNode} from "react";
import "./ticket-purchased-item.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const TicketPurchasedItem = (props: IProps) => {
    const {children} = props;

    return (
        <ul className="ticket-purchased-item">
            {children}
        </ul>
    );
};
