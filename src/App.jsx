import Header from './components/Header'
import './App.css'
import Sidebar from './components/Sidebar'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import Nav from './components/Nav'
import Footer from './components/Footer'







function App() {



  return (
    <>

      <div className='row  fixed-top front p-0 m-0'>
        <Header/>
      </div>
      
      <div className='row g-1 p-0 m-0 '>
        <div className=' col-0 col-md-2 overflow-auto d-none d-md-block  maindiv sticky-bottom stick front '>
          <Sidebar/>
        </div>
        <div className=' col-12 col-md-10 pading-top  '>
          <Display/>
          <Nav/>
        </div>
      </div>
      <div className='row front p-0 m-0'>
        <Footer/>
      </div>
      

    </>
  )
}

export default App
