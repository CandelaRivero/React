import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ComponenteEstado from "./components/ComponenteEstado";
import Cursos from "./container/Cursos";
import SpeciesList from './components/planes/SpeciesList';
import Footer from './components/Footer';
import CharList from './components/videogame/CharList';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import CharDetailContainer from './components/videogame/CharDetailContainer';
import HeroHome from './components/videogame/HeroHome';
import ItemDetailContainer from './container/ItemDetailContainer';
import EventsHome from './components/events/EventsHome';
import ContextosHome from './components/contextos/ContextosHome';
import { CounterContextProvider } from './components/contextos/context/counterContext';
import Condicional from './components/rendercondicional/Condicional';
import PlanesListContainer from './components/rendercondicional/PlanesListContainer';
import CounterContainer from './components/contextos/CounterContainer';
import PlanesHome from './components/rendercondicional/PlanesHome';


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

        
            <Route path='categoria' element={<ItemListContainer/>}>
              <Route path=':category' element={<ItemListContainer/>}></Route>
            </Route>
            <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>





        <Route path='contador' element={<ComponenteEstado/>}></Route>
       
        <Route path='cursos' element={<Cursos/>}></Route>




      </Routes>
      </BrowserRouter>
   
    
    
   
    <SpeciesList></SpeciesList>
    <EventsHome></EventsHome>
    <Footer></Footer>

{/* 
    <CounterContextProvider>
    <ContextosHome></ContextosHome>
    </CounterContextProvider>

    <Condicional></Condicional> */}

   <PlanesHome/>
    

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