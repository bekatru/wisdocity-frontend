import { Button, Modal, ShadowBox } from "components";
import { ReactNode } from "react";

export type TOpenModalTypeSelectedFiles =  'view' | 'collection' | 'archive' | 'delete' | null;
interface WisdomTableSelectedFilesPopselectProps{
  openModalType: TOpenModalTypeSelectedFiles,
  closeModal: () => void;
  onDeleteSelectedFiles: () => void,
}
export function WisdomTableSelectedFilesPopselect(props: WisdomTableSelectedFilesPopselectProps){
  const {openModalType, closeModal, onDeleteSelectedFiles} = props;

  const renderByModalType: {[key: string]: ReactNode} = {
    'delete': (
      <>
        <p className={"text-center text-lg mb-6"}>Are you sure you want to delete selected files?</p>
        <div className={"flex gap-4"}>
            <Button onClick={closeModal} variant={'outlined'}>No</Button>
            <Button onClick={onDeleteSelectedFiles} variant={'primary'}>Yes</Button>
        </div>
      </>
    ),
    'view': <>view</>,
    'collection': <>collection</>,
    'archive': <>archive</>,
  }
  return (
    <Modal isOpen={Boolean(openModalType)} closeModal={closeModal}>
      <ShadowBox>
        {renderByModalType[openModalType ?? '']}
      </ShadowBox>
    </Modal>
  )
}