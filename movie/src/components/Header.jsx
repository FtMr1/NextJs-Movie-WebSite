'use client'
import { useState } from 'react'
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import MenuItem from './MenuItem'
import ThemesComp from './ThemesComp'
import { useRouter } from 'next/navigation'
const Header = () => {
  const [keywrord, setKeywrord] = useState('')
  const router = useRouter()
    const menu =[
        {
            name : "About",
            url: "/about"
        },
        {
            name : "Sing In",
            url: "//login"
        }
    ]
    const  seactFunc = (e)=>{
          if(e.key ==="Enter" && keywrord.length >= 3 ){
            router.push(`/search/${keywrord}`)
            setKeywrord('')
          }
    }
  return (
    <div className='flex items-center gap-7 h-20 p-5'>
      <div className=' bg-slate-600 rounded-lg p-3 text-3xl'>Film İzle</div>
      <div className='flex flex-1 items-center gap-2 border p-3 rounded-lg'>
        <input  value={keywrord} onKeyDown={seactFunc} onChange={e=>setKeywrord(e.target.value)} placeholder='Arama Yap' className=' outline-none flex-1 bg-transparent' type="text" />
        <AiOutlineSearch onClick={seactFunc}  size={25}/>
      </div>
      <ThemesComp/>
      {menu.map((mn , i )=>(
            <MenuItem mn={mn} key={i}/>
      ))}
    </div>
  )
}

export default Header
