import { allFilms } from './data';

const getAllFlims = async () => {
  // const response = await fetch('https://ghibliapi.herokuapp.com/films')

  const response = new Promise((resolve) => {
    setTimeout(() => {
      resolve(allFilms);
    }, 300);
  })
  return response
}

export {getAllFlims}