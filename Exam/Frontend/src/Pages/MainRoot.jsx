import React from 'react'
import Navbarr from '../Components/Navbarr'
import { Outlet } from 'react-router'
import Footerr from '../Components/Footerr'

function MainRoot() {
    return (
        <>
            <Navbarr></Navbarr>
            <Outlet />
            <Footerr></Footerr>
        </>
    )
}

export default MainRoot
