import Image from 'next/image'
import React from 'react'
const getMovie = async (id)=>{
    const res  = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=36b3425346dc3553b506a5a40fd50953`)
     return await res.json()
}
const Page =async ({params}) => {
    const id = params.id;
    const movieDty = await getMovie(id)
  return (
    <div className='relative p-7 min-h-screen'>
          <Image className=' object-cover' fill  src={`https://image.tmdb.org/t/p/original/${movieDty.backdrop_path || movieDty.poster_path}`}/>
          <div className='absolute '>
                <div className='text-4xl font-bold text-white'>{movieDty?.title}</div>
                <div className='w-1/2 text-white'>{movieDty?.overview}</div>
                <div className='text-white my-3'>{movieDty?.release_date}-{movieDty?.vote_average}</div>
                <div className='border w-32 p-3 rounded-md text-center  text-lg cursor-pointer hover:bg-white hover:text-black text-white'>İzle</div>
          </div>
    </div>
  )
}

export default Page
