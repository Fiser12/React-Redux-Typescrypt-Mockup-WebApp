import {push} from "connected-react-router";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms";
import {routesLinks} from "../../../core";
import {IState} from "../../../state";
import {selectEvent} from "../../../state/actions/eventActions";
import {getEvents} from "../../../state/queries/categoryQueries";
import {Event} from "../../../state/vm/event.vm";
import {EventsList} from "../organism/events-list/events-list.organism";
import "./category.template.css";

export interface IProps {
    events: Event[];
    eventClick: (event: Event) => void;
}

function mapStateToProps(state: IState) {
    return {
        events: getEvents(state)(),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        eventClick: (event: Event) => {
            dispatch(selectEvent(event));
            dispatch(push(routesLinks.event(event.id)));
        },
    };
}

export const CategoryTemplateInner = (props: IProps) => {
    const {events, eventClick} = props;

    return (
        <div className="container">
            <SearchBox/>
            <div className="events-container">
                <EventsList events={events} eventClick={eventClick}/>
            </div>
        </div>
    );
};

export const CategoryTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryTemplateInner);
