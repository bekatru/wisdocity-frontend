import { Modal, ShadowBox, parseMsToTime } from "components";
import { memo, useCallback, useEffect, useRef} from "react";
import AudioRecordModalVisualizer from "./UI/AudioRecordModalVisualizer";
import AudioRecordModalActionButtons from "./UI/AudioRecordModalActionButtons";
import AudioRecordModalTitle from "./UI/AudioRecordModalTitle";
import AudioRecordModalPlayButtons from "./UI/AudioRecordModalPlayButtons";
import { useAudioRecordModal } from ".";

interface AudioRecordModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void,
    onNextClick: (audioFile: File) => void,
}

export const AudioRecordModal = memo(function(props: AudioRecordModalProps) {
    const { isModalOpen, setIsModalOpen, onNextClick } = props;

    const { 
        audioFile,
        audioVisualizerElemenets,
        mediaRecorder,
        timer,
        onRecord,
        onStop,
        isRecordLoading,
        recordFileName,
    } = useAudioRecordModal(isModalOpen)

    const onBackActionButtons = useCallback(() => {
        setIsModalOpen(false);
        onStop();
    }, [setIsModalOpen, onStop])
    const isHardStop = useRef(false);
    
    const onNextClickPauseOrStop = () => {
        if (
            mediaRecorder.current?.state === 'paused'
            ||
            mediaRecorder.current?.state === 'recording'
        ){
            isHardStop.current = true;
            onStop();
        }else if (audioFile) {
            onNextClick(audioFile)
        }
    }

    useEffect(() => {
        if (audioFile && isHardStop.current){
            onNextClick(audioFile);
            isHardStop.current = false
        }
    }, [audioFile, isHardStop]);
    
    return (
        <Modal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}>
            <ShadowBox>
                <div className={"flex flex-col items-center"}>
                    <AudioRecordModalTitle recordFileName={recordFileName}/>

                    <AudioRecordModalVisualizer
                        audioVisualizerElemenets={audioVisualizerElemenets.current}
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
                            isPlayingAudio={mediaRecorder.current?.state === 'recording'}
                            onRecord={onRecord}
                            onStop={onStop}
                            isRecordLoading={isRecordLoading}
                        />
                    </div>
                    <AudioRecordModalActionButtons onNextClick={onNextClickPauseOrStop} onBack={onBackActionButtons}/>
                </div>
                
            </ShadowBox>
        </Modal> 
    );
})
