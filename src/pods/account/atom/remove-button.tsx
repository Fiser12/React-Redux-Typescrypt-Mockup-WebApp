import * as React from "react";
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    removeElement: (event) => void
}

export const RemoveButton = (props: Props) => {
    const {removeElement} = props;

    return (<>
            <a onClick={removeElement}>
                <i className="fa fa-trash"></i>
                <span>Remove</span>
            </a>
        </>
    );
};