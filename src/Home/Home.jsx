import React, { useState } from 'react'
import { useEffect } from 'react'
import { getAllFlims } from '../lib/home'

export default function Home() {

  const [filmList, setFilmList] = useState([])

  useEffect(()=> {
    const fetchFilms = async() => {
        const filmList = await getAllFlims()
        setFilmList(filmList)
    }
    fetchFilms()
  })

  console.log('filmList', filmList)



  return (
    <div>Home</div>
  )
}
