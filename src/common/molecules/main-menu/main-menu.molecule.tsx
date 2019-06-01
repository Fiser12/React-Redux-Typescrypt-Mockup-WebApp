import * as React from "react";
import {ReactNode} from "react";
import "./main-menu.molecule.scss";

export interface IProps {
    children: ReactNode;
}

export const MainMenu = (props: IProps) => {
    const {children} = props;

    return (
        <ul className={"main-menu"}>
            {children}
        </ul>
    );
};
