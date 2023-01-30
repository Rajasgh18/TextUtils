import React, {useState} from 'react'

export default function TextArea(props){
    const handleUpClick = () => {
        let upper = text.toUpperCase();
        setText(upper);
        props.showAlert('Converted to UpperCase!', 'Success');
    }
    const handleLoClick = () => {
        let lower = text.toLowerCase();
        setText(lower);
        props.showAlert('Converted to LowerCase!', 'Success');
    }
    const handleClearClick = () => {
        let tex = "";
        setText(tex);
        props.showAlert('Text Cleared!', 'Success');
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Coppied to Clipboard !', 'Success');
    }
    const handleSpaces = () => {
        let tex = text.split(/ [ ]+/);
        setText(tex.join(" "));
        props.showAlert('Extra spaces removed!', 'Success');
    }
    const handleOnchange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea style={{backgroundColor : props.backMode}} value={text} className="form-control" id="myBox" rows="7" onChange={handleOnchange}></textarea>
                </div>
                <button disabled={text.length===0} className={`btn btn-${props.btnCol} my-3`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnCol} mx-3 my-3`} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnCol} my-3` } onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnCol} mx-3 my-3`} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className={`btn btn-${props.btnCol} my-3` } onClick={handleSpaces}>Remove Spaces</button>
            </div>
            <div className='container my-3'>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Minutes to read</p>
                <h2 className='my-2'>Summary</h2>
                <p>{text.length===0?"Nothing to preview":text}</p>
            </div>
        </>
    );
}