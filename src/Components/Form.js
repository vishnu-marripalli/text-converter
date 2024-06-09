import React,{useState} from 'react'

export default function Form(props) {

const [text, setText] = useState("")



const handleUpcase = ()=>{
    let Newtext= text.toUpperCase()
    setText(Newtext)
    props.showAlert("Converted to uppercase!", "success");
    
}
const handleLowcase = ()=>{
    let Newtext= text.toLowerCase()
    setText(Newtext)
    props.showAlert("Converted to lowercase!", "success");
    
}
const handleclear = ()=>{
    let Newtext= ''
    setText(Newtext)
    props.showAlert("Text Cleared!", "success");
    
}
const handleCopy = () => {
    navigator.clipboard.writeText(text); 
    props.showAlert("Copied to Clipboard!", "success");
}

const handleOnchange = (e)=>{
    setText(e.target.value)
    
} 

  return (
    <>
    <div className="container my-3 " data-bs-theme={props.mode}>
        <h1 className='mb-4 ' style={{color: props.mode==='light'?"black":'white'}} >Enter your text here</h1>
        <textarea className="form-control" value={text} onChange={handleOnchange} rows="8" id="floatingTextarea"></textarea>
        <button type="button" className={props.mode==='dark'?"btn btn-dark my-3 mx-2":"btn btn-primary my-3 mx-2"} onClick={handleUpcase} >UpperCase</button>
        <button type="button" className={props.mode==='dark'?"btn btn-dark my-3 mx-2":"btn btn-primary my-3 mx-2"} onClick={handleLowcase}>LowerCase</button>
        <button type="button" className={props.mode==='dark'?"btn btn-dark my-3 mx-2":"btn btn-primary my-3 mx-2"} onClick={handleclear}>Clear</button>
        <button type="button" className={props.mode==='dark'?"btn btn-dark my-3 mx-2":"btn btn-primary my-3 mx-2"} onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-3 " style={{color: props.mode==='light'?"black":'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length===0?"Nothing to preview":text}</p>
    </div>
    </>
  )
}
