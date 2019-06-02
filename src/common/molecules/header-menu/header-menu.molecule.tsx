import * as React from "react";
import {ReactNode} from "react";
import "./header-menu.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const HeaderMenu = (props: IProps) => {
    const {children} = props;

    return (
        <ul className={"header-bar__menu"}>
            {children}
        </ul>
    );
};
