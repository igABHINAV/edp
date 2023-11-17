import React from 'react'
import './Sidebar.css'
import Items from '../Items'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='container text-center' style={{ paddingTop: "56px" }}>


                <Items/>
               

                
            </div>
        </div>
    )
}

export default Sidebar
