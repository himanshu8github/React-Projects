import React, { useState, useEffect } from 'react';
import TimerDisplay from './components/TimerDisplay';
import TimerControls from './components/TimerControls';
import { formatTime } from './utils/formatTime';
import { calculateTime } from './utils/calculateTime';
import { validateInput } from './utils/validateInput';
import './index.css';

const App = () => {
  const [time, setTime] = useState(0); // in seconds
  const [initialTime, setInitialTime] = useState(0); // to reset
  const [isRunning, setIsRunning] = useState(false);
  const [editState, setEditState] = useState({ field: null, value: '' });

 
  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  //  Handle click to start/end editing
  const handleEditField = (field) => {
    if (editState.field === field) {

      const newTimeParts = {
        ...formatTime(time),
        [field]: editState.value.padStart(2, '0'),
      };

      const calculated = calculateTime(
        newTimeParts.hours,
        newTimeParts.minutes,
        newTimeParts.seconds
      );

      setTime(calculated);
      setInitialTime(calculated);
      setEditState({ field: null, value: '' });
    } else {
 
      setIsRunning(false);
      const currentTime = formatTime(time)[field].replace(/^0+/, '');
      setEditState({ field, value: currentTime });
    }
  };


  const handleInputChange = (e) => {
    const newVal = e.target.value;
    if (validateInput(newVal)) {
      setEditState((prev) => ({ ...prev, value: newVal }));
    }
  };


 const handleStartPause = () => {
  console.log("isRunning before:", isRunning);
  setIsRunning((prev) => !prev);
};


  const handleReset = () => {
    setTime(initialTime);
    setIsRunning(false);
    setEditState({ field: null, value: '' });
  };

  return (
    <div className="app">
      <h1 className="heading">⏳ Timer App</h1>

      <TimerDisplay
        time={time}
        editState={editState}
        onEdit={handleEditField}
        onInputChange={handleInputChange}
      />

      <TimerControls
        isRunning={isRunning}
        onStartPause={handleStartPause}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
