import * as React from "react";
import {ReactNode} from "react";
import "./card-button.atom.scss";

interface IProps {
    children: ReactNode;
    className: string;
}

export const CardButton = (props: IProps) => {
    const {children, className} = props;

    return (
        <a href="#" className={className}>
            <span>{children}</span>
        </a>
    );
};
