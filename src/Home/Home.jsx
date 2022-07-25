import React, { useState } from 'react'
import { useEffect } from 'react'
import FilmCard from '../Components/Film Card/FilmCard'
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


  return (
  <>
    <header style={styles.header}>Films</header>
    <div style={styles.home}>
      {filmList.map(film => <FilmCard film={film}/>)}
    </div>
  </>
  )
}

const styles = {
  home: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  header:{
    fontSize: '3em'
  }
}

