import {shallow} from "enzyme";
import * as React from "react";
import sinon from "sinon";
import {Category} from "../../../state/vm/category.vm";
import {SearchBox} from "./search-box.organism";

describe("search-box.organism.tsx", () => {

    it("On change input event found", () => {
        const onChangeInputText = sinon.spy();
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [],
            inputTextField: "1",
            onChangeInputText,
            onClickChangePage,
            visible: false,
        };

        const event = {
            target: {value: "Input Text"},
        };

        const wrap = shallow(
            <SearchBox
                categories={props.categories}
                inputTextField={props.inputTextField}
                onChangeInputText={props.onChangeInputText}
                onClickChangePage={props.onClickChangePage}
                visible={props.visible}
            />,
        );

        wrap.find("input").simulate("change", event);
        expect(onChangeInputText.calledOnce).toEqual(true);
    });
});
