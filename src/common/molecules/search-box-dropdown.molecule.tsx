import {push} from "connected-react-router";
import {routesLinks} from "core";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {searchBarDropdownClose} from "../../state/actions/searchActions";
import {Category} from "../../state/vm/category.vm";
import "./search-box-dropdown.molecule.css";

export interface IProps {
    categories: Category[];
    onClickChangePage: (id: string) => (event) => void;
    visible: boolean;
}

function mapStateToProps(state) {
    return {
        categories: state.searchReducer.searchResultFiltered,
        visible: state.searchReducer.visible,
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onClickChangePage: (id: string) => (event) => {
            dispatch(searchBarDropdownClose());
            dispatch(push(routesLinks.category(id)));
        },
    };
}


const SearchBoxDropdownResultsInner = (props: IProps) => {
    const {categories, visible, onClickChangePage} = props;

    if (!visible) {
        return <>
        </>;
    }

    const listCategories = categories.map((category, key) =>
        <li key={key} className="" onClick={onClickChangePage(category.id)}>{category.name}</li>,
    );


    return (
        <ul className="dropdown-content" data-testid="autocomplete-list">
            {listCategories}
        </ul>
    );
};

export const SearchBoxDropdownResults = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBoxDropdownResultsInner);
