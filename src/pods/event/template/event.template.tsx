import * as React from "react";
import {connect} from "react-redux";
import {IState} from "../../../state";
import {getEvent, getTickets} from "../../../state/queries/eventQueries";
import {Event} from "../../../state/vm/event.vm";
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketsList} from "../organism/ticket-list/tickets-list.organism";
import "./event.template.css";

export interface IProps {
    event: Event;
    tickets: Ticket[];
}

function mapStateToProps(state: IState) {
    return {
        event: getEvent(state)(),
        tickets: getTickets(state)(),
    };
}

const EventTemplateInner = (props: IProps) => {
    const {tickets, event} = props;

    return (
        <div className="container">
            <h2>{event != null ? event.title : ""}</h2>
            <div className="event-container">
                <TicketsList tickets={tickets}/>
            </div>
        </div>
    );
};

export const EventTemplate = connect(mapStateToProps)(EventTemplateInner);
