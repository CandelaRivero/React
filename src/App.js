import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ComponenteEstado from "./class4/ComponenteEstado";
import Cursos from "./container/Cursos";
import Cessna172 from './Cessna172.svg'


function App() {

 // const mensajeBienvenida = 'Bienvenidos a React'

// const stylesLi = {
  // color: 'red'
 // }

 
  return (
    <>
    
    <NavBar></NavBar>
    <ComponenteEstado ></ComponenteEstado>
    <ItemListContainer></ItemListContainer>
    <div className="App">
    
   
      

      <Cursos></Cursos>
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