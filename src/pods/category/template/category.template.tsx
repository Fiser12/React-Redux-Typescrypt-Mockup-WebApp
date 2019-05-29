import * as React from "react";
import './styles.css'
import {ReactNode} from "react";
import {SearchBox} from "../../../common/organisms";

export interface Props {
    children: ReactNode;
}

export const CategoryTemplate = (props: Props) => {
    return (
        <div className="page__body">
            <SearchBox/>
            {props.children}
        </div>
    );
};