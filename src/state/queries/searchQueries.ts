import {IState} from "../store";
import {Category} from "../vm/category.vm";

export const getCategories = (state: IState) => (): Category[] => (state.search.searchResultFiltered);
export const getInputTextField = (state: IState) => (): string => (state.search.inputTextField);
export const isVisible = (state: IState) => (): boolean => (state.search.visible);
