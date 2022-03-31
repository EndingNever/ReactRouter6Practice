import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Number2() {
    return (
        <div style={{backgroundColor: "red"}}>
            This is an apple <Link to='/'>
                Home Route
            </Link>
            <Link to="/number2/number3"> numba 3 </Link>
            <Outlet/>
        </div>
    )
}