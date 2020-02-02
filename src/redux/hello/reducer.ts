import { FOO } from "../actionTypes";
import { InitSateType, Action } from "./types";

const initState: InitSateType = {
    data: ""
};

export default function(state = initState, action: Action): InitSateType {
    switch (action.type) {
        case FOO:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
