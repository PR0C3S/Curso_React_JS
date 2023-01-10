import logo from './logo.svg';
import './App.css';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponentConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
import TaskListComponent from './components/container/task_list';
import GrettingStyled from './components/pure/grettingStyled';
import Clock from './components/pure/clock';
import ClockF from './components/pure/clockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Ejemplo1></Ejemplo1>*/}¨
        {/*<Ejemplo2></Ejemplo2> */}
        {/* <MiComponentConContexto></MiComponentConContexto> */}
        
        {/**Todo lo que hay aqui, es tratado como props.children */}
        {/* <Ejemplo4 nombre="John">
        <h3>
          Contenido del props.children
        </h3>
        
         </Ejemplo4>
         */}
         {/* <TaskListComponent></TaskListComponent> */}
         {/* <GrettingStyled name="John"></GrettingStyled> */}
         {/* <Clock></Clock> */}
         <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
