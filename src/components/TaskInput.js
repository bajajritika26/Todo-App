import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addTask } from '../redux/actions';
import styles from "./TaskInput.module.css"
const TaskInput = ({ onClose }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addTask({ description, deadline: deadline.toISOString() }));
    onClose();
  };

  return (
    <div className={`d-flex justify-content-center align-center justify-center mt-3 ${styles.first}`}>
      <input
        type="text"
        className={`form-control ${styles.input}`}
        placeholder="Enter task..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        
      />
      <DatePicker
        selected={deadline}
        onChange={(date) => setDeadline(date)}
        showTimeSelect
        dateFormat="Pp"
    
      />
      <button onClick={handleSave} className={`btn btn-warn ${styles.butt}`} type="submit">Save Task</button>
    </div>
  );
};

export default TaskInput;
