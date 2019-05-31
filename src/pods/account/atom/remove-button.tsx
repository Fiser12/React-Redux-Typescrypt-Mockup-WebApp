import * as React from "react";

export interface IProps {
    removeElement: (event) => void;
}

export const RemoveButton = (props: IProps) => {
    const {removeElement} = props;

    return (<>
            <a onClick={removeElement}>
                <i className="fa fa-trash"></i>
                <span>Remove</span>
            </a>
        </>
    );
};
