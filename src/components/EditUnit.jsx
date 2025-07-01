import React from 'react';
import '../index.css'

const EditableUnit = ({ field, value, editState, onEdit, onInputChange }) => {
  const isEditing = editState.field === field;

  return (
    <span className="editable-unit">
      {isEditing ? (
        <input
          type="text"
          value={editState.value}
          onChange={onInputChange}
          onBlur={() => onEdit(field)}
          autoFocus
          maxLength={2}
          className="time-input"
        />
      ) : (
        <span className="time-text" onClick={() => onEdit(field)}>
          {value}
        </span>
      )}
    </span>
  );
};

export default EditableUnit;
