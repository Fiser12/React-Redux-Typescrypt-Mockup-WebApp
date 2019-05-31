import * as React from "react";
import {ReactNode} from "react";
import "./links-list.molecule.css";

export interface IProps {
    children: ReactNode;
    separated: boolean;
}

export const LinksList = (props: IProps) => {
    const {children, separated} = props;
    const className = "links-list " + (separated ? "separated" : "");

    return (
        <ul className={className}>
            {children}
        </ul>
    );
};
