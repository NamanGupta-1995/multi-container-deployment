import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            Random Page
            <Link to='/'>Go Back to home page</Link>
        </div>
    )
}