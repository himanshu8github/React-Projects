# ⏳ React Timer App

A clean and interactive timer app built with React, where users can set a custom countdown by editing the hours, minutes, and seconds directly. The app includes intuitive controls to start, pause, and reset the timer. All values are editable and auto-padded for a polished digital clock experience.

## ✨ Features

- Click-to-edit hours, minutes, and seconds individually
- Real-time countdown with Start/Pause toggle
- Reset button to restore the original set time
- Inputs auto-format to always show 2 digits (e.g., 5 → 05)
- Editing any field auto-pauses the timer
- Simple and minimal UI

## 🧰 Technologies Used

- React.js (functional components)
- JavaScript (ES6+)
- CSS (custom styles via index.css)

## ⚛️ React Concepts Used

| Concept              | Description                                               |
|----------------------|-----------------------------------------------------------|
| useState()           | Tracks timer value, edit state, and running status        |
| useEffect()          | Handles countdown logic with timer interval               |
| Controlled Inputs    | Lets users edit each field with live updates              |
| Conditional Rendering| Switches between text display and input field             |
| Component Props      | Passes control handlers and data between components       |

## 🔄 Countdown Logic

- Timer starts ticking down when Start is pressed
- Every second, the timer decreases by 1 using setInterval
- When it reaches 0, it auto-pauses
- Timer pauses if you start editing any field
- On save, the updated time is recalculated and displayed

## ✏️ Editable Time Fields

- Each of the HH, MM, and SS values can be clicked to enter edit mode
- Input only accepts 2-digit numbers
- On blur (clicking away), the value is saved and formatted
- Uses .padStart(2, '0') to ensure clean time display

## 🧩 Components Overview

- App.jsx: Main logic, state, and layout
- TimerDisplay.jsx: Shows the HH : MM : SS layout
- EditableUnit.jsx: Handles display vs input field toggle
- TimerControls.jsx: Start/Pause and Reset buttons
- Utility files: formatTime, calculateTime, validateInput

## 📄 License

Free to use for personal or educational projects.

