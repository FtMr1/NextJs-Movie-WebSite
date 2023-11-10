import Movies from '@/components/Movies'
import React from 'react'

const Page = async ({searchParams}) => {

  const res = await fetch (`https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day" }?api_key=36b3425346dc3553b506a5a40fd50953&language=en-US&page=1'`)

  const data = await res.json()


  return (
    <div className='flex items-center justify-center flex-wrap gap-3'>
            {
              data?.results?.map((dt,i)=>(
                <Movies key={i} dt={dt}/>
              ))
            }
    </div>
  )
}

export default Page
