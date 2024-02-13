import { Header, Paragraph } from 'components';
import { memo } from 'react';


function AudioRecordModalTitle() {
  return (
    <div className={"w-full"}>
      <Header>Recording</Header>
      <div className={"w-full h-px bg-[#F1F0F7] my-3"}></div>
      <Paragraph className={"text-center"}>Record 001</Paragraph>
    </div>
  );
}
const AudioRecordModalTitleMemo = memo(AudioRecordModalTitle)
export default AudioRecordModalTitleMemo;