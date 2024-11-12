type InputProps = {
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
  return <input {...props} />;
};
