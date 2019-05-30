import * as React from "react";
import './category.template.css'
import {SearchBox} from "../../../common/organisms";
import {EventsList} from "../organism/events-list.organism";
import {connect} from "react-redux";
import {Event} from "../../../state/vm/event.vm";
import {Dispatch} from "redux";
import {push} from "connected-react-router";
import {routesLinks} from "../../../core";
import {selectEvent} from "../../../state/actions/eventActions";

export interface Props {
    events: Array<Event>
    onClickEvent: (id) => (event) => void
}

function mapStateToProps(state) {
    return {
        events: state.categoryReducer.events
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onClickEvent: (event:Event) => (jsEvent) => {
            dispatch(selectEvent(event));
            dispatch(push(routesLinks.event(event.id)));
        }
    };
}

export const CategoryTemplateInner = (props: Props) => {
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
    mapDispatchToProps
)(CategoryTemplateInner);
