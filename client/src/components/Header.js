import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
       <div className='ui secondary pointing menu'>
            <Link to='/'>STREAM APP</Link>
            <div className='right menu'>
                <Link to='/'>All Streams</Link>
            </div>
        </div>
    );
}

export default Header;