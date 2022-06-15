import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [end, setEnd] = useState("");
  const [film, setFilm] = useState([]);
  const inputRef = useRef('');
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b0bc5ffcb5mshdbe206f32fb3294p138e0ajsndceb4d205f75',
        'X-RapidAPI-Host': 'movies-and-serials-torrent.p.rapidapi.com'
      }
    };

    fetch(`https://movies-and-serials-torrent.p.rapidapi.com/movies/search/${end}`, options)
      .then(response => response.json())
      .then(response => setFilm(response.data.movies))
      .catch(err => console.error(err));
  });
  console.log("film", film)

  const onSubmit =(e) =>{
    e.preventDefault()
    setEnd(inputRef.current.value)
  }

  return (
    <div className="App">
        <form onSubmit={onSubmit}>
          <input type={"text"} ref={inputRef} />
          <button type ="submit">Submuit</button>
        </form>
        {film.map((item, index) => {
          return (
            <div key={index}>
              <h1>
                {item.title_long}
              </h1>
              <img src={item.medium_cover_image} alt="..." />
            </div>
          )
        })}

      </div>

  )
}

export default App;
