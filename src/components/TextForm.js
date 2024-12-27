import React, {useState} from 'react'
import {toast} from 'react-hot-toast';

export default function 
TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked");
        let newText =text.toUpperCase();
        setText(newText)
        if(newText.length>0)
        toast.success("successfully converted to uppercase",{id:"uppercase"});
        else
        toast.error("no text avialable");
    }
    const handleDownClick = ()=>{
        //console.log("uppercase was clicked");
        let newText =text.toLowerCase();
        setText(newText)
        if(newText.length>0)
        toast.success("successfully converted to lowercase",{id:"uppercase"});
        else
        toast.error("no text avialable");
    }
    const handleOnChange=(event)=>{
        //console.log("Upper case");
        setText(event.target.value); 
    }
    const handleClear=()=>{
        if(text.length>0){
        setText('');
        toast.success("text cleared",{id:"cleared"});
        }else
        toast.error("no text avialable");
    }
    const handleCopy = () =>{
        var text =document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        toast.success("text copied",{id:"copied"});
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        toast.success("extra spaces removed ",{id:"removed"});
    }
    const [text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div class="mb-3">
           <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
