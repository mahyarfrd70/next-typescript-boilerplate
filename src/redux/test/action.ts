import { TEST } from "@redux/actionTypes";
import { ThunkAction } from "redux-thunk";
import { Action } from "@redux/test/types";

export type Actions = ThunkAction<void, {}, {}, Action>;

export const changeTest = (test: string): Actions => {
    return dispatch => {
        dispatch({ type: TEST, data: test });
    };
};
