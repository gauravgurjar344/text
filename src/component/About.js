import React,{useState} from 'react'


export default function About(props) {
  const[myStyle,setMyStyle]=useState(
  {
    color:'white',
    backgroundColor:'black',border:'3px solid black'
   })
   const[btnText,setBtnText]=useState('Enable Light Mode')
   const handleMode=()=>{
    if(myStyle.color=='white'){
      setMyStyle({
        color:'black',
    backgroundColor:'white'
      })
      setBtnText('Enable Dark mode');
    }
    else{
      setMyStyle({
        color:'white',
    backgroundColor:'black'
      })
      setBtnText('Enable Light Mode');
    }
   }
  return (
    <div className='container mx-6 my-5' style={myStyle}>
       <h2 >{props.about}</h2>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count,character count or
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitaible for writing text with word/character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      This word counter software works in any web browsers such as chrome, firefox, Internet Explorer, Safari, Opera. It suits to count character in Facebook, Blog, books, excel document, pdf document, essays, etc.

      </div>
    </div>
  </div>
</div>
<button className='btn btn-primary my-3 mx-3' onClick={handleMode}>{btnText}</button>
    </div>
  )
}
