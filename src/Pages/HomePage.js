import React from 'react';
import MovieCard from '../components/MovieCard';



const HomePage = ({myMovies}) => {
 
  return (
    <div className='listContainer'>
      {myMovies?.map((el)=>(
        <div>
          <MovieCard  movieInfo={el}/>
       
         </div>
      ))}

        
    </div>
  )
}

export default HomePage