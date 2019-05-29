import * as React from "react";
import {ReactNode} from "react";
import {HomeTemplate} from "../../pods/home";

export interface Props {
    children: ReactNode;
}

const LoginPageInner = (props: Props) => {

    return (
        <HomeTemplate>{props.children}</HomeTemplate>
    );
};

export const HomePage = LoginPageInner;
