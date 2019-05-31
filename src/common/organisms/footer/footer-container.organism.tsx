import * as React from "react";
import './footer-container.organism.css'

export interface Props {
    children;
}

export const FooterContainer = (props: Props) => {
    const {children,} = props;
    return (<div className="footer-container">{children}</div>);
};