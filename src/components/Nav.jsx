import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import {  Route, Routes, NavLink, useLocation } from 'react-router-dom'
import Country from './Country'

const Nav = () => {
    const countryref = useRef();
    const Viewref = useRef();
    const location = useLocation();
    const [save, setseve] = useState()

    useEffect(() => {
        if (location.pathname === '/') {
            countryref.current.classList.add('active-back');
            Viewref.current.classList.remove('active-back');
        } else if (location.pathname === '/Country') {
            setseve(location)
            countryref.current.classList.remove('active-back');
            Viewref.current.classList.add('active-back');
            
        }
        
        
    }, [location]);

    return (
        <>
            <div className='   px-1 mt-md-0 mt-2  front container'>
                <ul className="nav gx-2 nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"  role="presentation">
                        <NavLink className='rounded' to={'/'}> <button ref={countryref} className=" btn-cust active-back " data-bs-toggle="tab" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button></NavLink>
                    </li>
                    <li className="nav-item"  role="presentation">
                        <NavLink className='rounded' to={save}><button ref={Viewref} className="btn-cust " data-bs-toggle="tab" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Display</button></NavLink>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane  fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">

                        <Routes>
                            <Route path='/' element={<Cards/>} />

                            <Route path='/Country' element={<Country />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
