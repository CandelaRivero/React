import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ItemListContainer from "./container/ItemListContainer";
import ComponenteEstado from "./class4/ComponenteEstado";
import Cursos from "./container/Cursos";

function App() {

 // const mensajeBienvenida = 'Bienvenidos a React'

// const stylesLi = {
  // color: 'red'
 // }

 

const alertMsg = () => { alert ("Hola") }

  return (
    <>
    
    <NavBar></NavBar>
    <ComponenteEstado></ComponenteEstado>
    <ItemListContainer></ItemListContainer>
    <div className="App">
    
   
      <Footer name="Juana" action={alertMsg}> 
      
      
      </Footer>

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