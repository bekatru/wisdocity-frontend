import { IVisualizerElements } from "../UI/AudioRecordModalVisualizer";

export interface IAudioRecordModalTimer {
  start: number;
  now: number;
  pause: number;
}
export interface IAudioRecordModalHook {
  audioVisualizerElemenets: React.MutableRefObject<IVisualizerElements[]>,
  mediaRecorder: React.MutableRefObject<MediaRecorder | undefined>,
  timer: IAudioRecordModalTimer,
  onRecord: () => void,
  onStop: () => void,
  audioFile: File | null,
  initMediaStream: () => Promise<void>,
  isRecordLoading: boolean,
}