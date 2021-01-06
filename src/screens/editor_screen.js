import React, { useState } from "react";

import DraftEditor from "../components/draft_editor";
import SelectLanguage from "../components/select_language";

const EditorScreen = () => {
  const [language, setLanguage] = useState("en-AU");

  const handleChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="container mt-4">
      <Layout language={language} handleChange={handleChange} />
    </div>
  );
};

export default EditorScreen;

function Layout({ language, handleChange }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-7">
            <DraftEditor language={language} />
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
