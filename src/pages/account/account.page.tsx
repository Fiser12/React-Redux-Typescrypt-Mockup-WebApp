import * as React from "react";
import {ReactNode} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AccountTemplate} from "../../pods/account/template/account.template";
import {getTicketsPurchased} from "../../state/actions/accountActions";
import {getCategoriesByApi} from "../../state/actions/searchActions";


export interface IProps {
    children: ReactNode;
    onLoadGetCategories: () => void;
    onLoadGetSellerTickets: () => void;
    events: object;
    match: any;
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onLoadGetCategories: () => dispatch(getCategoriesByApi()),
        onLoadGetSellerTickets: () => dispatch(getTicketsPurchased()),

    };
}

const AccountPageInner = (props: IProps) => {
    const {onLoadGetCategories, onLoadGetSellerTickets} = props;

    onLoadGetCategories();
    onLoadGetSellerTickets();

    return (
        <AccountTemplate/>
    );
};

export const AccountPage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(AccountPageInner);
