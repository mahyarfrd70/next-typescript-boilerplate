import React from "react";
import { useDispatch } from "react-redux";
import { changeTest } from "@redux/test/action";

interface Props {
    test: string;
    test2: string;
}

const Test: React.SFC<Props> = ({ test = "chrome", test2 }: Props): JSX.Element => {
    const dispatch = useDispatch();
    const onClick = (): void => {
        dispatch(changeTest("hello redux"));
    };

    return (
        <React.Fragment>
            <h2>{test2}</h2>
            <h5>{test}</h5>
            <div onClick={onClick}>Click on me for change redux state</div>
        </React.Fragment>
    );
};

export default Test;
