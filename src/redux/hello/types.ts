import { FOO, GET } from "../actionTypes";

//actions
export interface SetFoo {
    type: typeof FOO;
    data: string;
}
export interface GetFoo {
    type: typeof GET;
}

export type Action = SetFoo | GetFoo;

//reducer
export interface InitSateType {
    data: string;
}
