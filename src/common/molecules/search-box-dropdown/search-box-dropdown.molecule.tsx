import {push} from "connected-react-router";
import {routesLinks} from "core";
import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IState} from "../../../state";
import {searchBarDropdownClose} from "../../../state/actions/searchActions";
import {Category} from "../../../state/vm/category.vm";
import "./search-box-dropdown.molecule.scss";

export interface IProps {
    categories: Category[];
    onClickChangePage: (id: number) => (event) => void;
    visible: boolean;
}

export const SearchBoxDropdownResults = (props: IProps) => {
    const {categories, visible, onClickChangePage} = props;

    if (!visible) {
        return <>
        </>;
    }

    const listCategories = categories.map((category, key) =>
        <li key={key} onClick={onClickChangePage(category.id)}>{category.name}</li>,
    );


    return (
        <ul className="search-box__dropdown-content" data-testid="autocomplete-list">
            {listCategories}
        </ul>
    );
};
