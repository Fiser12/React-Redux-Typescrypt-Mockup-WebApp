import * as React from "react";
import './styles.css'
import {SearchBox} from "../../../common/organisms";

export interface Props {
}

export const CategoryTemplate = (props: Props) => {
    return (
        <div className="page__body">
            <SearchBox/>
        </div>
    );
};