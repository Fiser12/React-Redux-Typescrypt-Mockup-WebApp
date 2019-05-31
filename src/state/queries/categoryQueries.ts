import {Event} from "../vm/event.vm";

export const getEvents = (state) => (): Event => (state.category.events);
