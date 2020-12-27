import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./style.css";
import { languages } from "../utils/languages";

const EditorScreen = () => {
  const [language, setLanguage] = useState("en-AU");

  const handleChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              <SelectLanguage language={language} onChangeLang={handleChange} />
            </div>
          </div>
          <div className="mt-3">
            <Editor language={language} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorScreen;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.continuous = true;

function Editor({ language }) {
  const [content, setContent] = useState(null);
  const [isStart, setIsStart] = useState(false);

  recognition.lang = language;

  const handleToggle = () => {
    if (!isStart) {
      recognition.start();
      setIsStart(true);
    } else {
      recognition.stop();
      setIsStart(false);
    }
  };

  recognition.onresult = (e) => {
    const current = e.resultIndex;
    const transcript = e.results[current][0].transcript;

    setContent(content + transcript);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />

        <div className="row mt-2">
          <div className="col-md-3">
            <button
              className="btn btn-primary btn-sm mt"
              onClick={handleToggle}
            >
              {!isStart ? "Start" : "Stop"}
            </button>
          </div>
          <div className="col-md-9">
            <ActionButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton() {
  return (
    <div>
      <AppToolTip content="Copy" toolTip="Copy Text to Clip Board" />
      <AppToolTip content="Save" toolTip="Download File as plain text" />
      <AppToolTip content="Publish" toolTip="Publish your note online" />
      <AppToolTip content="Tweet" toolTip="Share on Twitter" />
      <AppToolTip content="Play" toolTip="Text to speech" />
      <AppToolTip content="Email" toolTip="Email This" />
      <AppToolTip content="Print" toolTip="Save as pdf or print" />
      <AppToolTip content="Clear" toolTip="Clear Notepad" />
    </div>
  );
}

function SelectLanguage({ language, onChangeLang }) {
  const handleChange = (e) => {
    onChangeLang(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="form-group">
      <label htmlFor="language">Please select your language</label>
      <select
        name="language"
        id="language"
        className="form-control"
        onChange={handleChange}
        defaultValue={language}
      >
        {languages.map((lang) => (
          <option value={lang.code} key={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function AppToolTip({ content, toolTip }) {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 50, hide: 50 }}
      title="some"
      overlay={<Tooltip id={`tooltip`}>{toolTip}</Tooltip>}
    >
      <p variant="success" className="btn btn-sm btn-link">
        {content}
      </p>
    </OverlayTrigger>
  );
}
