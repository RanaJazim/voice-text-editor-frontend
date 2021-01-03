import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "./draft_editor.css";
import VoiceEditor from "./voice_editor";

const DraftEditor = ({ language }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <div>
      <Editor
        initialEditorState={editorState}
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        onEditorStateChange={setEditorState}
        toolbar={toolbarOptions}
        toolbarCustomButtons={[<VoiceEditor />]}
      />
    </div>
  );
};

export default DraftEditor;

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
