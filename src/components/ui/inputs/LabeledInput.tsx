import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface LabeledInputProps {
  label: ReactNode,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const LabeledInput: FC<LabeledInputProps> = (props) => {
  const {label, inputProps} = props
  return (
    <div className={"flex h-6 items-center"}>
      <p className={"w-24 text-nowrap shrink-0"}>{label}</p>
      <input 
        {...inputProps}
        className={classNames("block h-full w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 border-b border-b-black", inputProps?.className)}
      />
    </div>
  );
};
