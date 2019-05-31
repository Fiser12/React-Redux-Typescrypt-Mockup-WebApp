import * as React from "react";
import {ReactNode} from "react";
import "./footer-label.atom.css";

export enum Position {
    LEFT = "pull-left",
    RIGHT = "pull-right",
}

export interface IProps {
    children: ReactNode;
    position?: Position;
}

export const FooterLabel = (props: IProps) => {
    const {children, position} = props;
    const className = "footer-label " + position;
    return (<div className={className}>{children}</div>);
};
