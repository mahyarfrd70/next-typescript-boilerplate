import { combineReducers } from "redux";
import Hello from "./hello/reducer";
import { InitSateType } from "./hello/types";

export interface State {
    Hello: InitSateType;
}

export default combineReducers<State>({
    Hello
});
