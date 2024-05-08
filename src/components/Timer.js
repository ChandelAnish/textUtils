import React, { useState,useEffect} from "react";

function Timer(props) {

    
    const [continueTimer, continueStatus] = useState(false);
    const [currenttime, updateTimer] = useState(0);
    

    
    useEffect(()=>{
        let timerInterval;
        if(continueTimer)
        {
            timerInterval=setInterval(() => {
                updateTimer((previousValue)=>previousValue+1)
                //In React's state-setting functions like useState's setter function, you have the option to pass in a function that takes the previous state as an argument and returns the new state. This function is passed automatically by React.
                
                // You're not explicitly defining prevElapsedTime somewhere in your component. Instead, it's automatically provided by React. React will pass the previous state value of elapsedTime into this function, and you're incrementing it by 1 to update the state.
                
                
                
                
                
                
                
                // console.log(currenttime);
                //this will only print 0
                //Because React updates state asynchronously. When you call setElapsedTime, React schedules an update but doesn't immediately change the state. So when you log elapsedTime right after setElapsedTime, it still shows the previous value, not the updated one.
                //react collects multiple state updates that occur within the same cycle of event handling (like a click event or a lifecycle hook), and then performs them all together before the next render. This helps avoid unnecessary re-renders and ensures that updates are applied efficiently.
            }, 10);
        }
        
        return ()=>{
            clearInterval(timerInterval);
        }
     },[continueTimer])//whenever there is change in the state of the continueTimer then code part of the useEffect() function will execute(or render)


     function startTimer()
     {
        continueStatus(true);
        props.showAlert('success','success','timer started')
    }
    
    
    function stopTimer()
    {
         continueStatus(false);
         props.showAlert('success','success','timer stoped')
    }


    function restTimer()
    {
        updateTimer(0);
        continueStatus(false);
        props.showAlert('success','success','timer reseted')
    }

    useEffect(()=>{

        // console.log(currenttime)
        sessionStorage.setItem('ms',currenttime)

    },[currenttime])



    function displayTimer(time)
    {
        let cs=Math.floor(time%100)
        let sec=Math.floor((Math.floor(time/100))%60)
        let min=Math.floor(Math.floor((Math.floor(time/100))/60)%60)
        let hr=Math.floor(Math.floor(Math.floor(((Math.floor(time/100))/60)/60)%24))

        

        if(hr>0)
        {
            continueStatus(false);
            updateTimer(0);
        }
        return `${hr} hr  ${min} min  ${sec} sec  ${cs}`
    }



    return (
    <>
        <div className="container my-5" style={{color:`${(props.mode==='light'?'black':'white')}`}}>
            <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={startTimer}>start</button>

            <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={stopTimer}>stop</button>

            <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={restTimer}>reset</button>

            <h4 className="mx-1 my-3">{displayTimer(currenttime)}</h4>
        </div>
    </>)
}

export default Timer;



// the error "Too many re-renders," it typically occurs within a functional component when there's a state update causing the component to re-render repeatedly in an infinite loop. This can happen when the state is updated within the component body or within a lifecycle hook (such as useEffect), leading to a continuous cycle of re-rendering.

//in simpler terms, think of useEffect as a special function that React calls after it has finished rendering your component.

//The syntax of useEffect is quite straightforward. Here's a breakdown:

//useEffect(() => {
// Function to execute side effects
// This function runs after every completed render
// It's also run after the first render unless specified otherwise
// You can perform any side effects here
// This function can return a cleanup function if needed
// }, [dependencies]);
// Let me explain each part:

// useEffect(() => { ... }, [dependencies]): This is the basic structure of the useEffect hook. It takes two arguments:
// The first argument is a function that contains the code you want to run as a side effect.
// The second argument is an optional array of dependencies. If provided, useEffect will only re-run the effect if one of these dependencies has changed since the last render. If you don't want the effect to re-run on every render, you can specify the dependencies here.
// Function inside useEffect: This is where you put the code that you want to run as a side effect. This code might fetch data from an API, subscribe to events, update the DOM, or perform other interactions with the outside world.
// Dependencies: This is an optional array of values. If you include dependencies, React will re-run the effect whenever any of these values change between renders. If you omit the dependencies, the effect runs after every completed render