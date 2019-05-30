import * as React from "react";
import './footer-block.molecule.css'

export interface Props {
    children;
}

export const FooterBlock = (props: Props) => {
    const {children,} = props;
    return (<div className="footer-block">{children}</div>);
};