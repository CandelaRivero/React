import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ComponenteEstado from "./components/ComponenteEstado";
import Cursos from "./container/Cursos";
import SpeciesList from './components/planes/SpeciesList';
import Footer from './components/Footer';
import CharList from './components/videogame/CharList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharDetailContainer from './components/videogame/CharDetailContainer';
import HeroHome from './components/videogame/HeroHome';
import ItemDetailContainer from './container/ItemDetailContainer';

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
        <Route index element={<HeroHome/>}></Route> 

        <Route path='lista' element={<CharList/>}></Route> 
        <Route path='personaje'>
          <Route path=':charId' element={<CharDetailContainer/>}></Route>
        </Route>

        <Route path='contador' element={<ComponenteEstado/>}></Route>
       <Route path='cards' element={<ItemListContainer/>}></Route>
        <Route path='cursos' element={<Cursos/>}></Route>




      </Routes>
      </BrowserRouter>
   
    
    
   <ItemDetailContainer></ItemDetailContainer>
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