import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function OtherComponent(props) {
    // const { state } = props.location;
    // const { name, age } = state;
    let { state } = useLocation();
    console.log(state);
    return (
        <div>
            <div className="content-wrapper">
                <h1>Hello from the Other Component</h1>
            </div>

        </div>
    )
}

export default OtherComponent
