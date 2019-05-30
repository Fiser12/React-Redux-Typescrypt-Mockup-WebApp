import * as React from "react";
import './styles.css'
import {connect} from "react-redux";
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketsList} from "../organism/tickets-list.organism";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    tickets: Array<Ticket>
    event: Event
}

function mapStateToProps(state) {
    return {
        tickets: state.eventReducer.tickets,
        event: state.eventReducer.event
    };
}

const EventTemplateInner = (props: Props) => {
    const {tickets, event} = props;

    return (
        <div className="container">
            <h2>{event.title}</h2>
            <div className="event-container">
                <TicketsList tickets={tickets}/>
            </div>
        </div>
    );
};

export const EventTemplate = connect(
    mapStateToProps
)(EventTemplateInner);
