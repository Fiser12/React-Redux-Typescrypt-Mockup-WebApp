import {push} from "connected-react-router";
import * as React from "react";
import {ReactNode} from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {SearchBox} from "../../../common/organisms/search-box/search-box.organism";
import {routesLinks} from "../../../core";
import {IState} from "../../../state";
import {searchBarChangeInputText, searchBarDropdownClose} from "../../../state/actions/searchActions";
import {getCategories, getInputTextField, isVisible} from "../../../state/queries/searchQueries";
import {Category} from "../../../state/vm/category.vm";
import "./home.template.css";

// Typescript buged with files and imports
// tslint:disable-next-line:no-var-requires
const Background = require("./img/bigbox.jpg");

export interface IProps {
    categories: Category[];
    children: ReactNode;
    inputTextField: string;
    onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickChangePage: (id: string) => (event) => void;
    visible: boolean;

}

// TODO Change this for move the relative routes to syles.css of file
const styles = {
    backgroundImage: `url(${Background})`,
};

function mapStateToProps(state: IState) {
    return {
        categories: getCategories(state)(),
        inputTextField: getInputTextField(state)(),
        visible: isVisible(state)(),
    };
}

function mapDispatchToProps(dispatch: Dispatch) {
    return {
        onChangeInputText: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(
            searchBarChangeInputText(e.target.value),
        ),
        onClickChangePage: (id: string) => (event) => {
            dispatch(searchBarDropdownClose());
            dispatch(push(routesLinks.category(id)));
        },
    };
}

const HomeTemplateInner = (props: IProps) => {
    const {categories, children, inputTextField, visible, onChangeInputText, onClickChangePage} = props;
    return (
        <div className="home-box" style={styles}>
            <div className="container">
                <SearchBox
                    categories={categories}
                    inputTextField={inputTextField}
                    onChangeInputText={onChangeInputText}
                    visible={visible}
                    onClickChangePage={onClickChangePage}
                />
                {children}
            </div>
        </div>
    );
};

export const HomeTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeTemplateInner);
