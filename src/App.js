import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="App">
      <Header onAddClick={() => setShowInput(!showInput)} />
        <div style={{width:"90%", margin:"auto"}}>

      {showInput && <TaskInput onClose={() => setShowInput(false)} />}
      <TaskList />
        </div>
    </div>
  );
}

export default App;
