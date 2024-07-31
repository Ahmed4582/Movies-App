import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import {  useParams } from 'react-router-dom'

export default function MovieOrTv() {
  let {type,id} = useParams();
  const [dataDetails, setDataDetails ] = useState(null)

  async function getDedails(){
    let {data} = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=cc1fa36d0637a971c8740522955ba7ae`)

    setDataDetails(data)

  }


  useEffect(()=> {
    getDedails();
  },[])


  return (
    <>
    <div className="container">
    <Helmet>
    <title>The Movie</title>
</Helmet>


<div className="row mt-5 ">
  <div className="col-lg-7 col-md-7 col-sm-7 overflow-hidden">
  <div className='overflow-hidden w-75'>
                    <img src={"https://image.tmdb.org/t/p/w500/"+dataDetails?.poster_path} className='w-75 rounded-3' alt="" />
            </div>
  </div>
  <div className="col-lg-5 col-md-5 col-sm-5">
    <div>
    <div className="mb-5">
    <h2 className='text-white fw-bold  my-4'>The Name Is: <span className='text-danger'>{dataDetails?.original_title}</span></h2>
    <h3 className='text-white fw-bold  my-4'>The language Is: <span className='text-danger'>{dataDetails?.original_language}</span></h3>
    <h5 className='text-white fw-bold my-4'>The Date Is: <span className='text-danger'>{dataDetails?.release_date}</span></h5>
    <h5 className='text-white fw-bold my-4'>The Vote Is: <span className='text-danger'>{dataDetails?.vote_average.toFixed(1)}</span><i className='fa fa-star text-warning fs-6 mx-1 '></i></h5>
    <h5 className='text-white fw-bold  my-4'>The Quilty Is: <span className='text-danger'>720p  1080p</span></h5>
    <p className='text-white fw-bold  my-4'>The Overview Is:  <span className='text-danger'> { dataDetails?.overview}</span></p>
    </div>
    {dataDetails?.genres?.map((x)=>
    <button className='btn btn-warning text-dark fw-bold mx-2 my-4 rounded-2'>{x.name}</button>
    )}
    {dataDetails?.homepage !== ""? <div><span className='text-white fw-bold fs-6 mx-2'>I hope you enjoy watching</span>
    <a className='btn btn-danger fw-bold my-2 p-2 mx-2' href={dataDetails?.homepage}>To Watch</a>
    </div>:<h4 className='text-danger fw-bold'>The Movie Is Not Dowanload Now.</h4>}
    </div>
  </div>
</div>
    </div>

      
    </>
  )
}
