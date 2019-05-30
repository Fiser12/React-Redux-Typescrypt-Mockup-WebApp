import * as React from "react";
import './main-menu.molecule.css'

export interface Props {
    children;
}

export const MainMenu = (props: Props) => {
    const {children} = props;

    return (
        <ul className={"main-menu"}>
            {children}
        </ul>
    );
};