import { FC, useCallback, useMemo, useState } from 'react';
import { AudioRecordModal } from './AudioRecord';

interface UploadWisdomRecordAudioProps {
  onNextClick: (file: File) => void;
}

const UploadWisdomRecordAudio: FC<UploadWisdomRecordAudioProps> = (props) => {
  const [isModalOpenRecord, setIsModalOpenRecord] = useState(false);
    const isModalOpenRecordMemo = useMemo(() => isModalOpenRecord, [isModalOpenRecord])
    const setIsModalOpenRecordMemo = useCallback(setIsModalOpenRecord, [setIsModalOpenRecord])

    const handleAudiorecorderNextClick = (file: File) => {
      props.onNextClick(file);
      setIsModalOpenRecord(false);
    }

  return (
    <div className="flex items-center space-x-2 cursor-pointer">
      <span className="w-8 h-8 flex items-center justify-center border border-red-500 rounded-full">
          <span className="w-4 h-4 bg-red-500 rounded-lg" />
      </span>
      <span onClick={() => setIsModalOpenRecordMemo(true)}>Start Recording</span>
      <AudioRecordModal
          onNextClick={handleAudiorecorderNextClick}
          isModalOpen={isModalOpenRecordMemo}
          setIsModalOpen={setIsModalOpenRecordMemo}
      />
    </div>
  );
};
export default UploadWisdomRecordAudio;