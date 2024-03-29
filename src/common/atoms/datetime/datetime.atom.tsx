import * as React from "react";
import "./datetime.atom.scss";

export interface IProps {
    date: Date;
    showIcon: boolean;
}

export const Datetime = (props: IProps) => {
    const {date, showIcon} = props;

    return (
        <time className="datetime" dateTime={date.toDateString()}>
            {showIcon ? <i className="fa fa-calendar"></i> : ""}
            {date.toDateString()}
        </time>
    );
};
