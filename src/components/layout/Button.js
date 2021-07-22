import React from "react";
import { Button } from "react-bootstrap";

function ButtonGeneric(props) {
    return (
        <Button
            style={{
                color: "white",
                backgroundColor: "#A992C5",
                borderWidth: 0,
                minWidth: 170,
                minHeight: 40,
            }}
        >
            {props.text}
        </Button>
    );
}
export default ButtonGeneric;
