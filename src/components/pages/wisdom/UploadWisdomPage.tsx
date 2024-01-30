import { Button, CenteredContainer, Header, Input, Label, ShadowBox } from "components";

export function UploadWisdomPage() {
    return (
        <CenteredContainer>
            <ShadowBox>
                <Header>Upload new information</Header>
                <Label>Links</Label>
                <div className="flex space-x-2 mt-2">
                    <Input
                        placeholder="Add new link"
                    />
                    <Button 
                        fullWidth={false}
                        variant="outlined"
                    >
                        Add
                    </Button>
                </div>

                <Label>Files</Label>
                <p>Supported file type: JPEG, PNG, PDF, DOC, DOCX, TXT</p>
            </ShadowBox>
        </CenteredContainer>
    )
}