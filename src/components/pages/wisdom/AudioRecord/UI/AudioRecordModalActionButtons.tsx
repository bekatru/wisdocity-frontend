import { Button } from 'components';
import { FC, memo } from 'react';

interface AudioRecordModalActionButtonsProps {
  onBack: () => void,
}

const AudioRecordModalActionButtons: FC<AudioRecordModalActionButtonsProps> = (props) => {
  const {onBack} = props
  return (
    <div className={"flex gap-4 w-full mt-7"}>
      <Button onClick={onBack} className={"grow-2"} variant={'outlined'}>Back</Button>
      <Button className={"grow-2"} variant={'primary'}>Next</Button>
    </div>
  );
};

const AudioRecordModalActionButtonsMemo = memo(AudioRecordModalActionButtons)
export default AudioRecordModalActionButtonsMemo;