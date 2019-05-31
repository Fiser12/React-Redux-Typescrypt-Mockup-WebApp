import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {searchBarChangeInputText} from "../../../state/actions/searchActions";
import {SearchBoxDropdownResults} from "../../molecules/search-box-dropdown/search-box-dropdown.molecule";
import "./search-box.organism.css";

export interface IProps {
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function mapStateToProps(state) {
    return {
        inputTextField: state.search.inputTextField,
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
    const {inputTextField, onChangeInputText} = props;

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
                <SearchBoxDropdownResults/>
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
