import * as React from "react";
import {ReactNode} from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AccountTemplate} from "pods/account/template/account.template";
import {getCategoriesByApi} from "state/actions/searchActions";
import {getTicketsPurchased} from "../../state/actions/accountActions";


export interface Props {
    children: ReactNode;
    onLoadGetCategories: () => void
    onLoadGetSellerTickets: () => void
    events: object
    match;
}

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        onLoadGetCategories: () => dispatch(getCategoriesByApi()),
        onLoadGetSellerTickets: () => dispatch(getTicketsPurchased())

    };
}

const AccountPageInner = (props: Props) => {
    const {onLoadGetCategories, onLoadGetSellerTickets} = props;

    onLoadGetCategories();
    onLoadGetSellerTickets();

    return (
        <AccountTemplate/>
    );
};

export const AccountPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountPageInner);
