import { Button } from 'components';
import { FC, memo } from 'react';

interface RecordActionButtonsProps {
  setIsModalOpen: (open: boolean) => void,
}

const RecordActionButtons: FC<RecordActionButtonsProps> = (props) => {
  const {setIsModalOpen} = props
  return (
    <div className={"flex gap-4 w-full mt-7"}>
      <Button onClick={() => setIsModalOpen(false)} className={"grow-2"} variant={'outlined'}>Back</Button>
      <Button className={"grow-2"} variant={'primary'}>Next</Button>
    </div>
  );
};

const RecordActionButtonsMemo = memo(RecordActionButtons)
export default RecordActionButtonsMemo;