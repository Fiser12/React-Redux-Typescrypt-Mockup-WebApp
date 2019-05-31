import * as React from "react";
import {ReactNode} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {CategoryTemplate} from "../../pods/category/template/category.template";
import {IState} from "../../state";
import {getEventsByApi} from "../../state/actions/categoryActions";
import {getCategoriesByApi} from "../../state/actions/searchActions";

export interface IProps {
    children: ReactNode;
    match: any;
    onLoadGetCategories: () => void;
    onLoadGetEvents: (categoryId: string) => void;
}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLoadGetCategories: () => dispatch(getCategoriesByApi()),
        onLoadGetEvents: (categoryId: string) => dispatch(getEventsByApi(categoryId)),
    };
}

const CategoryPageInner = (props: IProps) => {
    const {onLoadGetEvents, onLoadGetCategories, match} = props;

    onLoadGetCategories();
    onLoadGetEvents(match.params.id);

    return (
        <CategoryTemplate/>
    );
};

export const CategoryPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryPageInner);
