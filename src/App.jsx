import './App.css';
import {InputForm} from "./components/Input";
import {Show} from "./components/Show";

function App() {
  return (
    <div className="App">
        <div className='heading'><h1>Recipe House</h1></div>
     <div>
     <InputForm />
     </div>
     <div>
       <Show />
     </div>
    </div>
    
  );
}

export default App;
