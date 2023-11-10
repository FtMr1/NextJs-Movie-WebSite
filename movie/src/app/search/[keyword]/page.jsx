import Movies from '@/components/Movies';
import React from 'react'

const Page = async ({params}) => {
    const keyword = params.keyword

    const res = await fetch( (`https://api.themoviedb.org/3/search/movie?api_key=36b3425346dc3553b506a5a40fd50953&language=en-US&query=${keyword}'`));
    const data = await res.json()
  return (
    <div>
      {
        !data?.results ?  <div>Aradığınız şey bulunamadı..</div>:
        <div className='flex items-center justify-center flex-wrap gap-3'>
            {
                     data?.results?.map((dt,i)=>(
                        <Movies key={i} dt={dt}/>
                      ))
            }
        </div>
       
        
        
      }
    </div>
  )
}

export default Page
