import React from "react";
import App, { AppInitialProps } from "next/app";
import { Provider } from "react-redux";
import withRedux, { AppProps, NextJSAppContext } from "next-redux-wrapper";
import { makeStore } from "@redux/store";
import "@common/css/style.scss";

class MyApp extends App<AppProps> {
    static async getInitialProps({ Component, ctx }: NextJSAppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
    render(): JSX.Element {
        const { Component, pageProps, store } = this.props;
        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(MyApp);
