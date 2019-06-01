import * as React from "react";
import {Category} from "../../../state/vm/category.vm";
import {SearchBoxDropdownResults} from "../../molecules/search-box-dropdown/search-box-dropdown.molecule";
import "./search-box.organism.css";

export interface IProps {
    categories: Category[];
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickChangePage: (id: number) => (event) => void;
    visible: boolean;
}

export const SearchBox = (props: IProps) => {
    const {inputTextField, onChangeInputText, onClickChangePage, categories, visible} = props;

    return (
        <>
            <form action="#" method="get" className="search-box">
                <input
                    name="query"
                    autoComplete="off"
                    className="search-box__input"
                    placeholder="Search for an event, city, artist or team"
                    type="text"
                    value={inputTextField}
                    onChange={onChangeInputText}
                />
                <SearchBoxDropdownResults
                    categories={categories}
                    visible={visible}
                    onClickChangePage={onClickChangePage}
                />
                <button
                    type="button"
                    className="search-box__button"
                >
                    <i className="fa fa-search visible-phone"></i>
                    <span className="hidden-phone">Search</span>
                </button>
            </form>
        </>
    );
};
