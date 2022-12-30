import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponentConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Ejemplo1></Ejemplo1>*/}¨
        {/*<Ejemplo2></Ejemplo2> */}
        {/* <MiComponentConContexto></MiComponentConContexto> */}
        <Ejemplo4 nombre="John">
        {/**Todo lo que hay aqui, es tratado como props.children */}
        <h3>
          Contenido del props.children
        </h3>
         </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
