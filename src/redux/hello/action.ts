import { GET } from "../actionTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "./types";

export type Actions = ThunkAction<void, {}, {}, Action>;
type Dispatch = ThunkDispatch<{}, {}, Action>;

export const changeFoo = (foo: string): Actions => {
    return (dispatch: Dispatch): void => {
        dispatch({ type: GET, data: foo });
    };
};
