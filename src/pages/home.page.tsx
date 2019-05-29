import * as React from "react";
import {ReactChild, ReactFragment, ReactPortal} from "react";
import {HomeTemplate} from "../pods/home";

type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export interface Props {
    children : ReactNode;
}

const LoginPageInner = (props: Props) => {

    return (
        <div>
            <main>
                <HomeTemplate />
            </main>
        </div>
    );
};

export const HomePage = LoginPageInner;
