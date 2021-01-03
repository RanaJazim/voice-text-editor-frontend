import React, { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import axios from "axios";
import draftToHtml from "draftjs-to-html";

import "./draft_editor.css";
import VoiceEditor from "./voice_editor";
import ClearButton from "./clear_button";
import ActionButtons from "./action_buttons";
import { toolbarOptions } from "../utils/toolbar";

const DraftEditor = ({ language }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [error, setError] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {};

  const handleEmail = async () => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/api/send-email", {
        message: getHTMLFromState(),
      });
      setIsLoading(false);
      setIsSuccess(true);
      setError("");
    } catch (ex) {
      setIsLoading(false);
      setIsSuccess(false);
    }
  };

  const handlePrint = () => {};

  const getHTMLFromState = () => {
    return draftToHtml(convertToRaw(editorState.getCurrentContent()));
  };

  return (
    <div>
      <Editor
        initialEditorState={editorState}
        wrapperClassName="editor-wrapper"
        editorClassName="editor"
        onEditorStateChange={setEditorState}
        toolbar={toolbarOptions}
        toolbarCustomButtons={[<VoiceEditor lang={language} />, <ClearButton />]}
      />
      <div className="my-3">
        <ActionButtons
          onEmail={handleEmail}
          disabled={!editorState.getCurrentContent().hasText()}
        />
      </div>

      {isLoading && <div className="spinner-border text-center"></div>}
      {isSuccess && (
        <div className="alert alert-success my-3">
          Email is sent successfully
        </div>
      )}
      {error && <div className="alert alert-danger my-3">{error}</div>}
    </div>
  );
};

export default DraftEditor;
