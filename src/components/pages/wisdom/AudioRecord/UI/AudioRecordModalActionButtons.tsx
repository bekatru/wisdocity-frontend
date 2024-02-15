import { Button } from 'components';
import { memo } from 'react';

interface AudioRecordModalActionButtonsProps {
  onBack: () => void,
  onNextClick: () => void,
}

function AudioRecordModalActionButtons(props: AudioRecordModalActionButtonsProps) {
  const { onBack, onNextClick } = props
  return (
    <div className={"flex gap-4 w-full mt-7"}>
      <Button onClick={onBack} className={"grow-2"} variant={'outlined'}>Back</Button>
      <Button onClick={onNextClick} className={"grow-2"} variant={'primary'}>Next</Button>
    </div>
  );
}

const AudioRecordModalActionButtonsMemo = memo(AudioRecordModalActionButtons)
export default AudioRecordModalActionButtonsMemo;