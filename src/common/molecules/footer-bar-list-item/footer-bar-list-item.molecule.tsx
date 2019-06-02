import * as React from "react";
import {ReactNode} from "react";
import "./footer-bar-list-item.molecule.scss";

export interface IProps {
    children: ReactNode;
    separated: boolean;
}

export const LinksList = (props: IProps) => {
    const {children, separated} = props;
    const className = "footer-bar-list-item " + (separated ? "separated" : "");

    return (
        <ul className={className}>
            {children}
        </ul>
    );
};
