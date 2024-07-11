import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Country = () => {
  const [Countrys, setCountrys] = useState([{ "flags": Map, "name": "WorldView", "maps": { "openStreetMaps": "https://www.openstreetmap.org/relation/1993867" } }]);
  const [showMap, setshowMap] = useState(false)
  const [position, setposition] = useState()
  const queryParams = new URLSearchParams(window.location.search)
  const name = queryParams.get("name")
  useEffect(() => {
    async function getCountry() {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
      const data = await res.json();
      setCountrys(data)
      setposition(data[0].latlng);
      setshowMap(true)
    }
    getCountry()
  }, [name, position, showMap])





  return (
    <>
      <div>
        <div className='py-2' >
          {showMap && <MapContainer className='container rounded ' center={position} zoom={4} style={{ height: '50vh', width: '90%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                {Countrys[0].name.common}
              </Popup>
            </Marker>
          </MapContainer>}
          <div className=' col-12 my-2   px-2  border-bottom m-0 border-top'>
            <span className=' row my-2 px-2 text-head'>{Countrys[0].name.common}</span>
            <span><img style={{ height: '100px' }} className=' my-2 ' src={Countrys[0].flags.png} alt=".." /></span>
            <div className='text-white  my-2 row row-cols-md-3'>
              <div>
                <div className='text-desc-head'>Reagion & Subreagion</div>
                <div className=' '>{Countrys[0].region}</div>
                <div className='  '>{Countrys[0].subregion}</div>
              </div>
              <div>
                <div className='text-desc-head '>Latlng & Timezones</div>
                <div className=' '>{Countrys[0].latlng}</div>
                <div className='  '>{Countrys[0].timezones}</div>
              </div>
              <div>
                <div className='text-desc-head '>Continents & Capotals</div>
                <div className=' '>{Countrys[0].continents}</div>
                <div className='  '>{Countrys[0].capital}</div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </>
  )
}

export default Country
