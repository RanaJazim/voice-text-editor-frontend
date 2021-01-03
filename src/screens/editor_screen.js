import React, { useState } from "react";

import Editor from "../components/editor";
import DraftEditor from "../components/draft_editor";
import SelectLanguage from "../components/select_language";

const EditorScreen = () => {
  const [language, setLanguage] = useState("en-AU");

  const handleChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="container mt-4">
<<<<<<< HEAD
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              <SelectLanguage language={language} onChangeLang={handleChange} />
            </div>
          </div>
          <div className="mt-3">
            <DraftEditor language={language} />
=======
      <BottomRightLayout language={language} handleChange={handleChange} />
      {/* <ParallelLayout language={language} handleChange={handleChange} /> */}
      {/* <OriginalLayout language={language} handleChange={handleChange} /> */}
    </div>
  );
};

export default EditorScreen;

function BottomRightLayout({ language, handleChange }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-7">
            <Editor language={language} />
>>>>>>> e35e38c955ee1a5267b09b793e2d1cc413b79497
          </div>
        </div>
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-4 offset-md-1 mt-5">
            <SelectLanguage language={language} onChangeLang={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ParallelLayout({ language, handleChange }) {
  return (
    <div className="row">
      <div className="col-md-7">
        <Editor language={language} />
      </div>
      <div className="col-md-5">
        <SelectLanguage language={language} onChangeLang={handleChange} />
      </div>
    </div>
  );
}

function OriginalLayout({ language, handleChange }) {
  return (
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
  );
}
