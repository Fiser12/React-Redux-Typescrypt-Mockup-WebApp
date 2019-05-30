import * as React from "react";
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    duplicateElement: (event) => void
}

export const DuplicateButton = (props: Props) => {
    const {duplicateElement} = props;

    return (<>
            <a onClick={duplicateElement}>
                <i className="fa fa-files-o"></i>
                <span>Duplicate</span>
            </a>
        </>
    );
};