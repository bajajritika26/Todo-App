import { ADD_TASK, DELETE_TASK } from './actions';

const initialState = {
  tasks: [
    { id: 1, description: 'Task 1', deadline: '2024-06-15T12:00' },
    { id: 2, description: 'Task 2', deadline: '2024-06-16T15:00' },
    { id: 3, description: 'Task 3', deadline: '2024-06-17T18:00' },
  ],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), ...action.payload }],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;
