import React from 'react'
import {Link} from 'react-router-dom' 
import './slideshow.css'
import Slideshowdata from "../data.json"



const Slideshowsection = () => {
  return (
    <div className="slideshow-section">
            {Slideshowdata.map((slideshowDetails, index) => {
                return (<>
                            <div className='gallery-details'>
                                <div className='gallery-image'>
                                    <img>{}</img>
                                </div>
                                <div className='gallery-name'>
                                    <h1>{slideshowDetails.name}</h1>
                                    <p></p>
                                </div>
                                <div className='gallery-artist'>

                                </div>
                            </div>
                            <div className='artist-message'>
                                <div className='artist-watermark'>
                                    {slideshowDetails.years}
                                </div>
                                <p> 
                                    {slideshowDetails.description}
                                    {/* "Although The Starry Night was painted during 
                                    the day in Van Gogh's ground-floor studio, 
                                    it would be inaccurate to state that the picture was 
                                    painted from memory. 
                                    The view has been identified as the one from his bedroom window, facing east, a view which Van Gogh painted variations of no fewer than twenty-one times, including The Starry Night. "Through the iron-barred window," he wrote to his brother, Theo, around 23 May 1889, "I can see an enclosed square of wheat ... above which, in the morning, */}

                                </p>

                                <div className='artist-link'>
                                    <p>{slideshowDetails.source}</p>
                                </div>
                            </div>                    
                        </>)
                })}
        </div>
  )
}

export default Slideshowsection