import * as React from "react";
import './footer-list.molecule.css'

export interface Props {
    children;
}

export const FooterList = (props: Props) => {
    const {children} = props;

    return (
        <div className="footer-list">
                {children}
        </div>
    );
};