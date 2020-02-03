import { combineReducers } from "redux";
import Test from "@redux/test/reducer";
import { InitSateTest } from "@redux/test/types";

export interface State {
    Test: InitSateTest;
}

export default combineReducers<State>({
    Test
});
