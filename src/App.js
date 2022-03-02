import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './compente/NavBar';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './compente/MovieList'
import Add from './compente/Add'
import Home from './compente/Home';
import NavBarComponent from  './compente/NavBar'
import MoviDetails from './compente/Movis';
function App() {

  const [Movies, setMovies] = useState([{
    id: 1,
    title: 'The Conjuring',
    poster: 'https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg',
    decription:
      'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
    rate: 2,
  },
  {
    id: 2,
    title: 'The Grudge',
    poster:
      'https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
  },
  {
    id: 17,
    title: 'The Ring',
    poster: 'https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 1,
  },
  {
    id: 4,
    title: 'The Shawshank Redemption',
    poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
  },
  {
    id: 5,
    title: 'The Godfather',
    poster:
      'https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
  },
  {
    id: 19,
    title: 'The Godfather: Part II',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
  },
  {
    id: 7,
    title: 'The Dark Knight',
    poster: 'https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 2,
  },
  {
    id: 8,
    title: '12 Angry Men',
    poster: 'https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg',
    decription: 'The Ring is a 2002 American supernatural horror film',
    rate: 3,
  }])

  const addMovie = (Movie) => {
    setMovies([...Movies, Movie])
  }
  const onSeqrch = (carcter) =>
    setMovies(Movies.filter((elt) => elt.title.toLowerCase().includes((carcter.toLowerCase()))))

  return (



    <BrowserRouter>
      <NavBarComponent  onSeqrch={onSeqrch} />
      <Routes>
        <Route path="/" element={<MovieList Movies={Movies} />} />
        <Route path="/movie/:id" element={<MoviDetails Movies={Movies} />} />
        <Route path="/Add" element={<Add addMovie={addMovie} />} />
      </Routes>
    </BrowserRouter>



  )
}


export default App;
