import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState(" ");
    const handleUpClick=()=>{
        // console.log("upper case was clicked" + text);  
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Text converted to upper case","success");
        }
    const handleLoClick=()=>{
        // console.log("lower case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Text converted to lower case","success");  
    }
    const handleClClick=()=>{
        console.log("Clear text was clicked" + text);
        let newText=(" ");
        setText(newText);
    }
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to upper case</button>
            <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to lower case</button>
            <button className="btn btn-primary mx-3" onClick={handleClClick}>Clear text</button>
        </div>
        <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
            <h2>This is text summaray</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Text read in {0.008 * text.split(" ").length} minutes</p>
        </div>
        </>
    )
}
