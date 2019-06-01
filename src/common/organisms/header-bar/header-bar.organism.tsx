import * as React from "react";
import {NavLink} from "react-router-dom";
import {MainMenu} from "../../molecules/main-menu/main-menu.molecule";
import "./header-bar.organism.css";

const Background = require("./img/line_color.png");
const Logotipo = require("./img/logotipo.png");
const Logocab = require("./img/logocab.png");

// TODO Change this for move the relative routes to syles.css of file
const styles = {
    backgroundImage: `url(${Background})`,
};

export const HeaderBar = () => {
    return (
        <header>
            <div className="main-nav" style={styles}>
                <NavLink title="Frontend Test | Ticketbis" className="navbar-logo" to="/">
                    <img src={Logotipo} alt="Frontend Test | Ticketbis"></img>
                    <img src={Logocab} alt="Frontend Test | Ticketbis"></img>
                </NavLink>
                <MainMenu>
                    <li>
                        <NavLink to="/help">Help</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">Account</NavLink>
                    </li>
                </MainMenu>
            </div>
        </header>
    );
};
