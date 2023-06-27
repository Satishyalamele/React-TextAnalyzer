import React, { useState } from "react";

function InputForm() {
  const [text, setText] = useState("");
  const Word = text.split(" ").filter((e)=>{return e.length!==0}).length;
  const Char = text.length;
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleUpClick = () => {
    let changeText = text.toUpperCase();
    setText(changeText);
  };
  const handleLoClick = () => {
    let changeText = text.toLowerCase();
    setText(changeText);
  };
  const handleResetClick = () => {
    setText(" ");
  };
  const handleCopy = () => {
    let text = document.getElementById('copytext');
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let spaces = '';
    words.forEach((e)=>{
        if(e[0] !== undefined){
            spaces += e+ " ";
        }
    })
    setText(spaces);
}
  const textTospeech = () => {
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("copytext").value;
    Speech.lang='eng';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
  }
  const Capitalized = () => {
    var arr = text.split(" ")
    var c = arr.length
    var CapitalizedText = ""
    while(c!==0){
        CapitalizedText= arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+CapitalizedText
        c--;
    }
    setText(CapitalizedText)
}
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Enter Your Text</h3>
            <div className="mb-3">
              <textarea
                className="form-control"
                onChange={handleOnChange}
                value={text}
                rows="12"
                style={{border:'1px solid black'}}
              ></textarea>
            </div>
          </div>
          <div className="col-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Text Preview</h3>
            <div className="mb-3">
              <textarea readOnly
                className="form-control"
                rows="12"
                value={text}
                id="copytext"
                style={{border:'1px solid black'}}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-3 text-center">
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        UpperCase
        </button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleLoClick}>
        LowerCase
        </button>
        <button className="btn btn-danger mx-1 my-1" onClick={Capitalized}>
        Capitalize
        </button>
        <button className="btn btn-info mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-secondary mx-1 my-1" onClick={textTospeech}>
          Text To Speech
        </button>
        <button className="btn btn-success mx-1 my-1" onClick={handleResetClick}>
          Clear Text
        </button>
      </div>
      <div className="container text-center py-3 mb-4">
        <h3>Your Text Summary</h3>
        <p>
          <b>{Word}</b> words And <b>{Char}</b> characters
        </p>
      </div>
    </>
  );
}
export default InputForm;
