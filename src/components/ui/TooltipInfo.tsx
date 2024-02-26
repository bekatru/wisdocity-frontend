import { FC, ReactNode, Ref, useState } from 'react';
import infoImg from 'assets/svg/information.svg';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';

interface TooltipInfoProps {
  children: ReactNode,
}

export const TooltipInfo: FC<TooltipInfoProps> = (props) => {
  const {children} = props;
  const [open, setOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement>()
  const [popperElement, setPopperElement] = useState<HTMLDivElement>()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: 'bottom-start'})
  return (
    <div
      className={"relative flex w-8 h-8 items-center justify-center"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={setReferenceElement as Ref<HTMLDivElement>}
    >
      <img
        src={infoImg} 
        alt={'Info'} width={24} height={24}
        className={"cursor-pointer"}
        
      />

      {
        open
        &&
        createPortal(
          <div
            ref={setPopperElement as Ref<HTMLDivElement>}
            style={{...styles.popper, left: 24}}
            {...attributes.popper}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className={"max-w-[500px] z-50 fixed bg-[#F6E3FF] p-4 border-[#B3B1C9] border rounded-br-3xl rounded-bl-3xl rounded-tr-3xl left-6 top-6 text-[#6B6985] text-[12px]"}
          >
            {children}
          </div>,
          document.body
        )
      }
    </div>
  );
};