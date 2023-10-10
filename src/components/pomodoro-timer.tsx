import React from 'react';
import { useInterval } from '../hooks/use-interval';
import { Timer } from './timer';
import { Button } from './button';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);
  return (
    <div className="pomodoro">
      <h2>working:</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="botão" onClick={() => console.log(1)}></Button>
        <Button text="botão" onClick={() => console.log(1)}></Button>
        <Button text="botão" onClick={() => console.log(1)}></Button>
      </div>

      <div className="details">
        <p>Testando</p>
      </div>
    </div>
  );
}
