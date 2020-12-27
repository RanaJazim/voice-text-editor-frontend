import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

import "./style.css";

const EditorScreen = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-6">
              <SelectLanguage />
            </div>
          </div>
          <div className="mt-3">
          <Editor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorScreen;

function Editor() {
  const [content, setContent] = useState(null);

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
            <button className="btn btn-primary btn-sm mt">Start</button>
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
