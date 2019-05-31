import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms";
import {duplicateTicket, removeTicket, toggleState} from "../../../state/actions/accountActions";
import {Event} from "../../../state/vm/event.vm";
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketPurchasedList} from "../organism/tickets-purchased-list.organism";
import "./account.template.css";

export interface IProps {
    events: Event[];
    duplicateTicketDispatch: (id: number) => void;
    removeTicketDispatch: (id: number) => void;
    tickets: Ticket[];
    toggleStateDispatch: (id: number) => void;
}

function mapStateToProps(state) {
    return {
        events: state.accountReducer.eventsCache,
        tickets: state.accountReducer.tickets,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        duplicateTicketDispatch: (id: number) => dispatch(duplicateTicket(id)),
        removeTicketDispatch: (id: number) => dispatch(removeTicket(id)),
        toggleStateDispatch: (id: number) => dispatch(toggleState(id)),
    };
}

export const AccountTemplateInner = (props: IProps) => {
    const {tickets, events, duplicateTicketDispatch, toggleStateDispatch, removeTicketDispatch} = props;

    return (
        <div className="container">
            <SearchBox/>
            <h2>Tickets</h2>
            <div className="tickets-container">
                <TicketPurchasedList
                    tickets={tickets}
                    events={events}
                    duplicateTicket={duplicateTicketDispatch}
                    toggleState={toggleStateDispatch}
                    removeTicket={removeTicketDispatch}
                />
            </div>
        </div>
    );
};

export const AccountTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountTemplateInner);
