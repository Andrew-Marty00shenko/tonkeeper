import { ReactNode, useEffect, useState } from 'react';

import { STEP_WIDTH, STYLES } from './consts';

type StepperProps = {
  steps: ReactNode[];
};

export const Stepper = ({ steps }: StepperProps) => {
  const [stepIndex, setIndex] = useState(1);
  const xTranslate = STEP_WIDTH - stepIndex * STEP_WIDTH;

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stepIndex === steps.length) {
        return;
      }

      setIndex(prevIndex => prevIndex + 1);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div style={STYLES.root}>
      <div
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={STYLES.container}
      >
        <div
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={{
            ...STYLES.steps,
            transform: `translateX(${xTranslate}%)`,
            height: '100%',
          }}
        >
          {steps.map((step, index) => (
            <div
              style={{
                ...STYLES.step,
                fontWeight: index === stepIndex ? 'bold' : 'normal',
              }}
              key={index}
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
