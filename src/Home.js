import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!!</h1>
                <h3>!!!!!!!!</h3>
                <Car />
            </div>
        )
    }
}

function Car() {
    return <h1>Home Work</h1>;
}
