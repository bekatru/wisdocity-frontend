import { useNavigate } from "react-router-dom";
import { Routes } from "modules/routing";
import { Button, Header, Paragraph } from "components";

export function WisdomFTUE() {
    const navigate = useNavigate();

    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center max-w-lg mx-auto space-y-6">
            <Header>Here is your Wisdom Collection</Header>
            <Paragraph>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis
            </Paragraph>
            <div className="w-full flex space-x-6 mt-8 justify-between px-16">
                <Button onClick={() => navigate(Routes.ExpertWisdomUpload)}>+ Upload</Button>
                <Button variant="outlined">Create Collection</Button>
            </div>
        </div>
    )
}