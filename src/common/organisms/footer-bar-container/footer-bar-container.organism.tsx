import * as React from "react";
import {ReactNode} from "react";
import "./footer-bar-container.organism.scss";

export interface IProps {
    children: ReactNode;
}

export const FooterContainer = (props: IProps) => {
    const {children} = props;
    return (<div className="footer-bar__container">{children}</div>);
};
