import React, { useState } from "react";
import { HiMiniSpeakerWave  } from "react-icons/hi2";
import {HiClipboardCopy, HiRefresh } from 'react-icons/hi'
function InputForm() {
  const [text, setText] = useState("");
  const Word = text.split(" ").filter((e) => {
    return e.length !== 0;
  }).length;
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
    let text = document.getElementById("copytext");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let spaces = "";
    words.forEach((e) => {
      if (e[0] !== undefined) {
        spaces += e + " ";
      }
    });
    setText(spaces);
  };
  const textTospeech = () => {
    const Speech = new SpeechSynthesisUtterance();
    const message = document.getElementById("copytext").value;
    Speech.lang = "eng";
    Speech.text = message;
    window.speechSynthesis.speak(Speech);
  };
  const Capitalized = () => {
    var arr = text.split(" ");
    var c = arr.length;
    var CapitalizedText = "";
    while (c !== 0) {
      CapitalizedText =
        arr[c - 1].charAt(0).toUpperCase() +
        arr[c - 1].substring(1).toLowerCase() +
        " " +
        CapitalizedText;
      c--;
    }
    setText(CapitalizedText);
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Enter Your Text</h3>
            <div className="mb-0">
              <textarea
                className="form-control"
                onChange={handleOnChange}
                value={text}
                rows="12"
                style={{
                  border: "1px solid black",
                  backgroundColor: "#abb8c3",
                  color: "black",
                  fontSize: "18px",
                }}
              ></textarea>
            </div>
          </div>
          <div className="col-6 col-md-6 col-sm-12 col-xs-12">
            <h3>Text Preview</h3>
            <div className="mb-3">
              <textarea
                readOnly
                className="form-control"
                rows="12"
                value={text}
                id="copytext"
                style={{
                  border: "1px solid black",
                  backgroundColor: "#abb8c3",
                  color: "black",
                  fontSize: "18px",
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={handleUpClick}
              >
                UpperCase
              </button>
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={handleLoClick}
              >
                LowerCase
              </button>
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={Capitalized}
              >
                Capitalize
              </button>
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={handleExtraSpaces}
              >
                Rm Xtra Spaces
              </button>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={textTospeech}
              >
               <HiMiniSpeakerWave size={25} />
              </button>
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={handleResetClick}
              >
                Clear <HiRefresh size={25} />
              </button>
              <button
                class="btn btn-outline-secondary text-dark my-1"
                onClick={handleCopy}
              >
                Copy <HiClipboardCopy size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4 mb-3">
        <div className="row">
          <div className="col-md-9 col-sm-6">
            <h6>Text Summary</h6>
            <p>
              <b>{Word}</b> words And <b>{Char}</b> characters
            </p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h6>Reading Time :</h6>
            <p>
              Avg Time <b>{Word * 0.008}</b> Minutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default InputForm;
