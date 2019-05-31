import * as React from "react";
import './buy-button.css'

export interface Props {
}

export const BuyButton = (props: Props) => {

    return (
        <a href="#" className="button__ticket-buy">
            <span>Buy</span>
        </a>
    );
};