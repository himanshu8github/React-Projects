import React from 'react';
import '../index.css'

const TimeInputField = ({ value, onChange, onBlur, autoFocus = false }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      autoFocus={autoFocus}
      maxLength={2}
      className="time-input"
      inputMode="numeric"
      pattern="[0-9]*"
    />
  );
};

export default TimeInputField;
