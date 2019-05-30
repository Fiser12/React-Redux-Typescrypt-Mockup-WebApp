import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {getActiveTicketsByApi} from "../../state/actions/eventActions";
import {EventTemplate} from "../../pods/event/template/event.template";


export interface Props {
    onLoadGetActiveTickets: (eventId:string) => void;
    match;
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onLoadGetActiveTickets: (eventId:string) => dispatch(getActiveTicketsByApi(eventId))
    };
}

const EventPageInner = (props: Props) => {
    const {onLoadGetActiveTickets, match} = props;

    onLoadGetActiveTickets(match.params.id)

    return (
        <EventTemplate/>
    );
};

export const EventPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(EventPageInner);
