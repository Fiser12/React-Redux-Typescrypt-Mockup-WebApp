import {apiSuccess} from "../../actions/apiActions";
import {CategoryActionType} from "../../actions/categoryActions";
import {categoryReducer, initialState} from "../../reducers/categoryReducer";
import {eventMocked} from "../mocks.vm";

describe("categoryReducer", () => {
    it("API_SUCCESS CATEGORY_GET_EVENTS", () => {
        const action = apiSuccess({
            data: [
                {
                    categoryId: 1,
                    city: "city",
                    country: "country",
                    date: new Date("2019-06-01T17:18:27.089Z"),
                    description: "description1",
                    id: 1,
                    imageUrl: "imageUrl",
                    thumbnailImageUrl: "thumbnailImageUrl",
                    title: "title1",
                    venueName: "venueName",
                },
            ],
        }, CategoryActionType.CATEGORY_GET_EVENTS);
        const state = categoryReducer(
            initialState,
            action,
        );
        expect(initialState.events).toEqual([]);
        expect(state.events).toEqual([eventMocked(1)]);
    });
});

