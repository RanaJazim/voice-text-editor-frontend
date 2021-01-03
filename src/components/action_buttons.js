import React from "react";

export default function ActionButtons({ onSave, onEmail, onPrint, disabled }) {
  return (
    <React.Fragment>
      <button
        className="btn btn-link btn-md font-weight-bold"
        disabled={disabled}
      >
        Save
      </button>
      <button
        className="btn btn-link btn-md font-weight-bold"
        onClick={onEmail}
        disabled={disabled}
      >
        Email
      </button>
      <button
        className="btn btn-link btn-md font-weight-bold"
        disabled={disabled}
      >
        Print
      </button>
    </React.Fragment>
  );
}
