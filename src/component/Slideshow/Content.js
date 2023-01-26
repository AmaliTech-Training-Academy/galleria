import React,{useState} from 'react'
import './Slideshow.css'
import img from '../../assets/shared/icon-view-image.svg'
import Slideshowdata from "../../data.json"
import Footer from './Footer'



const Content = () => {
    const [counter,setCounter] = useState(0)
    const [preview, setPreview] = useState("False")

    const slideFooter = {
        authorName: Slideshowdata[counter].name,
        artistName: Slideshowdata[counter].artist.name
    }

    const handleClick = (value) => {
        return setCounter(prev => prev +(value))
    }
    
  return (
    <>
        {/* <div className="myModal" style={{display: !preview ? 'block' : 'none'}} >
            <span style={{color: '#fff'}} onClick={() => setPreview(preview)}>Close</span>
                <img src={Slideshowdata[counter].images.hero.small.toString()} alt="" />

        </div> */}
        <div className='content-body'>

            <div className="slideshow-section">
                <div className='gallery-details'>
                    <div className='gallery-image'>
                        <img src={Slideshowdata[counter].images.hero.small.toString()} alt="" className='artist' />
                        <div className="img-tag" onClick={() => setPreview(!preview)}>
                            <img src={img} alt="" />
                            <h1>VIEW IMAGE</h1>
                        </div>
                    </div>
                    <div className='gallery-name'>
                        <h1>{Slideshowdata[counter].name}</h1>
                        <p>{Slideshowdata[counter].artist.name}</p>
                    </div>
                    <div className='gallery-artist'>
                        <img src={Slideshowdata[counter].artist.image.toString()} alt=""  />
                    </div>
                </div>
                <div className='artist-message'>
                        <h1>
                            {Slideshowdata[counter].year}
                        </h1>
                        <div className='art-text'>
                            <p>
                                {Slideshowdata[counter].description}
                            </p>
                    
                            <a href={Slideshowdata[counter].source} target={'_blank'} className='source-link' rel="noreferrer">
                                GO TO SOURCE
                            </a>
                        </div>
                </div>                      
            </div>

            <div className='progressBar' style={{ width: (counter+1) * 6.667 + '%'}}></div>
           
            <Footer slideFooter={slideFooter} fireMethod={handleClick}/>
        </div>
    </>
  )
}

export default Content