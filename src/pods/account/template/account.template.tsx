import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms/search-box/search-box.organism";
import {IState} from "../../../state";
import {duplicateTicket, removeTicket, toggleState} from "../../../state/actions/accountActions";
import {searchBarChangeInputText} from "../../../state/actions/searchActions";
import {getEvents, getTickets} from "../../../state/queries/accountQueries";
import {Category} from "../../../state/vm/category.vm";
import {Event} from "../../../state/vm/event.vm";
import {Ticket} from "../../../state/vm/ticket.vm";
import {TicketPurchasedList} from "../organism/tickets-purchased-list/tickets-purchased-list.organism";
import "./account.template.css";
import {getCategories, getInputTextField, isVisible} from "../../../state/queries/searchQueries";

export interface IProps {
    events: Event[];
    duplicateTicketDispatch: (id: number) => void;
    removeTicketDispatch: (id: number) => void;
    tickets: Ticket[];
    toggleStateDispatch: (id: number) => void;
    categories: Category[];
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    visible: boolean;
}

function mapStateToProps(state: IState) {
    return {
        categories: getCategories(state)(),
        events: getEvents(state)(),
        inputTextField: getInputTextField(state)(),
        tickets: getTickets(state)(),
        visible: isVisible(state)(),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        duplicateTicketDispatch: (id: number) => dispatch(duplicateTicket(id)),
        onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
            searchBarChangeInputText(e.target.value),
        ),
        removeTicketDispatch: (id: number) => dispatch(removeTicket(id)),
        toggleStateDispatch: (id: number) => dispatch(toggleState(id)),
    };
}

export const AccountTemplateInner = (props: IProps) => {
    const {
        tickets,
        events,
        duplicateTicketDispatch,
        toggleStateDispatch,
        removeTicketDispatch,
        onChangeInputText,
        inputTextField,
        visible,
        categories,
    } = props;

    return (
        <div className="container">
            <SearchBox
                categories={categories}
                inputTextField={inputTextField}
                onChangeInputText={onChangeInputText}
                visible={visible}
            />
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
