import { Header, Paragraph } from 'components';
import { memo } from 'react';

interface AudioRecordModalTitleProps {
  recordFileName: number,
}

function AudioRecordModalTitle(props: AudioRecordModalTitleProps) {
  const {recordFileName} = props;
  return (
    <div className={"w-full"}>
      <Header>Recording</Header>
      <div className={"w-full h-px bg-[#F1F0F7] my-3"}></div>
      <Paragraph className={"text-center"}>Record {recordFileName}</Paragraph>
    </div>
  );
}
const AudioRecordModalTitleMemo = memo(AudioRecordModalTitle)
export default AudioRecordModalTitleMemo;