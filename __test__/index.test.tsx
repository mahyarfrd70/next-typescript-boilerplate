import React from "react";
import Hello from "../pages/index";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import Salam from "../src/components/salam";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("test next hello word", () => {
    const state = {
        Hello: {
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
        expect(wrapper.find("Salam")).toBeDefined();
        console.log(store.getState(), store.getActions());
    });
});
