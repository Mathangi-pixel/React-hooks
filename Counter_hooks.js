import React, {useState,useEffect} from 'react'
const Counter = () =>{
    const [count,setCount] = useState(0);
    const handleIncrementOnClick = () => {
        setCount(count + 1)
    };
useEffect(()=>{
    console.log('Component did mount');
},[])

useEffect(()=>{
    console.log('component did update');
},[count])

useEffect(()=>{
    return()=>{
    console.log('component did unmount');
    };
},[])
return(
    <div>
        <h2>
            The count is :{count}
        </h2>
        <button onClick={handleIncrementOnClick}>
            Increment Count
        </button>
    </div>
)
};
export default Counter;