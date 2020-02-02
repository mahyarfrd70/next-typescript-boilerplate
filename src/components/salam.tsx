import React from "react";
import { useDispatch } from "react-redux";
import { changeFoo } from "../redux/hello/action";

interface Props {
    ab: string;
    kie: string;
}

const Salam: React.SFC<Props> = ({ ab = "hiiii", kie }: Props): JSX.Element => {
    const salam = {
        d: "hedfsgllo",
        f: "ccvfg"
    };
    console.log(salam);
    const dispatch = useDispatch();
    const onClick = (): void => {
        dispatch(changeFoo("saladfhgdfgdfams"));
    };
    debugger;
    return <div onClick={onClick}>{ab + salam.d + kie}سلام</div>;
};

export default Salam;
