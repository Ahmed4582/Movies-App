
import React, {  useContext } from 'react'
import {BeatLoader} from 'react-spinners'
import Helmet from 'react-helmet'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { shanta } from '../../context/Context'
import {Link} from 'react-router-dom'



export default function Tv() {

  
  let {dataTv} = useContext(shanta)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };



  return (
    <>
     {dataTv? <div className="container">

     <div className="slider-container">
      <Slider {...settings}>
        {dataTv?.map((x)=>
          <Link to={`/details/tv/${x.id}`}>
           <div className='overflow-hidden'>
           <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} className='w-75 rounded-3' alt={x.title} />
         </div>
          </Link>
        )}
      </Slider>
    </div>


     <Helmet>
            <title>Movie</title>
        </Helmet>

        <div className="row mt-5 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
                <div className='text-white text-center fw-blod'>
                    <h1 className='text-danger'>Triending</h1>
                    <h3>Movies</h3>
                   
                    <h6 >I hope you have fun watching</h6>
                    
                </div>
            </div>
            {dataTv?.map((x)=>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4  " key={x.id}>
                <div className='position-relative'>
                    <Link to={`/details/tv/${x.id}`}>
                    <div className='overflow-hidden'>
                    <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} className='w-100 rounded-3' alt={x.title} />
                    </div>
                    </Link>
                    <div className='text-white bg-danger text-center rounded-3 '>
                    <h3 className='fs-5 fw-bold'>The Title Is: {x.name.split(" ").slice(0,2).join(" ")}</h3>
                    <p className='fs-5'>The Language Is: {x.original_language}</p>
                    <div className='position-absolute top-0 end-0 p-2 rounded-3 bg-dark-subtle text-dark fw-bold fs-5'>{x.vote_average.toFixed(1)}<i className='fa fa-star text-warning fs-6 mx-1 '></i></div>
                    </div>
                </div>
            </div>)}

                 
        </div>
    </div>: 
    <div className='d-flex justify-content-center align-items-center text-white vh-100 fa-6x text-center'>
      <BeatLoader color="#36d7b7" />
    </div>
    }
    </>
  )
}
