import * as React from "react";
import {ReactNode} from "react";
import "./footer-bar-label.atom.scss";

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
    const className = "footer-bar__label footer-bar__label--" + position;
    return (<div className={className}>{children}</div>);
};
