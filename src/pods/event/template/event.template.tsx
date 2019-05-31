import * as React from "react";
import {connect} from "react-redux";
import {Event} from "../../../state/vm/event.vm";
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketsList} from "../organism/tickets-list.organism";
import "./event.template.css";

export interface IProps {
    event: Event;
    tickets: Ticket[];
}

function mapStateToProps(state) {
    return {
        event: state.eventReducer.event,
        tickets: state.eventReducer.tickets,
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
