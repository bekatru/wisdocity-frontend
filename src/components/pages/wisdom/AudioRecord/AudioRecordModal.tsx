import { Modal, ShadowBox, parseMsToTime } from "components";
import { memo, useCallback} from "react";
import AudioRecordModalVisualizer from "./UI/AudioRecordModalVisualizer";
import AudioRecordModalActionButtons from "./UI/AudioRecordModalActionButtons";
import AudioRecordModalTitle from "./UI/AudioRecordModalTitle";
import AudioRecordModalPlayButtons from "./UI/AudioRecordModalPlayButtons";
import { IAudioRecordModalHook } from "./types/AudioRecordModalTypes";

interface AudioRecordModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (open: boolean) => void,
    recordAudioState: IAudioRecordModalHook,
}

export const AudioRecordModal = memo(function(props: AudioRecordModalProps) {
    const {isModalOpen, setIsModalOpen, recordAudioState} = props;

    const { 
        audioFile,
        audioVisualizerElemenets,
        mediaRecorder,
        timer,
        onRecord,
        onStop,
        isRecordLoading,
    } = recordAudioState

    const onBackActionButtons = useCallback(() => {
        setIsModalOpen(false);
        onStop();
    }, [setIsModalOpen, onStop])
    
    return (
        <Modal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}>
            <ShadowBox>
                <div className={"flex flex-col items-center"}>
                    <AudioRecordModalTitle/>

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
                            onRecord={onRecord}
                            onStop={onStop}
                            isRecordLoading={isRecordLoading}
                        />
                    </div>
                    <AudioRecordModalActionButtons onBack={onBackActionButtons}/>
                </div>
                
            </ShadowBox>
        </Modal> 
    );
})
