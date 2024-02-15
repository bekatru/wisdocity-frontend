import { memo } from 'react';
import { PauseIcon } from "@heroicons/react/24/solid"

interface AudioRecordModalIconRecPauseProps {
  isPlayingAudio: boolean
}

function AudioRecordModalIconRecPause(props: AudioRecordModalIconRecPauseProps){
  const {isPlayingAudio} = props;
  return (
    isPlayingAudio
    ?
    <PauseIcon className={"w-6"}/>
    :
    <svg width="23" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle r="11" cx="50%" cy="50%" rx={"50%"} width="23" height="23" fill="#EB0000"/>
    </svg>
  );
}
const AudioRecordModalIconRecPauseMemo = memo(AudioRecordModalIconRecPause)
export default AudioRecordModalIconRecPauseMemo;