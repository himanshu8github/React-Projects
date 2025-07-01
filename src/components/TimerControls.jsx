import React from 'react';
import '../index.css'

const TimerControls = ({ isRunning, onStartPause, onReset }) => {
  return (
    <div className="timer-controls">
      <button onClick={onStartPause} className="control-btn">
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button onClick={onReset} className="control-btn reset-btn">
        Reset
      </button>
    </div>
  );
};

export default TimerControls;
