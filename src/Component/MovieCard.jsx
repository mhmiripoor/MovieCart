import React from 'react'

function MovieCard({ movie: { title, vote_average, poster_path, release_date, original_language, id } }) {
    return (
        <div className='movie-cart'>
            <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '../assets/react.svg'} id={id} alt={title} className='w-l h-l' />

            <div className='movie-cart mb-4'>
                <p className='text-white font-bold mb-4'>{title}</p>
                <img src={poster_path ? "https://uxwing.com/wp-content/themes/uxwing/download/arts-graphic-shapes/star-icon.png" : "../assets/react.svg"}
                    className='w-7 h-7 mb-2' />
                <p className='inline'>{vote_average.toFixed(1)}</p>
            </div>


        </div >
    )
}

export default MovieCard