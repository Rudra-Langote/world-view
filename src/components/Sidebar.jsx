import React, { useEffect, useState } from 'react'
import { NavLink} from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
    const [Countrys, setCountrys] = useState([{ "flags": Map, "name": "WorldView" }]);
    const [serch, setserch] = useState('');
    useEffect(() => {
      async function getCountry() {
          const res = await axios.get('https://restcountries.com/v3.1/all')
          setCountrys(res.data);
      }
      getCountry()
  }, [])

  function handelScroll(customscroll){
    window.scroll({
        top: customscroll ,
        left:0,
        behavior:'smooth'
    })
  }
    return (
        
        <div>
            <form className=" flex mt-3 " role="search">
              <input onChange={(e)=> setserch(e.target.value.toLowerCase())} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> 
            </form>
            <nav  className="nav py-2   text-white  flex-column">
                {Countrys.filter((item)=>{
                    return serch.toLowerCase() ===''?item : item.name.common.toLowerCase().includes(serch)
                }).map((item,index)=>{return<NavLink key={index} onClick={()=>handelScroll(480)}  className=' text-white underline-remove  rounded' to={`/Country?name=${item.ccn3}`} ><div className=' btn-hov  py-2 px-2'>
                    <span>{item.name.common}</span>
                </div></NavLink>})}

            </nav>
        </div>
    )
}

export default Sidebar
