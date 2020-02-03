import { TEST } from "../actionTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "./types";

export type Actions = ThunkAction<void, {}, {}, Action>;
type Dispatch = ThunkDispatch<{}, {}, Action>;

export const changeTest = (test: string): Actions => {
    return (dispatch: Dispatch): void => {
        dispatch({ type: TEST, data: test });
    };
};
