import React from "react";
import { NextPage } from "next";
import Salam from "../src/components/salam";
import { NextJSContext } from "next-redux-wrapper";
import { changeFoo } from "../src/redux/hello/action";
import { useSelector } from "react-redux";
import { RootState } from "customType";

interface Props {
    userAgent: string;
}

const Home: NextPage<Props> = (props: Props) => {
    console.log("mahyar");
    const counter: string = useSelector<RootState, string>(state => state.Hello.data);
    debugger;
    return <Salam kie={counter} ab={props.userAgent} />;
};

Home.getInitialProps = ({ store, req }: NextJSContext): Props => {
    store.dispatch<any>(changeFoo("ksdgfkjdshf"));
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
};

export default Home;
