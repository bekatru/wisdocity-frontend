
import { Button, Header, Modal, Paragraph, ShadowBox, UploadWisdomPage } from "components";
import { useState } from "react";

interface WisdomFTUEProps {
    refetchFiles: () => void;
}

export function WisdomFTUE(props: WisdomFTUEProps) {
    const [isModalOpen, setIsModalOpen ] = useState<boolean>(false);

    const openUploadWisdomModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={"w-full h-full flex justify-center items-center"}>
            <ShadowBox className={"w-[795px] h-[392px] mt-[101px] flex flex-col items-center justify-center"}>
                <Header>Welcome to Your Wisdom Collection!</Header>
                <Paragraph className={"text-center text-base mt-6"}>
                    Immortalize your wisdom by empowering your personal Avatar. 
                    Begin by uploading your knowledge and insights, organizing them into meaningful collections. 
                    Your Avatar will then learn from your wisdom and engage with learners on your behalf.
                </Paragraph>
                <Paragraph className={"text-base text-center mt-4"}>
                The journey begins now! Let's ignite curiosity and foster learning together.
                </Paragraph>
                <Modal
                    isOpen={isModalOpen}
                    closeModal={() => setIsModalOpen(false)}
                    button={<Button onClick={openUploadWisdomModal} className={"w-[293px] mt-11"}>Upload Wisdom Content</Button>}
                >
                    <UploadWisdomPage
                        onSubmitSuccess={props.refetchFiles}
                        onBackButtonClick={closeModal}
                    />
                </Modal>
            </ShadowBox>
        </div>
    )
}