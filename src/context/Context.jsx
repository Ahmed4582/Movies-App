import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'




export let shanta = createContext(0)


export default function Context(props) {
  const [dataMovie, setDataMovie ] = useState(null)
  const [dataTv, setDataTv ] = useState(null)
  const [dataInput, setDataInput ] = useState("")
  let show = dataInput?"search":"discover"
  function getDataInput(e){

    setDataInput(e.target.value )
  
  };
  async function getDataMovie() {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${show}/movie?api_key=cc1fa36d0637a971c8740522955ba7ae`,{
      params: { 
        query: dataInput
      }
    })
    console.log(data.results)
    setDataMovie(data.results)
}
async function getDataTv() {
  let {data} = await axios.get(`https://api.themoviedb.org/3/${show}/tv?api_key=cc1fa36d0637a971c8740522955ba7ae`,{
    params: {
      query:dataInput
    }
  })
  console.log(data.results)
  setDataTv(data.results)
}
useEffect(()=> {
  getDataMovie();
  getDataTv()
}, [dataInput]);

   

  return (
    <shanta.Provider value={{getDataInput, dataInput,setDataInput,dataMovie,dataTv}}>
      
      {props.children}
    </shanta.Provider>
  )
}
