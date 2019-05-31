import * as React from "react";
import './home.template.css'
import {ReactNode} from "react";
import {SearchBox} from "../../../common/organisms";

const Background = require("./img/bigbox.jpg");

export interface Props {
    children: ReactNode;
}

const styles = {
    backgroundImage: `url(${Background})`
};

export const HomeTemplate = (props: Props) => {
    return (
        <div className="home-box" style={styles}>
            <div className="container">
                <SearchBox/>
                {props.children}
            </div>
        </div>
    );
};

//TODO Change this for move the relative routes to syles.css of file