import { FC, ReactNode } from 'react';

interface FilterPopoverProps {
  children: ReactNode,
  open: boolean,
  modalContent: ReactNode,
}

const FilterPopover: FC<FilterPopoverProps> = (props) => {
  const {children, open, modalContent} = props;
  
  return (
    <div className={"relative min-w-[250px]"}>
      <div className={"z-10 w-full"}>{children}</div>
      {
        open
        &&
        <div className={"bg-white rounded-lg absolute z-20 w-full top-0 border border-[#B3B1C9]"}>
          {modalContent}
        </div>
      }
    </div>
  );
};

export default FilterPopover;