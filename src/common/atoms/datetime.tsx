import * as React from "react";
import './datetime.css'

export interface Props {
    date: Date,
    showIcon: boolean
}

export const Datetime = (props: Props) => {
    const {date, showIcon} = props;

    return (
        <time className="datetime" dateTime={date.toDateString()}>
            {showIcon ? <i className="fa fa-calendar"></i> : ""}
            {date.toDateString()}
        </time>
    );
};