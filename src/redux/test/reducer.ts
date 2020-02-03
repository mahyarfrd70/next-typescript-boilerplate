import { TEST } from "../actionTypes";
import { InitSateTest, Action } from "./types";

const initState: InitSateTest = {
    data: ""
};

export default function(state = initState, action: Action): InitSateTest {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
