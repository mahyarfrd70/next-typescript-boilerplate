import React from "react";
import Hello from "../pages/index";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("test next hello word", () => {
    const state = {
        Test: {
            data: "alaki"
        }
    };
    let wrapper, store;
    beforeEach(() => {
        store = mockStore(state);
        wrapper = mount(
            <Provider store={store}>
                <Hello userAgent="dasdk" />
            </Provider>
        );
    });
    it("test mount", () => {
        console.log(wrapper.debug());
        expect(wrapper.find("Test")).toBeDefined();
        console.log(store.getState(), store.getActions());
        wrapper
            .find("div")
            .props()
            .onClick();
        console.log(store.getState(), store.getActions(), wrapper.debug());
    });
});
