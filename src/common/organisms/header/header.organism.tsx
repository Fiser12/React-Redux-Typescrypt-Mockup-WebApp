import * as React from "react";
import './styles.css'
import {NavLink} from "react-router-dom";
//TODO Typescript don't accept import for png files by default, correct adding module to typescript
const Background = require("./img/line_color.png");
const Logotipo = require("./img/logotipo.png");
const Logocab = require("./img/logocab.png");
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {searchBarDropdownClose} from "../../../state/actions/searchActions";
import {push} from "connected-react-router";
import {routesLinks} from "../../../core";

export interface Props {
    onClickReturnToHome: () => void
}

//TODO Change this for move the relative routes to syles.css of file
const styles = {
    backgroundImage: `url(${Background})`
};

function mapStateToProps(state) {
    return {
        categories: state.searchReducer.searchResultFiltered,
        visible: state.searchReducer.visible
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onClickReturnToHome: (event) => {
            dispatch(searchBarDropdownClose());
            dispatch(push(routesLinks.home));
        },
    };
}


const HeaderBarInner = (props: Props) => {
    const {onClickReturnToHome} = props;

    return (
        <header>
            <div className="main-nav" style={ styles }>
                <a
                    href="#"
                    title="Frontend Test | Ticketbis"
                    className="navbar-logo"
                    onClick={onClickReturnToHome}
                >
                    <img src={Logotipo} alt="Frontend Test | Ticketbis"></img>
                    <img src={Logocab} alt="Frontend Test | Ticketbis"></img>
                </a>
                <ul className="main-menu">
                    <li>
                        <a href="#" title="Help">Help</a>
                    </li>
                    <li>
                        <NavLink to="/account">Account</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderBarInner);
