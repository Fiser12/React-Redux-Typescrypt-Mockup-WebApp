import * as React from "react";
import {ReactNode} from "react";
import "./ticket-purchased-event.molecule.scss";

export interface IProps {
    children: ReactNode;
    status: boolean;
}

export const TicketPurchasedEvent = (props: IProps) => {
    const {children, status} = props;

    return (
        <ul className={"card-ticket-purchased__event " + (!status ? "card-ticket-purchased__event--disabled" : "")}>
            {children}
        </ul>
    );
};
