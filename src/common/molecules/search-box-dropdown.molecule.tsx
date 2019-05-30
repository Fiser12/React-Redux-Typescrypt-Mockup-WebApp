import * as React from "react";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import './search-box-dropdown.molecule.css'
import {push} from "connected-react-router";
import {routesLinks} from "core";
import {searchBarDropdownClose} from "state/actions/searchActions";
import {Category} from "state/vm/category.vm";

export interface Props {
    categories: Array<Category>,
    visible: boolean,
    onClickChangePage : (id:string) =>(event) => void
}

function mapStateToProps(state) {
    return {
        categories: state.searchReducer.searchResultFiltered,
        visible: state.searchReducer.visible
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onClickChangePage: (id:string) =>(event) => {
            dispatch(searchBarDropdownClose());
            dispatch(push(routesLinks.category(id)));
        },
    };
}


const SearchBoxDropdownResultsInner = (props: Props) => {
    const {categories, visible, onClickChangePage} = props;

    if (!visible) {
        return <>
        </>
    }

    const listCategories = categories.map((category, key) =>
        <li key={key} className="" onClick={onClickChangePage(category.id)}>{category.name}</li>
    );


    return (
        <ul className="dropdown-content" data-testid="autocomplete-list">
            {listCategories}
        </ul>
    );
};

export const SearchBoxDropdownResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBoxDropdownResultsInner);
