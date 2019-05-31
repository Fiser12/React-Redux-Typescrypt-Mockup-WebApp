import * as React from "react";
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    venueName: string,
    city: string,
    country: string
}

export const Location = (props: Props) => {
    const {venueName, country, city} = props;

    return (<span className="location">{venueName + ", " + city + ", " + country}</span>);
};