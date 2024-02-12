import classNames from 'classnames';
import { FC, memo } from 'react';
import { NUM_OF_ITEM_VISUALIZER } from '../hooks/useAudioRecordModal';


export interface IVisualizerElements {
  height: number,
  opacity: number,
}
interface AudioRecordModalVisualizerProps {
  audioVisualizerElemenets: IVisualizerElements[],
  mediaRecorder?: MediaRecorder,
}
const width = 1.5;

const AudioRecordModalVisualizer: FC<AudioRecordModalVisualizerProps> = (props) => {
  const { audioVisualizerElemenets, mediaRecorder} = props;
  return (
    <div className={classNames(
      "my-7 flex gap-1 h-[90px] items-center justify-center w-[95px] h-[95px] bg-[#C79ADC] rounded-full shadow-[0px 0px 1px 1px #0000001a]",
      {'animate-pulse-audio-circle': mediaRecorder?.state === 'recording'}
    ) }>
        {
            Array(NUM_OF_ITEM_VISUALIZER).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className={"bg-white max-h-20"}
                  style={{ minWidth: width, height: (+audioVisualizerElemenets[i].height / 3), opacity: audioVisualizerElemenets[i].opacity}}>
                </div>
            ))
        }
    </div>
  );
};
const AudioRecordModalVisualizerMemo = memo(AudioRecordModalVisualizer);
export default AudioRecordModalVisualizerMemo;