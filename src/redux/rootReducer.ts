import { combineReducers } from "redux";
import Test from "./test/reducer";
import { InitSateTest } from "./test/types";

export interface State {
    Test: InitSateTest;
}

export default combineReducers<State>({
    Test
});
