import { formatTime } from '../utils/formatTime';
import EditableUnit from './EditUnit';
import '../index.css'

const TimerDisplay = ({ time, editState, onEdit, onInputChange }) => {
  const { hours, minutes, seconds } = formatTime(time);

  return (
    <div className="timer-display">
      <EditableUnit
        field="hours"
        value={hours}
        editState={editState}
        onEdit={onEdit}
        onInputChange={onInputChange}
      />
      <span>:</span>
      <EditableUnit
        field="minutes"
        value={minutes}
        editState={editState}
        onEdit={onEdit}
        onInputChange={onInputChange}
      />
      <span>:</span>
      <EditableUnit
        field="seconds"
        value={seconds}
        editState={editState}
        onEdit={onEdit}
        onInputChange={onInputChange}
      />
    </div>
  );
};

export default TimerDisplay;
