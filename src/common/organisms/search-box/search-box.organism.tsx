import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {searchBarChangeInputText} from "../../../state/actions/searchActions";
import {getCategories, getInputTextField, isVisible} from "../../../state/queries/searchQueries";
import {Category} from "../../../state/vm/category.vm";
import {SearchBoxDropdownResults} from "../../molecules/search-box-dropdown/search-box-dropdown.molecule";
import "./search-box.organism.css";

export interface IProps {
    categories: Category[];
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    visible: boolean;
}

function mapStateToProps(state) {
    return {
        categories: getCategories(state)(),
        inputTextField: getInputTextField(state)(),
        visible: isVisible(state)(),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
            searchBarChangeInputText(e.target.value),
        ),
    };
}

const SearchBoxInner = (props: IProps) => {
    const {inputTextField, onChangeInputText, categories, visible} = props;

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
                <SearchBoxDropdownResults categories={categories} visible={visible}/>
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

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBoxInner);
