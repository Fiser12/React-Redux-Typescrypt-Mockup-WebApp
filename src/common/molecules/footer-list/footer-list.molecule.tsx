import * as React from "react";
import {ReactNode} from "react";
import "./footer-list.molecule.css";

export interface IProps {
    children: ReactNode;
}

export const FooterList = (props: IProps) => {
    const {children} = props;

    return (
        <div className="footer-list">
            {children}
        </div>
    );
};
