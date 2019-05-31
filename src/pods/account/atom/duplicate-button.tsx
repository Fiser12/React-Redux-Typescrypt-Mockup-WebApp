import * as React from "react";

export interface IProps {
    duplicateElement: (event) => void;
}

export const DuplicateButton = (props: IProps) => {
    const {duplicateElement} = props;

    return (<>
            <a onClick={duplicateElement}>
                <i className="fa fa-files-o"></i>
                <span>Duplicate</span>
            </a>
        </>
    );
};
