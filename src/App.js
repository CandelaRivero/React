import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ComponenteEstado from "./class4/ComponenteEstado";
import Cursos from "./container/Cursos";
// import Cessna172 from './Cessna172.svg'
import SpeciesList from './components/planes/SpeciesList';
import Footer from './components/Footer';
import CharList from './components/videogame/CharList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharDetailContainer from './components/videogame/CharDetailContainer';
import Home from './components/videogame/Home';

function App() {

 // const mensajeBienvenida = 'Bienvenidos a React'

// const stylesLi = {
  // color: 'red'
 // }

 
  return (
    <>
    
    
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Home/>}></Route> 

        <Route path='lista' element={<CharList/>}></Route> 
        <Route path='personaje'>
          <Route path=':charId' element={<CharDetailContainer/>}></Route>
        </Route>

        <Route path='contador' element={<ComponenteEstado/>}></Route>
        <Route path='cards' element={<ItemListContainer/>}></Route>
        <Route path='cursos' element={<Cursos/>}></Route>



      </Routes>
      </BrowserRouter>
   
    
    
    
    <SpeciesList></SpeciesList>
    <Footer></Footer>
    </div>
    </>

    
  );
}

export default App;

/*
<h1 className="text-3xl font-bold underline">{mensajeBienvenida}</h1>
<ul>
  <li style = {stylesLi}>React</li>
  <li>JSX</li>
  <li>Webpack</li>
</ul> */


/*<Footer name="Juana" action={alertMsg}>  </Footer>

const alertMsg = () => { alert ("Hola") } */