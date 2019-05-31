import {Category} from "../vm/category.vm";

export const getCategories = (state) => (): Category[] => (state.search.searchResultFiltered);
export const getInputTextField = (state) => (): string => (state.search.inputTextField);
export const isVisible = (state) => (): boolean => (state.search.visible);
