'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
    
    const tabs = [
        {
            name :"En Popüler",
            url : "popular"
        }, {
            name :"En Son",
            url : "latets"
        },
        {
            name :"Yakında  Gelecekler",
            url : "upcoming"
        }
    ]
  return (
    <div className='p-5 m-3 bg-slate-100 dark:bg-slate-800 flex justify-center items-center gap-7'>
    {
        tabs.map((tb , i )=>(
            <Link className={` cursor-pointer hover:opacity-75 transition-opacity ${tb.url === genre ? "underline underline-offset-8 text-red-600" : ""}`} href={`/?genre=${tb.url}`} key={i}>{tb.name}</Link>
        ))
    }
    </div>
  )
}

export default Tabs
