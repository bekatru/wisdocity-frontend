import classNames from 'classnames';
import { memo } from 'react';
import { NUM_OF_ITEM_VISUALIZER } from '../hooks/useAudioRecordModal';


export interface IVisualizerElements {
  height: number,
  opacity: number,
}
interface AudioRecordModalVisualizerProps {
  audioVisualizerElemenets: IVisualizerElements[],
  mediaRecorder?: MediaRecorder,
}
const WIDTH_VISUALIZER_ITEM = 1.5;

function AudioRecordModalVisualizer(props: AudioRecordModalVisualizerProps) {
  const { audioVisualizerElemenets, mediaRecorder} = props;
  return (
    <div className={classNames(
      "my-7 flex gap-1 items-center justify-center w-[95px] h-[95px] bg-[#C79ADC] rounded-full shadow-[0px 0px 1px 1px #0000001a]",
      {'animate-pulse-audio-circle': mediaRecorder?.state === 'recording'}
    ) }>
        {
            Array(NUM_OF_ITEM_VISUALIZER).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className={"bg-white max-h-20"}
                  style={{ minWidth: WIDTH_VISUALIZER_ITEM, height: (+audioVisualizerElemenets[i].height / 3), opacity: audioVisualizerElemenets[i].opacity}}>
                </div>
            ))
        }
    </div>
  );
}
const AudioRecordModalVisualizerMemo = memo(AudioRecordModalVisualizer);
export default AudioRecordModalVisualizerMemo;