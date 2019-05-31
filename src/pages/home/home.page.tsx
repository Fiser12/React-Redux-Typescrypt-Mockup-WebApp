import * as React from "react";
import {ReactNode} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {HomeTemplate} from "../../pods/home/template/home.template";
import {IState} from "../../state";
import {getCategoriesByApi} from "../../state/actions/searchActions";


export interface IProps {
    children: ReactNode;
    onLoadGetCategories: () => void;
}

function mapStateToProps(state: IState) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLoadGetCategories: () => dispatch(getCategoriesByApi()),
    };
}

const HomePageInner = (props: IProps) => {
    const {onLoadGetCategories} = props;

    onLoadGetCategories();

    return (
        <HomeTemplate>{props.children}</HomeTemplate>
    );
};

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomePageInner);
