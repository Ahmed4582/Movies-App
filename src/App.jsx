import React from 'react'
import { createBrowserRouter,createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/layout/Layout'
import Home from './component/home/Home'
import Movie from './component/movie/Movie'
import Tv from './component/tv/Tv'
import {Offline} from 'react-detect-offline'
import MovieOrTv from './component/movieortv/MovieOrTv'


export default function App() {



 let router =  createHashRouter([
  {
    path:"/", element:<Layout/>,children:[
      {index:true, element:<Home/>},
      {path:"movie", element:<Movie/>},
      {path:"tv", element:<Tv/>},
      {path:"movie", element:<Movie/>},
      {path:"details/:type/:id", element:<MovieOrTv/>},

    ]
  }])



  return <>
  
  <RouterProvider router={router}/>

    
    <Offline>
      <div className='position-fixed bottom-0 start-0  text-white bg-info p-2'>
        Your Not Conctat <i className='fa fa-wifi'></i>
      </div>
      </Offline>

  </> 
}
