import React from "react";
import { NextPage } from "next";
import Test from "@components/testComponent";
import { NextJSContext } from "next-redux-wrapper";
import { changeTest } from "@redux/test/action";
import { useSelector } from "react-redux";
import { RootState } from "types";

interface Props {
    userAgent: string;
}

const Home: NextPage<Props> = ({ userAgent }: Props) => {
    const counter: string = useSelector<RootState, string>(state => state.Test.data);
    return <Test test2={counter} test={userAgent} />;
};

Home.getInitialProps = ({ store, req }: NextJSContext): Props => {
    store.dispatch<any>(changeTest("init text"));
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
};

export default Home;
