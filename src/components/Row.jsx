import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import { UserAuth } from '../context/AuthContext'

const Row = ({title,fetchURL,rowId}) => {
    const [movies,setMovies]=useState([])
    const [trailerUrl,setTrailerUrl]=useState("")
    const [mid,setmId]=useState()
    const {user}=UserAuth()
    
    useEffect(()=>{
        axios.get(fetchURL).then(res=>{
            setMovies(res.data.results)
        })
    },[fetchURL])
    const slideLeft=()=>{
        const slider=document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft-500
    }
    const slideRight=()=>{
        const slider=document.getElementById('slider'+rowId)
        slider.scrollLeft=slider.scrollLeft+500
    }
    console.log(movies);
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleClick =async (item,id)=>{
        if(trailerUrl && mid===id){
            setTrailerUrl('')
        }else{
            movieTrailer(item?.title || "")
            .then((url)=>{
                const urlParams= new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
                setmId(id)
            })
            .catch(error=>console.log(error))
        }

    }
  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            {user ?<div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item,id)=>(
                    <Movie handleClick={()=>handleClick(item,id)} key={id} item={item}/>
                ))}
            </div>:<div id={'slider'+rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item,id)=>(
                    <Movie handleClick={()=>alert("Please Login to watch the trailer")} key={id} item={item}/>
                ))}
            </div>}
            
            <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
        </div>
        {user && trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        
    </div>
  )
}

export default Row