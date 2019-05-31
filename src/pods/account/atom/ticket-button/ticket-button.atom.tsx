import * as React from "react";
import {ReactNode} from "react";

export interface IProps {
    children: ReactNode;
    className: string;
    onClick: (event) => void;
}

export const TicketButton = (props: IProps) => {
    const {onClick, className, children} = props;

    return (<>
            <a onClick={onClick}>
                <i className={className}></i>
                <span>{children}</span>
            </a>
        </>
    );
};
