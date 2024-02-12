import { useCallback, useEffect, useRef, useState } from "react";
import { IVisualizerElements } from "../UI/AudioRecordModalVisualizer";
import { toast } from "react-toastify";

export const NUM_OF_ITEM_VISUALIZER = 16;

const DEFAULT_FILE_EXTENSTION = 'webm';
const DEFAULT_MIME_TYPE = 'audio/webm';
const REGEXP_MIME_TO_EXTENSTION = /(?<=audio\/).+?(?=;|$)/i

const SAMPLE_RATE = 96000;
const AUDIO_BITS_PER_SECOND = 320000;

const MEDIA_STREAM_ERRORS: {[key: string]: string} = {
    AbortError: 'An AbortError has occured.',
    NotAllowedError: 'A NotAllowedError has occured. User might have denied permission.',
    NotFoundError: 'A NotFoundError has occured.',
    NotReadableError: 'A NotReadableError has occured.',
    SecurityError: 'A SecurityError has occured.',
    TypeError: 'A TypeError has occured.',
}

const mediaErrorCatcher = (error: string) => {
    return MEDIA_STREAM_ERRORS[error] ?? ('An error occured with the error name ' + error)
}

const THRESHOLD_OPACITY = 0.008;
const AUDIO_VISUALIZER_ARRAY = new Uint8Array(NUM_OF_ITEM_VISUALIZER * 2);

const initalElements = Array(NUM_OF_ITEM_VISUALIZER).fill(null).map(() => ({ height: 0, opacity: 1 }));


const getInitalDateTimer = () => {
  const now = Date.now();
  return ({
      start: now,
      now,
      pause: 0,
  })
}
const zeroDateTimer = { start: 0, now: 0, pause: 0 };
export function useAudioRecordModal (isModalOpen: boolean) {

  const voiceResultAudioRecord = useRef<Blob[]>([]);
  const mediaRecorder = useRef<MediaRecorder | undefined>();
  const stream = useRef<MediaStream | null>();
  const [timer, setTimer] = useState({...zeroDateTimer});

  const [audioFile, setAudioFile] = useState<File | null>(null);


  const src = useRef<MediaStreamAudioSourceNode>();
  const context = useRef<AudioContext | null>(null);
  const analyser = useRef<AnalyserNode | null>();
  const audioVisualizerElemenets = useRef<IVisualizerElements[]>([...initalElements]);

  const onDataAvailableAudioRecorder = function(e: BlobEvent) {
      voiceResultAudioRecord.current.push(e.data);
      const fileExtenstion = mediaRecorder.current?.mimeType.match(REGEXP_MIME_TO_EXTENSTION)?.[0] || DEFAULT_FILE_EXTENSTION;
      
      const file = new File(voiceResultAudioRecord.current, `audio.${fileExtenstion}`, { type: mediaRecorder.current?.mimeType || DEFAULT_MIME_TYPE } );
      setAudioFile(file);
      
      voiceResultAudioRecord.current = [];
  }

  const initMediaStream = useCallback(async () => {
      try {
          stream.current = await navigator.mediaDevices.getUserMedia({ audio: { sampleRate: SAMPLE_RATE } });
          mediaRecorder.current = new MediaRecorder(stream.current, { audioBitsPerSecond: AUDIO_BITS_PER_SECOND })
          mediaRecorder.current.ondataavailable = onDataAvailableAudioRecorder;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
          toast.error(mediaErrorCatcher(error.name), {autoClose: false});
          return;
      }
  }, [setAudioFile])
  

  const recursiveTimer = useCallback(async () => {
      if (mediaRecorder.current?.state === 'recording'){
        if (context.current){
            analyser.current?.getByteFrequencyData?.(AUDIO_VISUALIZER_ARRAY);
            const result = [];
            for (let i = 0; i < NUM_OF_ITEM_VISUALIZER; i++){
              result.push({ height: AUDIO_VISUALIZER_ARRAY[i + NUM_OF_ITEM_VISUALIZER], opacity: THRESHOLD_OPACITY * AUDIO_VISUALIZER_ARRAY[i + NUM_OF_ITEM_VISUALIZER] });
            }
            audioVisualizerElemenets.current = result;
        }

        await new Promise((resolve) => {
            setTimeout(() => {
                setTimer(prev => {
                    resolve(undefined);
                    return ({
                        ...prev,
                        now: Date.now()
                    });
                })
            }, 50);
        })
        requestAnimationFrame(recursiveTimer)
      }else if (mediaRecorder.current?.state === 'inactive') {
          setTimer(getInitalDateTimer());
      }
  }, [mediaRecorder])

  const onPauseRecord = useCallback(() => {
      if (mediaRecorder.current?.state === 'recording'){
          mediaRecorder?.current?.pause();
          setTimer(prev => ({
              ...prev,
              pause: Date.now(),
          }))
      }
  }, [mediaRecorder])

  const onStop = useCallback(() => {
      if (
          (mediaRecorder.current?.state !== 'inactive') 
          && 
          (stream.current?.getTracks()[0].stop) 
          && 
          (mediaRecorder?.current)
      ){
          stream.current.getTracks()[0].stop();
          mediaRecorder.current.stop();
          setTimer({...zeroDateTimer});
          audioVisualizerElemenets.current = initalElements;
      }
  }, [mediaRecorder, stream, audioVisualizerElemenets])

  const onRecord = useCallback(async () => {
      if (mediaRecorder.current?.state === 'inactive'){
          await initMediaStream()
          mediaRecorder?.current?.start();
          if (stream.current && context.current && analyser.current){   
            src.current = context.current.createMediaStreamSource(stream.current);
            src.current.connect(analyser.current);
          }

          recursiveTimer();
          setTimer(getInitalDateTimer());
          setAudioFile(null);
      } else if (mediaRecorder.current?.state === 'paused'){
          mediaRecorder?.current?.resume();
          recursiveTimer();
          setTimer(prev => ({
              ...prev,
              start: prev.start + (Date.now() - prev.pause),
          }));
      } else{
          onPauseRecord();
      }
      
  }, [recursiveTimer, mediaRecorder]);



  const unmountMediaRecorder = () => {
      analyser.current?.disconnect();
      context.current?.close();
      stream.current?.getTracks()?.[0].stop();
      analyser.current = null;
      context.current = null;
      stream.current = null;
  }

  useEffect(() => {
      if (isModalOpen){
          context.current = new AudioContext();
          analyser.current = context.current?.createAnalyser();
          
          initMediaStream();
      }else {
          unmountMediaRecorder()
      }
  }, [isModalOpen]);

  return ({
    audioVisualizerElemenets,
    mediaRecorder,
    timer,
    onRecord,
    onStop,
    audioFile
  })
}