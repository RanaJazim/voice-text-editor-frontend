import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import "./style.css";

const EditorScreen = () => {
  const [content, setContent] = useState("");

  return (
    <div className="container  mt-5">

      <div className="row">
        <div className="col-md-7">
          <CKEditor
            editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setContent(data);
            }}
          />

          <div className="mt-3">
            <div className="row">
              <div className="col-md-3">
                <button className="btn btn-primary btn-sm mt">Start</button>
              </div>
              <div className="col-md-9">
                <ActionButton />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <SelectLanguage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorScreen;

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

function SelectLanguage() {
  return (
    <div className="form-group">
      <label htmlFor="language">Please select your language</label>
      <select name="language" id="language" className="form-control">
        <option value="en">English</option>
        <option value="urdu">Urdu</option>
        <option value="sp">Spanish</option>
        <option value="hindi">Hindi</option>
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
