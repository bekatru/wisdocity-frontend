import { Modal, ShadowBox, parseMsToTime } from "components";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AudioRecordModalVisualizer, { IVisualizerElements } from "./UI/AudioRecordModalVisualizer";
import AudioRecordModalActionButtons from "./UI/AudioRecordModalActionButtons";
import AudioRecordModalTitle from "./UI/AudioRecordModalTitle";
import AudioRecordModalPlayButtons from "./UI/AudioRecordModalButtons";


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

const NUM_OF_ITEM_VISUALIZER = 16;
const thresholdOpacity = 0.008;
const AUDIO_VISUALIZER_ARRAY = new Uint8Array(NUM_OF_ITEM_VISUALIZER * 2);

const initalElements = Array(NUM_OF_ITEM_VISUALIZER).fill(null).map(() => ({ height: 0, opacity: 1 }));

interface AudioRecordModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void,
}
const getInitalDateTimer = () => {
    const now = Date.now();
    return ({
        start: now,
        now,
        pause: 0,
    })
}
const zeroDateTimer = { start: 0, now: 0, pause: 0 };
export const AudioRecordModal: FC<AudioRecordModalProps> = (props) => {
    const {isModalOpen, setIsModalOpen} = props;
    const [toggle, setToggle] = useState(true);
    const voice = useRef<Blob[]>([]);
    const mediaRecorder = useRef<MediaRecorder | undefined>();
    const stream = useRef<MediaStream | null>();
    const [timer, setTimer] = useState({...zeroDateTimer});

    const [audioFile, setAudioFile] = useState<File | null>(null);


    const src = useRef<MediaStreamAudioSourceNode>();
    const context = useRef<AudioContext | null>(null);
    const analyser = useRef<AnalyserNode | null>();
    const elemenets = useRef<IVisualizerElements[]>([...initalElements]);

    const initMediaStream = useCallback(async () => {
        try {
            stream.current = await navigator.mediaDevices.getUserMedia({ audio: { sampleRate: SAMPLE_RATE } });
            mediaRecorder.current = new MediaRecorder(stream.current, { audioBitsPerSecond: AUDIO_BITS_PER_SECOND })
            mediaRecorder.current.ondataavailable = function(e) {
                voice.current.push(e.data);
                const fileExtenstion = mediaRecorder.current?.mimeType.match(/(?<=audio\/).+?(?=;|$)/i)?.[0] || 'webm';
                
                const file = new File(voice.current, `audio.${fileExtenstion}`, { type: mediaRecorder.current?.mimeType || 'audio/webm'} );
                setAudioFile(file);
                
                voice.current = [];
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(mediaErrorCatcher(error.name), {autoClose: false});
            return;
        }
    }, [setAudioFile])
    

    const recursiveTimer = useCallback(async () => {
        if (mediaRecorder.current?.state === 'recording'){
            if (context.current){
                analyser.current?.getByteFrequencyData(AUDIO_VISUALIZER_ARRAY);
                const result = [];
                for(let i = 0; i < NUM_OF_ITEM_VISUALIZER; i++){
                    result.push({ height: AUDIO_VISUALIZER_ARRAY[i + NUM_OF_ITEM_VISUALIZER], opacity: thresholdOpacity * AUDIO_VISUALIZER_ARRAY[i+NUM_OF_ITEM_VISUALIZER] });
                }
                elemenets.current = (result);
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
            return;
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
        if (mediaRecorder.current?.state !== 'inactive'){
            stream.current?.getTracks?.()?.[0]?.stop();
            mediaRecorder?.current?.stop();
            setToggle(true);
            setTimer({...zeroDateTimer});
            elemenets.current = initalElements;
        }
    }, [mediaRecorder, stream, elemenets])

    const onRecord = useCallback(async () => {
        if (mediaRecorder.current?.state === 'inactive'){
            await initMediaStream()
            mediaRecorder?.current?.start();
            if (stream.current && context.current && analyser.current){                
                src.current = context.current.createMediaStreamSource(stream.current);
                src.current.connect(analyser.current);
            }

            recursiveTimer();
            setToggle(true);
            setTimer(getInitalDateTimer());
            setAudioFile(null);
        } else if (mediaRecorder.current?.state === 'paused'){
            mediaRecorder?.current?.resume();
            recursiveTimer();
            setTimer(prev => ({
                ...prev,
                start: prev.start + (Date.now() - prev.pause),
            }));
            setToggle(true);
        }else{
            setToggle(false);
            onPauseRecord();
        }
        
    }, [recursiveTimer, mediaRecorder]);

    const onBackActionButtons = useCallback(() => {
        setIsModalOpen(false)
    }, [setIsModalOpen])

    useEffect(() => {
        if (isModalOpen){
            context.current = new AudioContext();
            analyser.current = context.current?.createAnalyser();
            
            initMediaStream();
        }else {
            analyser.current?.disconnect();
            context.current?.close();
            stream.current?.getTracks()?.[0].stop();
            analyser.current = null;
            context.current = null;
            stream.current = null;
        }
    }, [isModalOpen]);


    useEffect(() => {
        console.log(audioFile);
        
    }, [audioFile])
    
    return (
        <Modal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}>
            <ShadowBox>
                <div className={"flex flex-col items-center"}>
                    <AudioRecordModalTitle/>

                    <AudioRecordModalVisualizer
                        elements={elemenets.current}
                        num={NUM_OF_ITEM_VISUALIZER}
                        mediaRecorder={mediaRecorder.current}
                    />
                    <div>
                        <div className={"flex gap-3 items-start justify-center mb-3"}>
                            <svg width="12" height="23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle r="6" cx="50%" cy="50%" rx={"50%"} width="12" height="12" fill="#EB0000"/>
                            </svg>
                            <span>{parseMsToTime(timer.now - timer.start)}</span>
                        </div>

                        <AudioRecordModalPlayButtons
                            onRecord={onRecord}
                            onStop={onStop}
                            toggle={toggle}
                        />
                    </div>
                    <AudioRecordModalActionButtons onBack={onBackActionButtons}/>
                </div>
                
            </ShadowBox>
        </Modal> 
    );
}
const AudioRecordModalMemo = memo(AudioRecordModal)
export default AudioRecordModalMemo;