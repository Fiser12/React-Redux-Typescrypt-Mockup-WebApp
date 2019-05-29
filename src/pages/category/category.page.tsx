import * as React from "react";
import {ReactNode} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {CategoryTemplate} from "../../pods/category/template/category.template";


export interface Props {
    children: ReactNode;
    onLoadGetEvents: () => void
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onLoadGetEvents: () => {}
    };
}

const CategoryPageInner = (props: Props) => {
    const {onLoadGetEvents} = props;

    onLoadGetEvents();

    return (
        <CategoryTemplate>{props.children}</CategoryTemplate>
    );
};

export const CategoryPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryPageInner);
