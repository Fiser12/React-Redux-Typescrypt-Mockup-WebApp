import * as React from "react";
import './styles.css'
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {searchBarChangeInputText, onLoadGetCategories} from "../../../../state/actions/searchActions";

export interface Props {
    inputTextField: string,
    onChangeInputText,
}

function mapStateToProps(state) {
    return {
        inputTextField: state.searchReducer.inputTextField
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onChangeInputText: (event) => dispatch(searchBarChangeInputText(event.target.value)),
    };
}

const SearchBoxTemplate = (props: Props) => {
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

//TODO Change this for move the relative routes to syles.css of file
export const SearchBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBoxTemplate);

