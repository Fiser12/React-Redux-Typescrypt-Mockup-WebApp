import {mount} from "enzyme";
import * as React from "react";
import sinon from "sinon";
import {Category} from "../../../state/vm/category.vm";
import {SearchBox} from "./search-box.organism";

describe("search-box.organism.tsx", () => {

    it("On change input event found", () => {
        const onChangeInputText = sinon.spy();
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [
                new Category("1", "Title1", "Desc1"),
                new Category("2", "Title2", "Desc2"),
                new Category("3", "Title3", "Desc3"),
            ],
            inputTextField: "1",
            onChangeInputText,
            onClickChangePage,
            visible: true,
        };

        const event = {
            target: {value: "Input Text"},
        };

        const wrap = mount(
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
