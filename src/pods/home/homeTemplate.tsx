import * as React from "react";
import {withRouter, RouteComponentProps} from "react-router-dom";
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export interface Props extends RouteComponentProps {

}

const LoginTemplateInner = (props: Props) => {
    return (
        <div>
        </div>
    );
};

export const HomeTemplate = connect(mapDispatchToProps)(withRouter<Props>(LoginTemplateInner));
