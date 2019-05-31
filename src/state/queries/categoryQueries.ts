import {IState} from "../store";
import {Event} from "../vm/event.vm";

export const getEvents = (state: IState) => (): Event[] => (state.category.events);
