import * as React from "react";
import {HeaderBar} from "../common/organisms";
import {ReactChild, ReactFragment, ReactPortal} from "react";
import {HomeTemplate} from "../pods/home";

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export interface Props {
    children : ReactNode;
}

const LoginPageInner = (props: Props) => {

    return (
        <div>
            <HeaderBar/>
            <main>
                <HomeTemplate />
            </main>

        </div>
    );
};

export const HomePage = LoginPageInner;
