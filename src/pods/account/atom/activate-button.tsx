import * as React from "react";

export interface IProps {
    status: boolean;
    toggleState: (event) => void;
}

export const ActivateButton = (props: IProps) => {
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
