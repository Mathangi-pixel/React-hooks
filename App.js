import React,{Component} from 'react';
import './App.css';
import Counter from './Counter_class';

class App extends Component{
  constructor()
  {
    super();
    this.state={
      showingCounter: false
    }
  };

  render(){
    const handleShowCounterOnClick =()=>{
      this.setState({
        showingCounter:!this.state.showingCounter
      
      })
    };
  
    return(
      <div className="App">
      <header>
      <button onClick={handleShowCounterOnClick}>
      Show/Hide Counter
      </button>
      {this.state.showingCounter && <Counter />}
      </header>
    </div>

    )}
}
  
  

export default App;
