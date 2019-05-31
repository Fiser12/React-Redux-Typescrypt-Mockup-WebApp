import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {EventTemplate} from "../../pods/event/template/event.template";
import {getActiveTicketsByApi, getEventById} from "../../state/actions/eventActions";

export interface IProps {
    onLoadGetActiveTickets: (eventId: string) => void;
    onLoadGetEvent: (eventId: string) => void;
    match: any;
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLoadGetActiveTickets: (eventId: string) => dispatch(getActiveTicketsByApi(eventId)),
        onLoadGetEvent: (eventId: string) => dispatch(getEventById(eventId)),
    };
}

const EventPageInner = (props: IProps) => {
    const {onLoadGetActiveTickets, onLoadGetEvent, match} = props;

    onLoadGetActiveTickets(match.params.id);
    onLoadGetEvent(match.params.id);

    return (
        <EventTemplate/>
    );
};

export const EventPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(EventPageInner);
