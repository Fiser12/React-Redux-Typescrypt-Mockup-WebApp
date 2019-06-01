import * as React from "react";
import {ReactNode} from "react";
import "./footer-container.organism.scss";

export interface IProps {
    children: ReactNode;
}

export const FooterContainer = (props: IProps) => {
    const {children} = props;
    return (<div className="footer-container">{children}</div>);
};
