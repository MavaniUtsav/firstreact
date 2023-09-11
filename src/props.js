import React from "react";

export default function Profile(props) {
    return(
        <div>
            <h1>{props.text}</h1>
            <h1>{props.profile}</h1>
        </div>
    )
}