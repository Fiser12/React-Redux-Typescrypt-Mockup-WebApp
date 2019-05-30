import * as React from "react";
import './account.template.css'
import {SearchBox} from "../../../common/organisms";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {TicketPurchasedList} from "../organism/tickets-purchased-list.organism";
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";
import {duplicateTicket, removeTicket, toggleState} from "../../../state/actions/accountActions";

export interface Props {
    tickets: Array<Ticket>
    events: Array<Event>
    removeTicket: (id:number) => void
    duplicateTicket: (id:number) => void
    toggleState: (id:number) => void
}

function mapStateToProps(state) {
    return {
        tickets: state.accountReducer.tickets,
        events: state.accountReducer.eventsCache
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        duplicateTicket: (id:number) => dispatch(duplicateTicket(id)),
        removeTicket: (id:number) => dispatch(removeTicket(id)),
        toggleState: (id:number) => dispatch(toggleState(id))
    };
}

export const AccountTemplateInner = (props: Props) => {
    const {tickets, events, duplicateTicket, toggleState, removeTicket} = props;

    return (
        <div className="container">
            <SearchBox/>
            <h2>Tickets</h2>
            <div className="tickets-container">
                <TicketPurchasedList
                    tickets={tickets}
                    events={events}
                    duplicateTicket={duplicateTicket}
                    toggleState={toggleState}
                    removeTicket={removeTicket}
                />
            </div>
        </div>
    );
};

export const AccountTemplate = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountTemplateInner);
