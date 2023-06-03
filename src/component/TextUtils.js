import React, {useState} from 'react' 

export default function TextUtils(props) {
  const[text,setText]=useState('');
  
  const handleUpperCase =()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowerCase =()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[  ]+/);
    setText(newText.join(" "));
  }
  const handleText=()=>{
    let newText="";
    setText(newText);
  }
const handleCopyText=()=>{
 var text= document.getElementById('exampleFormControlTextarea1');
 text.select();
 navigator.clipboard.writeText(text.value);
}
 const handleOnChange=(event)=>{
 setText(event.target.value)
 }
 
  return (
    <div className='my-3 mx-3' style={{color:props.mode==='light'?'#9ec5fe':'white'}}>
        <h2 className='my-3'>{props.heading}</h2>
        <div className="mb-3 my-3 mx-3" >
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder='Enter your text'
            value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'#f9e8e8':'white',color:props.mode==='dark'?'black':'#9ec5fe'}} > 
            </textarea>
            <button className='btn btn-primary my-3 mx-3' onClick={handleUpperCase} style={{color:'black', backgroundColor:'lightgreen'}}>Convert UpperCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleLowerCase} style={{color:'black', backgroundColor:'lightsalmon'}}>Convert LowerCase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleExtraSpaces} style={{backgroundColor:'lightcyan', color:'black'}}>Remove Extra Space</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleText} style={{backgroundColor:'rgb(120,120,255)', color:'black'}}>Delete Text</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handleCopyText} style={{backgroundColor:'rgb(180,0,255)', color:'black'}}>Copy to clipboard</button>
            <button className='btn btn-primary mx-3 my-3' style={{backgroundColor:'rgb(255,180,180)', color:'black'}}>Words = {text.split(" ").filter((element)=>{return element.length!=0}).length}</button>
            <button className='btn btn-primary my-3 mx-3' style={{backgroundColor:'rgb(255,140,140) ', color:'black'}}>Character={text.length}</button>
            <button className='btn btn-primary mx-3 my-3' style={{backgroundColor:'rgb(0,255,180)', color:'black'}}>Reading Time = {0.008*text.split(' ').length}</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='light'?'#9ec5fe':'black'}}>
          <h2>Preveiw</h2>
          <p>{text.length>0?text:"Nothing to perveiw"}</p>
        </div>
    </div>
  )
}
