import * as React from "react";
import './links-list.molecule.css'

export interface Props {
    children;
    separated: boolean
}

export const LinksList = (props: Props) => {
    const {children, separated} = props;
    const className = 'links-list ' + (separated ? 'separated' : '');

    return (
        <ul className={className}>
            {children}
        </ul>
    );
};