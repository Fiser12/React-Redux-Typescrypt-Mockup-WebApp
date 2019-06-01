import {shallow} from "enzyme";
import * as React from "react";
import sinon from "sinon";
import { Category} from "../../../state/vm/category.vm";
import {SearchBoxDropdownResults} from "./search-box-dropdown.molecule";

describe("search-box.organism.tsx", () => {

    it("On visible and with category list show in dropdown list the categories", () => {
        const onClickChangePage = sinon.spy();

        const props = {
            categories: [
                new Category("1", "Category1", "Description1"),
                new Category("2", "Category2", "Description2"),
                new Category("3", "Category3", "Description3"),
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
                new Category("1", "Category1", "Description1"),
                new Category("2", "Category2", "Description2"),
                new Category("3", "Category3", "Description3"),
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
                new Category("1", "Category1", "Description1"),
                new Category("2", "Category2", "Description2"),
                new Category("3", "Category3", "Description3"),
            ],
            onClickChangePage: (id: string) => onClickChangePage,
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
