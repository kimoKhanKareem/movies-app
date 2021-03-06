import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./App.css";
// import { Link } from 'react-router-dom';
import { IpadMini, Disklab, NestHub, Mobil425 } from "./responsive"

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
  }, [end]);

  console.log("film", film)

  const onSubmit = (e) => {
    e.preventDefault()
    setEnd(inputRef.current.value)
  }

  return (
    <StyledDiv className="App">
      <form onSubmit={onSubmit}>
        <input type={"text"} ref={inputRef} placeholder="Enter The Name Of The Movie" style={{ paddingLeft: '20px' }} />
        <button type="submit">Submuit</button>
      </form>
      <div className={"column"}>
        {film.map((item, index) => {
          return (
            <div className={"rap"} key={index}>
              <div className={"bordimage"}>
                <a href={item.url}>
                  <img src={item.medium_cover_image} style={{ width: '250px' }} alt="..." />
                </a>
              </div>
              <h3>
                {item.title_long}
              </h3>
              <h4>
                Rating
                <span> {item.rating} </span>
              </h4>
            </div>
          )
        })}
      </div>
    </StyledDiv>
  )
}
//styled components
const StyledDiv = styled.section`
form{
  margin-bottom: 5%;
  width: 100%;
  padding: 5% 5%;
  text-align: center;
  input{
    width: 100%;
    height: 40px;
  }
  input{
    font-size: 1.5rem;
    color: red;
  }
  button{
    margin-top: 1%;
    width: 20%;
    height: 40px;
    font-size: 1.5rem;
  }
}
.column{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 30px;
  transform: translate(20px, 10px);
  /* responsive 1440px */
  ${Disklab({
    gridTemplateColumns: 'repeat(4, 1fr)',
    transform: 'translate(10px, 10px)'
  })}
  /* responsive 1024px */
  ${NestHub({
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px',
    transform: 'translate(40px, 10px)'
  })}
  /* responsive 768px */
  ${IpadMini({
  gridTemplateColumns: 'repeat(3, 1fr)',
  transform: 'translate(0px, 0px)'
})}
  /* responsive 425px */
  ${Mobil425({
  gridTemplateColumns: 'repeat(2, 1fr)',
})}

.bordimage{
  width: 250px;
  height: 350px;
  overflow: hidden;
  }
}
`

export default App;
