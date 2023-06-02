// import logo from './logo.svg';
import './App.css';
import Games from './Games/Games';
import Header from './Header/Header'
import Main from './Main/Main';
import Players from './Players/Players';
import Teams from './Teams/Teams';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
     <>
      <Header/>


      <Routes>
        <Route path = "/" element = {<Main/>}/>
        <Route path = "/players" element = {<Players/>}/>
        <Route path = "/teams" element = {<Teams/>}/>
        <Route path = "/games" element = {<Games/>}/>
      </Routes>
      
     </>
  );
}

export default App;
