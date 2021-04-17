import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state ={
            count: 0
        }
    };
    componentDidMount(){
        console.log('I have mounted!');

    }
    componentDidUpdate(){
        console.log('I have updated!');
    }
    componentWillUnmount(){
        console.log('I have unmounted!');
    }
    render(){
        const handleIncrementOnClick = ()=> {
            this.setState({
                count: this.state.count + 1
            })
        };
    return(
        <div>
            <h2>
                The count is: {this.state.count}
            </h2>
            <button onClick={handleIncrementOnClick}>
                 Increment Counter
            </button>
        </div>
    )}
    }
    
 export default Counter;   
    
