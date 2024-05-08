import React, { useState } from "react";
//Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

//state is a built-in React object that is used to contain data or information about the component.
function TextArea(props) {

    //**React Hooks must be called in a React function component.

    // const [text, setText] = useState("this is default text that will be stored in the text variable");//settext is the function to change the text as required

    const [text, setText] = useState("");

    const [copy, setCopy] = useState("copy");


    // text="hello"//incorrect way to change state of text ,it can only be done by the settext function

    const onchangetext = (event) => {
        setText(event.target.value)
        setCopy('copy')
    }
    const countword=(txt)=>{
        let textarray=txt.split(' ');
        let newtextarray=textarray.filter((word)=>{
            return (word.trim()!=='')
        })
        return newtextarray.length;
    }
    const uppercase = () => {
        setText(text.toUpperCase());
        props.showAlert('success','success','text converted to uppercase')
    }
    const lowercase = () => {
        setText(text.toLowerCase());
        props.showAlert('success','success','text converted to lowercase')
    }
    const clearText = () => {
        setText("");
        props.showAlert('success','success','text cleared')
    }
    const copyText = () => {
        navigator.clipboard.writeText(text);
        setCopy('copied')
        props.showAlert('success','success','text copied')
    }
    const removeExtraSpace = () => {
        const regex = /[ ]+/g;
        let newtext = text.split(regex);
        // console.log(newtext)
        setText(newtext.join(' '));
        props.showAlert('success','success','extra spaces removed')
    }
    const capatalizeFirstLetter = () => {
        const regex = /[ ]+/g;
        let newtext = text.split(regex);
        for (let i in newtext) {
            newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].substring(1)
        }
        setText(newtext.join(' '));
        props.showAlert('success','success','capatalized first letter of each word')
    }
    const speed = () => {
        let words = countword(text);
        let min = Math.floor(Math.floor((Math.floor((sessionStorage.getItem('ms')) / 100)) / 60) % 60)
        if (sessionStorage.getItem('ms')==='0' || words===1) {
            return 0;
        }
        else if (min === 0) {
            return words;
        }
        else {
            return words / min;
        }
    }


    return (
        <>
            <div className="container my-5">
                {/* my-3 --> this class will give margin of 3 along y-axis */}
                <h1 style={{ color: `${(props.mode === 'light' ? 'black' : 'white')}` }}>{props.heading}</h1>
                <div className="mb-3">



                    <textarea style={{ backgroundColor: `${(props.mode === 'light') ? 'white' : '#171a43'}`, color: `${(props.mode === 'light') ? 'black' : 'white'}` }} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={onchangetext} placeholder="enter any text"></textarea>

                    {/* In React, when you provide a value prop to an input field like <input> or <textarea>, React expects you to also provide an onChange handler to handle changes to the input value. This is necessary because React enforces a unidirectional data flow, and without an onChange handler, the input would become read-only.

                To fix the warning, you need to add an onChange handler to your <textarea> element to handle changes to its value. */}



                </div>
                <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={uppercase} >Uppercase</button>

                <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={lowercase} >Lowercase</button>

                <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={removeExtraSpace} >remove Extra Spaces</button>

                <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={capatalizeFirstLetter} >capatalize First Letter</button>

                <button type="button" className="btn btn-primary btn-lg btn-sm mx-2" onClick={copyText} >{copy}</button>

                <button type="button" className="btn btn-primary btn-lg btn-danger btn-sm mx-2" onClick={clearText} >clear</button>
            </div>

            {/* text analysis */}
            <div className="container" style={{ color: `${props.mode === 'light' ? 'black' : 'white'}` }}>
                <h3>Text analysis</h3>
                <h6 id="word">words : {countword(text)} &nbsp;&nbsp;&nbsp; characters : {text.length} &nbsp;&nbsp;&nbsp; speed : {speed()} wps (start timer to measure speed)</h6>
            </div>
        </>
    )
}

export default TextArea;