import * as React from "react";
import {Ticket} from "../../../state/vm/ticket.vm";
import {Event} from "../../../state/vm/event.vm";

export interface Props {
    status: boolean;
    toggleState: (event) => void
}

export const ActivateButton = (props: Props) => {
    const {status, toggleState} = props;

    return (<>
            {status ?
                <a onClick={toggleState}>
                    <i className="fa fa-eye"></i>
                    <span>Activate</span>
                </a> :
                <a onClick={toggleState}>
                    <i className="fa fa-eye-slash"></i>
                    <span>Deactivate</span>
                </a>
            }
        </>
    );
};