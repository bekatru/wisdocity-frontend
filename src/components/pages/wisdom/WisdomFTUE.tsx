
import { Button, CreateCollectionPage, Header, Modal, Paragraph, UploadWisdomPage } from "components";
import { useState } from "react";

interface WisdomFTUEProps {
    refetchFiles: () => void;
}

export function WisdomFTUE(props: WisdomFTUEProps) {
    const [isModalOpen, setIsModalOpen ] = useState<string | null>();

    const openUploadWisdomModal = () => setIsModalOpen("wisdom");

    const openCreateCollectionModal = () => setIsModalOpen("collection");

    const closeModal = () => setIsModalOpen(null);

    return (
        <div className="w-full flex flex-col ad justify-center items-center text-center max-w-lg mx-auto space-y-6">
            <Header>Here is your Wisdom Collection</Header>
            <Paragraph>
                This is where you can upload your wisdom and combine them into collections.<br/>
                You don't haven't uploaded anything yet. Upload your wisdom or create a new collection first.
            </Paragraph>
            <div className="w-full flex space-x-6 mt-8 justify-between px-16">
            <Modal
                isOpen={isModalOpen === 'wisdom'}
                closeModal={() => setIsModalOpen(null)}
                button={ <Button onClick={openUploadWisdomModal}>+ Upload</Button>}>
                <UploadWisdomPage
                onSubmitSuccess={props.refetchFiles}
                    onBackButtonClick={closeModal}/>
            </Modal>
            <Modal
                isOpen={isModalOpen === 'collection'}
                closeModal={() => setIsModalOpen(null)}
                button={ 
                    <Button
                        onClick={openCreateCollectionModal} 
                        variant="outlined">Create Collection</Button> }>
                <CreateCollectionPage
                    onBackButtonClick={closeModal}/>
            </Modal>               
            </div>
        </div>
    )
}