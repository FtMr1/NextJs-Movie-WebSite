'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Movies = ({dt}) => {
    const router = useRouter();
  
  return (
    <div onClick={()=>router.push(`/movie/${dt?.id}`)} className='min-w-[470px]  relative  cursor-pointer '>
        <Image width={470} height={400}  src={`https://image.tmdb.org/t/p/original/${dt.backdrop_path || dt.poster_path}`}/>
        <div className=' absolute bottom-0 w-full h-full p-3 flex flex-col justify-end opacity-0 hover:opacity-100 transition-all text-white '>
             <div className='text-2xl font-bold'>
             {dt?.title}
            </div> 
             <div>{dt?.release_date}-{dt?.vote_average}</div>
        </div>
    </div>
  )
}

export default Movies
