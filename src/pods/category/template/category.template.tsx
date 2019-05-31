import {push} from "connected-react-router";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms";
import {routesLinks} from "../../../core";
import {selectEvent} from "../../../state/actions/eventActions";
import {Event} from "../../../state/vm/event.vm";
import {EventsList} from "../organism/events-list.organism";
import "./category.template.css";

export interface IProps {
    events: Event[];
    onClickEvent: (id) => (event) => void;
}

function mapStateToProps(state) {
    return {
        events: state.categoryReducer.events,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onClickEvent: (event: Event) => (jsEvent) => {
            dispatch(selectEvent(event));
            dispatch(push(routesLinks.event(event.id)));
        },
    };
}

export const CategoryTemplateInner = (props: IProps) => {
    const {events, onClickEvent} = props;

    return (
        <div className="container">
            <SearchBox/>
            <div className="events-container">
                <EventsList events={events} eventClick={onClickEvent}/>
            </div>
        </div>
    );
};

export const CategoryTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryTemplateInner);
