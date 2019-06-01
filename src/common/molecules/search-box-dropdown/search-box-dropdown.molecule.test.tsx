import {shallow} from "enzyme";
import * as React from "react";
import sinon from "sinon";
import {categoryMocked} from "../../../state/tests/mocks.vm";
import {SearchBoxDropdownResults} from "./search-box-dropdown.molecule";

describe("search-box.organism.tsx", () => {

    it("On visible and with category list show in dropdown list the categories", () => {
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [
                categoryMocked(1),
                categoryMocked(2),
                categoryMocked(3),
            ],
            onClickChangePage,
            visible: true,
        };

        const wrap = shallow(
            <SearchBoxDropdownResults
                categories={props.categories}
                onClickChangePage={props.onClickChangePage}
                visible={props.visible}
            />,
        );

        expect(wrap.find("li").at(1).key()).toEqual("1");

    });

    it("On not visible and with category list never show list", () => {
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [
                categoryMocked(1),
                categoryMocked(2),
                categoryMocked(3),
            ],
            onClickChangePage,
            visible: false,
        };

        const wrap = shallow(
            <SearchBoxDropdownResults
                categories={props.categories}
                onClickChangePage={props.onClickChangePage}
                visible={props.visible}
            />,
        );

        expect(wrap.find("ul").children().length).toBe(0);
    });

    it("On visible list of categories and click on one launch an event", () => {
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [
                categoryMocked(1),
                categoryMocked(2),
                categoryMocked(3),
            ],
            onClickChangePage: (id: number) => onClickChangePage,
            visible: true,
        };

        const event = {
            target: {value: "2"},
        };

        const wrap = shallow(
            <SearchBoxDropdownResults
                categories={props.categories}
                onClickChangePage={props.onClickChangePage}
                visible={props.visible}
            />,
        );

        wrap.find("li").at(0).simulate("click");
        expect(onClickChangePage.calledOnce).toEqual(true);
    });
});
