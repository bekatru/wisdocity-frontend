import { memo } from 'react';
import finish_img from '../assets/finish.svg';
import unionBg from '../assets/unionBg.svg';
import { Button, Spinner } from 'components';

interface AudioRecordModalPlayButtonsProps {
  onStop: () => void,
  onRecord: () => void,
  isRecordLoading: boolean,
}
function AudioRecordModalPlayButtons(props: AudioRecordModalPlayButtonsProps) {
  const { onRecord, onStop, isRecordLoading } = props;
  return (
    <div className={`flex w-[242px] h-[70px] bg-cover bg-no-repeat justify-between p-[6px] items-center mb-7`} style={{backgroundImage: `url(${unionBg})`}}>
      <div onClick={onStop} className={"w-[58px] h-[58px] flex items-center justify-center bg-white rounded-full relative cursor-pointer"}>
          <Button fullWidth={false} className={"justify-self-end"} variant={'text'}><img src={finish_img} alt={'Пауза'}/></Button>
          <span className={"absolute bottom-[-35px]"}>Stop</span>
      </div>
      <div onClick={isRecordLoading ? undefined : onRecord} className={"w-[153px] h-[56px] flex items-center justify-center bg-white rounded-full relative cursor-pointer"}>
          <Button disabled={isRecordLoading} fullWidth={false} className={"justify-self-end"} variant={'text'}>
            {
              isRecordLoading
              ?
              <Spinner/>
              :
              <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle r="11" cx="50%" cy="50%" rx={"50%"} width="23" height="23" fill="#EB0000"/>
              </svg>
            }
          </Button>
          <span className={"absolute bottom-[-35px]"}>Rec/Pause</span>
      </div>
  </div>
  );
}
const AudioRecordModalPlayButtonsMemo = memo(AudioRecordModalPlayButtons)
export default AudioRecordModalPlayButtonsMemo;