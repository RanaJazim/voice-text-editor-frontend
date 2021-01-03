import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "./draft_editor.css";
import VoiceEditor from "./voice_editor";
import ClearButton from "./clear_button";

const DraftEditor = ({ language }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleSave = () => {};
  const handleClear = () => {
    const state = EditorState.createEmpty();
    setEditorState(state);
  };
  const handleEmail = () => {};
  const handlePrint = () => {};

  return (
    <div>
      <Editor
        initialEditorState={editorState}
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        onEditorStateChange={setEditorState}
        toolbar={toolbarOptions}
        toolbarCustomButtons={[<VoiceEditor />, <ClearButton />]}
      />
      <div className="my-3">
        <ActionButtons onClear={handleClear} />
      </div>
    </div>
  );
};

export default DraftEditor;

function ActionButtons({ onSave, onClear, onEmail, onPrint }) {
  return (
    <React.Fragment>
      <button className="btn btn-link btn-md font-weight-bold">Save</button>
      <button
        className="btn btn-link btn-md font-weight-bold"
        onClick={onClear}
      >
        Clear
      </button>
      <button className="btn btn-link btn-md font-weight-bold">Email</button>
      <button className="btn btn-link btn-md font-weight-bold">Print</button>
    </React.Fragment>
  );
}

const toolbarOptions = {
  options: [
    "inline",
    "list",
    "textAlign",
    "emoji",
    "image",
    "remove",
    "history",
  ],
  inline: {
    options: ["bold", "italic", "underline"],
  },
};
