import React from 'react'
import { Link } from 'react-router-dom';

function Users(props) {
    const dataToPass = { name: 'John Doe', age: 25 };
    return (
        <div>
            <div className="content-wrapper">
                <h1>Welcome to the Home Component</h1>
                <Link to='/admin/other' state={{ some: "value" }} >Go to Other Component</Link>
            </div>
        </div>
    )
}

export default Users
