import * as React from "react";
import './footer-label.atom.css'

export enum Position {
    LEFT = "pull-left",
    RIGHT = "pull-right"
};

export interface Props {
    children;
    position?: Position
}

export const FooterLabel = (props: Props) => {
    const {children, position} = props;
    const className = 'footer-label ' + position;
    return (<div className={className}>{children}</div>);
};