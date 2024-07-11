
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const Cards = () => {
  const [Countrys, setCountrys] = useState([{ "flags": Map, "name": "WorldView" }]);
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
    <>
      <div  className=' mb-1 py-2  rounded front container'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Countrys.map((item,index)=>{return<NavLink key={index} onClick={()=>handelScroll(500)} className=' text-white underline-remove  rounded'
                 to={`/Country?name=${item.ccn3}`} ><div className="col">
            <div className="card">
              <img src={item.flags.png} style={{height:'30vh'}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title ">{item.name.common}</h5>
              </div>
            </div>
          </div></NavLink>})}
        </div>
      </div >
    </>
  )
}

export default Cards