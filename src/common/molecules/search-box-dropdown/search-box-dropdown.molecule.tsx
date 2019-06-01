import {push} from "connected-react-router";
import {routesLinks} from "core";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IState} from "../../../state";
import {searchBarDropdownClose} from "../../../state/actions/searchActions";
import {Category} from "../../../state/vm/category.vm";
import "./search-box-dropdown.molecule.css";

export interface IProps {
    categories: Category[];
    onClickChangePage: (id: string) => (event) => void;
    visible: boolean;
}

export const SearchBoxDropdownResults = (props: IProps) => {
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
