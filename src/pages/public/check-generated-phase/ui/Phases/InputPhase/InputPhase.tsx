import { useFormContext } from 'react-hook-form';

import { Input } from '@/shared/ui';

type InputPhaseProps = {
  index: number;
};

export const InputPhase = ({ index }: InputPhaseProps) => {
  const { register } = useFormContext();

  return (
    <>
      <Input
        key={index}
        name={`phase-${index}`}
        title={`${index + 1}: `}
        borderRadius={16}
        bg="gray"
        height={55}
        type="text"
        register={register(`phase-${index}`)}
        dynamicLabel={false}
      />
    </>
  );
};
