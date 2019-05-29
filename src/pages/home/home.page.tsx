import * as React from "react";
import {ReactNode} from "react";
import {HomeTemplate} from "../../pods/home/template";
import {Dispatch} from "redux";
import {onLoadGetCategories} from "../../state/actions/searchActions";
import {connect} from "react-redux";


export interface Props {
    children: ReactNode;
    onLoadGetCategories: () => void
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onLoadGetCategories: () => dispatch(onLoadGetCategories())
    };
}

const HomePageInner = (props: Props) => {
    const {onLoadGetCategories} = props;

    onLoadGetCategories();

    return (
        <HomeTemplate>{props.children}</HomeTemplate>
    );
};

export const HomePage = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageInner);

