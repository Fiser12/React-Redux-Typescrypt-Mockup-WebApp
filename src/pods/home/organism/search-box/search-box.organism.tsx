import * as React from "react";
import './styles.css'

export interface Props {
}

const SearchBoxTemplate = (props: Props) => {
    return (
        <form action="#" method="get" className="search-box">
            <input name="query" autoComplete="off" className="search-box__input"
                   placeholder="Search for an event, city, artist or team" type="text" value=""></input>
            <button type="submit" className="search-box__button">
                <i className="fa fa-search visible-phone"></i>
                <span className="hidden-phone">Search</span>
            </button>
        </form>
    );
};

//TODO Change this for move the relative routes to syles.css of file
export const SearchBox = SearchBoxTemplate;
