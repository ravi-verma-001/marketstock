import './App.css'
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons'
import Table from './Table'

import img from './image/logo.jpg'
function Frontpage({ selected, setSelected }) {
    const [isActive, setIsActive] = useState(false);
    const [show , setShow] = useState(false)

    function showtable() {
        if(show === true){
        setShow(false)
    }else {
        setShow(true)
    }}
   
    return (

        <>
        <div className='header' >
            <img src= {img} alt='logo'></img>
            <p className='heading'>Welcome to  Stockr!</p>
            <div className="dropdown">
                <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                    Choose Stocks <span ><FontAwesomeIcon icon= {faArrowDownZA} /></span>
                    </div>
            <button className='button' onClick={()=>showtable()} >SUBMIT</button>
                {isActive && (
                    <div className="dropdown-content">
                       
                            <div  className="dropdown-item"> <Link to = "/stockone" style={{textDecoration : 'none',color: "white"}}>stock1</Link> 
                    </div>
                            <div  className="dropdown-item"><Link to = "/stocktwo" style={{textDecoration : 'none',color: "white"}}>stock2</Link></div>
                            <div  className="dropdown-item"><Link to = "/stockthree" style={{textDecoration : 'none',color: "white"}}>stock3</Link></div>
                            <div  className="dropdown-item"><Link to = "/stockfour" style={{textDecoration : 'none',color: "white"}}>stock4</Link></div>
                    </div>
                )}
                <Outlet/>
            </div>
            </div>

            {
                        show &&(<Table/>) 
                       

            }
        </>
    );
}
export default Frontpage;