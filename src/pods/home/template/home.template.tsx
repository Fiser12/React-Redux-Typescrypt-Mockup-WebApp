import * as React from "react";
import {ReactNode} from "react";
import {SearchBox} from "../../../common/organisms";
import "./home.template.css";

// Typescript buged with files and imports
const Background = require("./img/bigbox.jpg");

export interface IProps {
    children: ReactNode;
}

// TODO Change this for move the relative routes to syles.css of file
const styles = {
    backgroundImage: `url(${Background})`,
};

export const HomeTemplate = (props: IProps) => {
    return (
        <div className="home-box" style={styles}>
            <div className="container">
                <SearchBox/>
                {props.children}
            </div>
        </div>
    );
};
