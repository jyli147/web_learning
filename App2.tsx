import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './components/App.css';
import Header from './components/header';
import Fotter from './components/footter/Fotter';
import Fotter2 from './components/footter/Fotter2';
import Fotter3 from './components/footter/Fotter3';

export interface Movie {
  id: string;
  title: string;
  description: string;
  posterUrl: string;
}

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [searchInputValue, setSearchInputValue] = useState('');
  const [didRequest, setDidRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  const searchMovies = useCallback(
    async (title: string): Promise<string[]> => {
      const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&s=${title}`)
      const data = await response.json();
      if (data.Search) {
        return data.Search.map((el: any) => el.imdbID);
      } else {
        return [];
      }
    }, [],
  )



  const getMovie = async (id: string): Promise<Movie> => {
    const response = await fetch(`https://www.omdbapi.com/?&apikey=24a33c8f&i=${id}`);
    const data = await response.json();

    return {
      id: data['imdbID'],
      title: data['Title'],
      description: data['Plot'],
      posterUrl: data['Poster'],
    };

  };

  const getMovies = async (title: string): Promise<Movie[]> => {
    const result: Movie[] = [];

    const foundMovies = await searchMovies(title);
    for (const movieId of foundMovies) {
      const foundMovie = await getMovie(movieId);
      result.push(foundMovie);
    }

    return result;
  };

  const handleSearch = async () => {
    setDidRequest(true)
    const foundMovies = await getMovies(searchTerm);
    setMovies(foundMovies);
  };

  useEffect(() => {
    console.log(searchTerm)
    handleSearch()
      .then((_) => setIsLoading(false))
      .catch((e) => setIsLoading(false));

    console.log('1 ====>>>')
    console.log(searchTerm)
    console.log('<<<===== 1')



    return () => {
      setIsLoading(true)
      console.log('2 ====>>>')
      console.log(searchTerm)
      console.log('<<<=====2')
    }
  }, [searchTerm]);

  console.log('App: ')

  return (
    <div className="App">
      <Header />
      <Points scores={[1, 2, 3, 4, 5]} k={1.2} />
      <form className="form">
        <input
          className='input'
          type="text"
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
        />
        <button type='button' className='form__button' onClick={() => setSearchTerm(searchInputValue)}></button>
      </form>
      <div>
        {isLoading && <h1> Loading.... </h1>}
        {didRequest
          ?
          <Fotter2 movies={movies} />
          :
          <Fotter />
        }
      </div>
    </div>
  );
}


// function App() {
//   const [user, setUser] = useState(true);
//   const [serName, setSerName] = useState('Павлюк');
//   const [age, setAge] = useState('26')
//   return (
//     <div>
//       {user? 'не забанен': 'Забанен'}
//       <button type="button" onClick={() => setUser(!user)}>Забанить</button>
//       <button type="button" onClick={()=> setUser(user)}>Разбанить</button>
//   </div>
// );
// }

// function App() {
//   const text: string[] = ['Самара','Иваново','Владимир']
//   const [value, setValue] = useState('ghhf');


//   let options = text.map((text, index) => {
//     return <option key={index}>{text}</option>
//   });

// 	return <div>
//     <select value={value} defaultValue={value} onChange={(event) =>  setValue(event.target.value)}>
//     {options}
//     </select>
//     <p>
//     Ваш выбор {value}
//     </p>
// 	</div>;
// }

// function App() {
//   const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
//   const[value, setValue]= useState('')

// 	const result = notes.map((note, index) => {
// 		return <li key={index}>{note}</li>;
//   });

//   function push() {
//     setNotes([...notes, parseInt(value) ])
//   }



// 	return <div>
// 		<ul>
// 			{result}
//     </ul>
//     <input
//       type="text"
//       value={value}
//       onChange={(event) =>  setValue(event.target.value)}

//     />
//     <button
//       type='button'
//       onClick={push}
//     >ghbdtn</button>
// 	</div>;
// }
export default App;

function Points(props: { scores: number[], k: number }) {
  let points = useMemo(() => {
    console.log('Points: ' + props)
    return props.scores.reduce((acc, score) => acc + score * props.k)
  }, [...props.scores, props.k]);

  return <h1> {points} </h1>
}