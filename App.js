import React,{useState} from 'react';

import Counter from './Counter_hooks';
import './App.css';

const App = () => {
const [showingCounter,setShowingCounter] = useState(false);
const handleShowCounterOnClick= () => {
  setShowingCounter(!showingCounter);
}
  return(
    <div className="App">
      <header>
        <button onClick={handleShowCounterOnClick}>
          show / Hide Counter
        </button>
        {showingCounter && <Counter />}
      </header>
    </div>

  )


}  ;
export default App;
