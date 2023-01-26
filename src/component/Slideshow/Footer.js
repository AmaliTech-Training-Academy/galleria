import React from 'react'
import "./Slideshow.css"
// import Slideshowdata from "../../data.json"

const Footer = ({slideFooter, fireMethod}) => {
    // const Slideshowdata= {
    //     authorName: Slideshowdata[counter].name,
    //     artistName: Slideshowdata[counter].artistName,
    // }
    
  return (
    <div className='footer'>
        
        <div className='footer-details' >
            <h2>{slideFooter.authorName}</h2>
            <p>{slideFooter.artistName}</p>
        </div>
        <div className='footer-nav'>
            <div className='back-nav' onClick={() => fireMethod(-1)}> 
                <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M.986.5h-1v22.775h1z"/></g></svg>
            </div>
            <div className='forward-nav' onClick={()=>fireMethod(1)}>
                <svg width="26" height="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z" stroke-width="2"/><path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z"/></g></svg>    
            </div>
        </div>
    </div>
  )
}

export default Footer