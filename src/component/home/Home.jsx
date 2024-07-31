import axios from 'axios'
import React, {  useContext, useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { shanta } from '../../context/Context'
import { Link } from 'react-router-dom'


export default function Home() {
    let {dataMovie} = useContext(shanta)
    let {dataTv} = useContext(shanta)

    
    const [dataPerson, setDataPerson ] = useState(null)

    async function getDataPerson() {
        let {data} = await axios.get("https://api.themoviedb.org/3/discover/person?api_key=cc1fa36d0637a971c8740522955ba7ae")
        console.log(data.results)
        setDataPerson(data.results)
    }

    useEffect(()=>{
        getDataPerson();
    }, [])


  return (
    <>
    <div className="container">

        <Helmet>
            <title>Home</title>
        </Helmet>

        <div className="row mt-5 justify-content-center">
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
                <div className='text-white text-center fw-blod'>
                    <h1 className='text-danger'>Triending</h1>
                    <h3>Movies</h3>
                  
                    <h6 >I hope you have fun watching</h6>
                </div>
            </div>
            {dataMovie?.filter((x)=>x.poster_path !== null )?.map((x)=>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4  " key={x.id}>
                <div className=' position-relative' >
                   <Link to={`/details/movie/${x.id}`}>
                   <div className='overflow-hidden'>
                    <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} className='w-100 rounded-3' alt={x.title}  />
                    </div>
                   </Link>
                    <div className='text-white bg-danger text-center  '>
                    <h3 className='fs-5 fw-bold'>The Title Is: {x.title.split(" ").slice(0,2).join(" ")}</h3>
                    <p className='fs-5'>The Language Is: {x.original_language}</p>
                    <div className='position-absolute top-0 end-0 p-2 rounded-3 bg-dark-subtle text-dark fw-bold fs-5'>{x.vote_average.toFixed(1)}<i className='fa fa-star text-warning fs-6 mx-1 '></i></div>
                    </div>
                </div>
            </div>)}

                <hr />
                 
            <div className="col-lg-3 col-md-4 col-sm-6 mt-5  ">
                <div className='text-white text-center fw-blod'>
                    <h1 className='text-danger'>Triending</h1>
                    <h3>TV</h3>
                    <h6 >I hope you have fun watching</h6>
                </div>
            </div>

            {dataTv?.filter((x)=>x.poster_path !== null )?.map((x)=>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={x.id}>
                <div className=' position-relative' >
                   <Link to={`/details/tv/${x.id}`}>
                   <div className='overflow-hidden'>
                    <img src={"https://image.tmdb.org/t/p/w500/"+x.poster_path} className='w-100 rounded-3' alt={x.title} />
                    </div>
                   </Link>
                    <div className='text-white bg-danger text-center '>
                    <h3 className='fs-5 fw-bold'>The Title Is: {x.name.split(" ").slice(0,2).join(" ")}</h3>
                    <p className='fs-5'>The Language Is: {x.original_language}</p>
                    <div className='position-absolute top-0 end-0 p-2 rounded-3 bg-dark-subtle text-dark fw-bold fs-5'>{x.vote_average.toFixed(1)}<i className='fa fa-star text-warning fs-6 mx-1 '></i></div>
                    </div>
                </div>
            </div>)}

            <hr />

            <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ">
                <div className='text-white text-center fw-blod'>
                    <h1 className='text-danger'>Triending</h1>
                    <h3>The Persons </h3>
                </div>
            </div>
            {dataPerson?.map((x)=>
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={x.id}>
                <div >
                    <div className='overflow-hidden'>
                    <img src={"https://image.tmdb.org/t/p/w500/"+x.profile_path} className='w-100 rounded-3' alt={x.title} />
                    </div>
                    <div className='text-white bg-danger text-center '>
                    <h3 className='fs-5 fw-bold'>The Name Is: {x.name.split(" ").slice(0,2).join(" ")}</h3>
                
                    </div>
                </div>
            </div>)}
        </div>
    </div>
    </>
  )
}
