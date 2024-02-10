import classNames from 'classnames';
import { FC, memo } from 'react';


export interface IVisualizerElements {
  height: number,
  opacity: number,
}
interface RecordVisualizerProps {
  elements: IVisualizerElements[],
  num: number,
  mediaRecorder?: MediaRecorder,
}
const width = 1.5;

const RecordVisualizer: FC<RecordVisualizerProps> = (props) => {
  const {elements, num, mediaRecorder} = props;
  return (
    <div className={classNames(
      "my-7 flex gap-1 h-[90px] items-center justify-center w-[95px] h-[95px] bg-[#C79ADC] rounded-full shadow-[0px 0px 1px 1px #0000001a]",
      {'animate-pulse-audio-circle': mediaRecorder?.state === 'recording'}
    ) }>
        {
            Array(num).fill(null).map((_, i) => (
                <div 
                  key={i} 
                  className={"bg-white max-h-20"}
                  style={{ minWidth: width, height: (+elements[i].height / 3), opacity: elements[i].opacity}}>
                </div>
            ))
        }
    </div>
  );
};
const RecordVisualizerMemo = memo(RecordVisualizer);
export default RecordVisualizerMemo;