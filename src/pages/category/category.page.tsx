import * as React from "react";
import {ReactNode} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {CategoryTemplate} from "pods/category/template/category.template";
import {getCategoriesByApi} from "state/actions/searchActions";
import {getEventsByApi} from "state/actions/categoryActions";


export interface Props {
    children: ReactNode;
    onLoadGetEvents: (categoryId:string) => void
    onLoadGetCategories: () => void
    match;
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onLoadGetEvents: (categoryId:string) => {dispatch(getEventsByApi(categoryId))},
        onLoadGetCategories: () => dispatch(getCategoriesByApi())

    };
}

const CategoryPageInner = (props: Props) => {
    const {onLoadGetEvents, onLoadGetCategories, match} = props;

    onLoadGetCategories();
    onLoadGetEvents(match.params.id);

    return (
        <CategoryTemplate/>
    );
};

export const CategoryPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryPageInner);
