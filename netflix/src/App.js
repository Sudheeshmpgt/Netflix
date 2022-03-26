import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals,action,comedyMovies,horrorMovies,romanceMovies,documentaries} from './Urls'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall={true}/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall={true}/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall={true}/>
      <RowPost url={romanceMovies} title='Romance Movies' isSmall={true}/>
      <RowPost url={documentaries} title='Documentaries' isSmall={true}/>
    </div>
  );
}

export default App;
