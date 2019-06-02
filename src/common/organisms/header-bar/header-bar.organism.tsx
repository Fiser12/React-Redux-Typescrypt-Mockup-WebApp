import * as React from "react";
import {NavLink} from "react-router-dom";
import {HeaderMenu} from "../../molecules/header-menu/header-menu.molecule";
import "./header-bar.organism.scss";

// Typescript bugged with files and imports
// tslint:disable-next-line:no-var-requires
const Background = require("./img/line_color.png");
// tslint:disable-next-line:no-var-requires
const Logotipo = require("./img/logotipo.png");
// tslint:disable-next-line:no-var-requires
const Logocab = require("./img/logocab.png");

// TODO Change this for move the relative routes to syles.css of file
const styles = {
    backgroundImage: `url(${Background})`,
};

export const HeaderBar = () => {
    return (
        <header>
            <div className="header-bar" style={styles}>
                <NavLink title="Frontend Test | Ticketbis" className="header-bar__logo" to="/">
                    <img src={Logotipo} alt="Frontend Test | Ticketbis"></img>
                    <img src={Logocab} alt="Frontend Test | Ticketbis"></img>
                </NavLink>
                <HeaderMenu>
                    <li>
                        <NavLink to="/help">Help</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">Account</NavLink>
                    </li>
                </HeaderMenu>
            </div>
        </header>
    );
};
