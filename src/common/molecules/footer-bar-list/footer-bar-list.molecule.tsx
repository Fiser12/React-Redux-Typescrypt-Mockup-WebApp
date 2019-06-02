import * as React from "react";
import {ReactNode} from "react";
import "./footer-bar-list.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const FooterList = (props: IProps) => {
    const {children} = props;

    return (
        <div className="footer-bar__list">
            {children}
        </div>
    );
};
