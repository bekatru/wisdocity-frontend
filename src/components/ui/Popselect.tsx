import { MouseEvent, ReactNode } from "react";
import { Popover } from ".";

export interface IPopselectOption{
  icon?: ReactNode,
  text: string,
  onClick: (e: MouseEvent<HTMLDivElement>, item: IPopselectOption) => void,
}
interface PopselectProps{
  button: ReactNode,
  options: IPopselectOption[]
}
export function Popselect(props: PopselectProps){
  const { button, options } = props
  return (
    <Popover
      button={button}
    >
      {
        options.map((item, index) => (
          <div onClick={(e) => item.onClick(e, item)} key={index} className={"px-2.5 py-3.5 flex gap-2 cursor-pointer hover:bg-[#F6E3FF] select-none rounded-lg"}>
            {item.icon}
            <p className={"text-black font-medium"}>{item.text}</p>
          </div>
        ))
      }
    </Popover>
  )
}