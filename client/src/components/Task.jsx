import { useState } from "react";
import Button from "./Button";

const Task = ({
  id,
  text,
  time,
  onEdit,
  onDelete
}) => {
  const [done, setIsDone] = useState(false);

  return (
    <li className={`task-item ${done ? 'done' : ''}`} id={id}>
      <div className="check-done">
        <input
          type="checkbox"
          className="task-checkbox"
          onChange={() => setIsDone(!done)}
          checked={done}
          id={`task-${id}`}
        />
        <label
          className="check"
          htmlFor={`task-${id}`}
        >
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
            <polyline points="1 9 7 14 15 4"></polyline>
          </svg>
        </label>
      </div>
      <div className="task-content">
        <div className="task-text">{text}</div>
        <div className="task-time">{time}</div>
      </div>
      <div className="task-actions">
        <Button variant='edit' onClick={() => onEdit()}>✏️</Button>
        <Button variant='delete' onClick={() => onDelete(id)}>🗑️</Button>
      </div>
    </li>
  );
}

export default Task;