import { TEST, GET } from "@redux/actionTypes";

//actions
export interface SetFoo {
    type: typeof TEST;
    data: string;
}
export interface GetFoo {
    type: typeof GET;
}

export type Action = SetFoo | GetFoo;

//reducer
export interface InitSateTest {
    data: string;
}
