"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes'
const Proveider = ({children}) => {
  return (
    <div>
        <ThemeProvider enableSystem={true} attribute='class'>
        {children}

        </ThemeProvider>
   
    </div>
  )
}

export default Proveider
