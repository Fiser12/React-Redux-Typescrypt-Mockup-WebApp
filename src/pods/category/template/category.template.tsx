import {push} from "connected-react-router";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms/search-box/search-box.organism";
import {routesLinks} from "../../../core";
import {IState} from "../../../state";
import {selectEvent} from "../../../state/actions/eventActions";
import {searchBarChangeInputText, searchBarDropdownClose} from "../../../state/actions/searchActions";
import {getEvents} from "../../../state/queries/categoryQueries";
import {getCategories, getInputTextField, isVisible} from "../../../state/queries/searchQueries";
import {Category} from "../../../state/vm/category.vm";
import {Event} from "../../../state/vm/event.vm";
import {EventsList} from "../organism/events-list/events-list.organism";
import "./category.template.css";

export interface IProps {
    events: Event[];
    eventClick: (event: Event) => void;
    categories: Category[];
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickChangePage: (id: number) => (event) => void;
    visible: boolean;
}

function mapStateToProps(state: IState) {
    return {
        categories: getCategories(state)(),
        events: getEvents(state)(),
        inputTextField: getInputTextField(state)(),
        visible: isVisible(state)(),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        eventClick: (event: Event) => {
            dispatch(selectEvent(event));
            dispatch(push(routesLinks.event(event.id)));
        },
        onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
            searchBarChangeInputText(e.target.value),
        ),
        onClickChangePage: (id: number) => (event) => {
            dispatch(searchBarDropdownClose());
            dispatch(push(routesLinks.category(id)));
        },
    };
}

export const CategoryTemplateInner = (props: IProps) => {
    const {events, eventClick, categories, inputTextField, onChangeInputText, onClickChangePage, visible} = props;

    return (
        <div className="container">
            <SearchBox
                categories={categories}
                inputTextField={inputTextField}
                onChangeInputText={onChangeInputText}
                visible={visible}
                onClickChangePage={onClickChangePage}
            />
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
