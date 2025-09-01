import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function MainLayout() {
    return (
        <div>
            <h1 className='text-4xl'>Hello World</h1>
            <nav>
                <NavLink to="/home" className="m-2 p-2 bg-blue-500 text-white rounded">Home</NavLink>
                <NavLink to="/about" className="m-2 p-2 bg-green-500 text-white rounded">About</NavLink>
                <NavLink to="/notexist" className="m-2 p-2 bg-red-500 text-white rounded">NotExist</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}

export default MainLayout