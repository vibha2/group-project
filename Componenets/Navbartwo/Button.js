import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button()
{
return (
    <Link to='Get-A-Quote'>
        <button className='btnn'>Get A Quote</button>
    </Link>


);

}