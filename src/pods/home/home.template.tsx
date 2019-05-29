import * as React from "react";
import './styles.css'
import {ReactNode} from "react";
const Background = require("./img/bigbox.jpg");

export interface Props {
    children: ReactNode;
}

const styles = {
    backgroundImage: `url(${Background})`
};

const LoginTemplateInner = (props: Props) => {
    return (
        <div className="home-box" style={ styles }>
            {props.children}
        </div>
    );
};

//TODO Change this for move the relative routes to syles.css of file

export const HomeTemplate = LoginTemplateInner;
