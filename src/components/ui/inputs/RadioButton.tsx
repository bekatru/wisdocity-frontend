import { classNames } from "components";
import React from "react";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {

}
export function RadioButton(props: RadioButtonProps){

  return (
    <input
      {...props}
      type={'radio'}
      readOnly
      checked={props.checked}
      className={classNames("text-purple-700 focus:ring-purple-700", props.className)}
    />
  )
}