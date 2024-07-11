import React, { useEffect, useRef, useState } from 'react'
import Map from '../../public/Map.jpg'
import axios from 'axios';

const Display = () => {
    const [Countrys, setCountrys] = useState([{ "flags": Map, "name": "WorldView" }]);
    const [index, setIndex] = useState(0)
    const namref = useRef()
    const flagref = useRef()
    const descref = useRef()
    useEffect(() => {
        async function getCountry() {
            const res = await axios.get('https://restcountries.com/v3.1/all')
            setCountrys(res.data);
        }
        getCountry()
    }, [])

    useEffect(() => {

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Countrys.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [Countrys.length])

    useEffect(() => {

        namref.current.classList.remove('text-enter')
        flagref.current.classList.remove('flag-enter')
        descref.current.classList.remove('desc-enter')
        void namref.current.offsetWidth;
        namref.current.classList.add('text-enter')
        flagref.current.classList.add('flag-enter')
        descref.current.classList.add('desc-enter')

    }, [index])






    return (
        <div  className=' display-size mt-4 p-0  overflow-hidden   position-relative rounded front container'>

            <div  className=' z-2 position-absolute rounded  display-size gradient'></div>
            <img ref={flagref} style={{height:'500px'}} src={Countrys[index].flags.png}  className=' object-fit-fill display-size img-fluid mx-auto rounded  ' alt="" />

            <span ref={namref} className=' z-3  position-absolute display-position-head '>{Countrys[index].name.common}</span>
            <div ref={descref} style={{height: '20vh', width: '82vw' }} className='position-absolute px-3 d-none d-md-flex bg-trans  justify-content-between  z-3 display-position-desc'>
                <div>
                    <div className=' border-bottom'>Reagion & Subreagion</div>
                    <div className=' '>{Countrys[index].region}</div>
                    <div className='  '>{Countrys[index].subregion}</div>
                </div>
                <div>
                    <div className=' border-bottom'>Latlng & Timezones</div>
                    <div className=' '>{Countrys[index].latlng}</div>
                    <div className='  '>{Countrys[index].timezones}</div>
                </div>
                <div>
                    <div className=' border-bottom'>Continents & Capotals</div>
                    <div className=' '>{Countrys[index].continents}</div>
                    <div className='  '>{Countrys[index].capital}</div>
                </div>

            </div>
            




        </div>
    )
}

export default Display
