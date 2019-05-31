import * as React from "react";

export interface IProps {
    venueName: string;
    city: string;
    country: string;
}

export const Location = (props: IProps) => {
    const {venueName, country, city} = props;

    return (<span className="location">{venueName + ", " + city + ", " + country}</span>);
};
