import { useState, useEffect } from "react";
import Search from "./Component/search";
import { useDebounce } from "react-use";
import MovieCard from "./Component/MovieCard";
import './App.css'
// import updateSearchCount from "./appwrite";

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}
const App = () => {
  const [eroorMassege, seteroorMassege] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');
  const [movieList, setmovieList] = useState([]);
  // const [isLoading, serisLoading] = useState(false);
  const [DebouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  {/* Fetch API Call*/ }


  const fatchMovies = async (query = '') => {
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
      const respond = await fetch(endpoint, API_OPTION); //get deta from api 
      if (!respond.ok) {
        throw new Error('Fetch Error')
      }
      const data = await respond.json();

      if (data === 'false') {
        setmovieList([])
        return;
      }
      // `results` make object to list
      setmovieList(data.results || [])

      // updateSearchCount();

    } catch (error) {
      console.error(`Error fatching ${error}`);
      seteroorMassege('Error to load this page, plz try again later or check console log');

    }
  }

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 300, [])

  useEffect(
    () => {
      fatchMovies(searchTerm);

    }, [searchTerm]

  )

  return (
    <main>
      <div className="pattern" />
      <div className='wrapper'>
        <header className="my-16 text-center">
          <h1 className="text-black text-4xl ">find you <span className='text-gradint'>movie </span>enjoy</h1>
        </header>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <section className="All-Movies mt-16">


        <h2 className="text-5xl my-16 text-center">
          All Movies
        </h2>

        {
          eroorMassege ? (
            <p className="text-red-500">{eroorMassege}</p>
          ) : (
            <ul>
              {
                <div className="">
                  {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                  ))
                  }
                </div>}
            </ul>)}
      </section>
    </main>

  )
}


export default App
