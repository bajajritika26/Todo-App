import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';
import { useState } from 'react';
import styles from "./TaskList.module.css"
const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div >
            <div className='d-flex justify-content-between'>

                <h1 className={`mb-4 ${styles.head}`}>TASKS</h1>
                <input
                    type="text"
                    placeholder="Search tasks..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={`p-0 h-2 ${styles.second}`}
                    
                />
            </div>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr className={`d-flex justify-content-between mb-4 p-4 ${styles.third}`} >

                        <th style={{ flex: "2" }}>Task</th>
                        <th style={{ flex: "1" }}>Deadline</th>
                        <th style={{ flex: "1" }}>Action</th>
                    </tr>


                </thead>
                <tbody>
                    {filteredTasks.map(task => (
                        <tr key={task.id} className={`d-flex justify-content-between mb-4 p-4 ${styles.third}`} >
                            <td style={{ flex: "2" }}>{task.description}</td>
                            <td style={{ flex: "1" }}>{new Date(task.deadline).toLocaleString()}</td>
                            <td  style={{ flex: "1" }}><button className={styles.button}  onClick={() => dispatch(deleteTask(task.id))} >Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default TaskList;
