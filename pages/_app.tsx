import React from "react";
import App, { AppInitialProps } from "next/app";
import { Provider } from "react-redux";
import withRedux, { AppProps, NextJSAppContext } from "next-redux-wrapper";
import { makeStore } from "../src/redux/store";
import Head from "next/head";
import Css from "../static/styles/style.scss";

class MyApp extends App<AppProps> {
    static async getInitialProps({ Component, ctx }: NextJSAppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
    render(): JSX.Element {
        const { Component, pageProps, store } = this.props;
        return (
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" href={Css} />
                </Head>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </div>
        );
    }
}

export default withRedux(makeStore)(MyApp);
