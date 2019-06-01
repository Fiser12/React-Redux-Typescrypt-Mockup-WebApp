import * as React from "react";
import {ReactNode} from "react";
import "./footer-block.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const FooterBlock = (props: IProps) => {
    const {children} = props;
    return (<div className="footer-block">{children}</div>);
};
