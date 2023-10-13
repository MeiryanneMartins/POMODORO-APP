import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={100}
        shortRestTime={50}
        longRestTime={900}
        cycles={4}
      />
    </div>
  );
}

export default App;
