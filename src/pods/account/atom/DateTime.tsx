import * as React from "react";
import './Datetime.css'

export interface Props {
    date: Date,
}

export const DateTime = (props: Props) => {
    const {date} = props;

    return (
        <time className="datetime" dateTime={date.toDateString()}>
            {date.toDateString()}
        </time>
    );
};