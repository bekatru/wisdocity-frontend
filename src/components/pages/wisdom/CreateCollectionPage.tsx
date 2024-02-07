import { XMarkIcon } from "@heroicons/react/16/solid";
import { Button, CenteredContainer, Header, Input, Paragraph, ShadowBox } from "components";
import { useCreateCollection } from "modules/expert";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export function CreateCollectionPage() {
    const navigate = useNavigate() 
    const [collectionName, setCollectionName] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const {mutate: createCollection, isPending} = useCreateCollection({
        onSuccess: () => {
            toast.success("Collection created successfully!");
        },
        onError: () => {
            toast.error("Collection creation failed!");
        }
    })

    const handleSubmit = () => {
        createCollection({name: collectionName, tags});
    }

    return (
        <CenteredContainer>
            <div className="w-[500px]">
                <ShadowBox>
                    <Header>Create wisdom collection</Header>
                    <div className="space-y-6 mt-6">
                        <div className="space-y-1">
                            <Paragraph>Add collection name</Paragraph>
                            <Input value={collectionName} onChange={(e) => setCollectionName(e.target.value)}/>
                        </div>
                        <div className="space-y-1">
                            <Paragraph>Add tags</Paragraph>
                            <TagCreator value={tags} onChange={setTags} />
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-8">
                        <Button onClick={() => navigate(-1)} variant="outlined">Back</Button>
                        <Button onClick={handleSubmit} isPending={isPending}>Save</Button>
                    </div>

                </ShadowBox>
            </div>
        </CenteredContainer>
    )
}

interface TagCreatorProps {
    value: string[];
    onChange: (value: string[]) => void
}

function TagCreator(props: TagCreatorProps) {
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = useCallback(() => {
        const trimmedValue = inputValue.trim();
        if (
            !trimmedValue
            || props.value.includes(trimmedValue)
        ) return;

        props.onChange([...props.value, trimmedValue]);
        setInputValue("");
    }, [props, inputValue])

    const handleTagDelete = useCallback((tagToDelete: string) => {
        props.onChange(props.value.filter((tag) => tag !== tagToDelete))
    }, [props])

    return (
        <div className="flex flex-wrap items-center w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6">
            {
                props.value.map((tag) => (
                    <div className="box-border h-7 px-3 pr-1.5 bg-purple-100 rounded-xl flex items-center text-[14px] max-h-[24px] m-[3px]" key={tag}>
                        {tag}
                        <XMarkIcon onClick={() => handleTagDelete(tag)} className="h-3 ml-1 cursor-pointer" />
                    </div>
                ))
            }
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                onKeyDown={(e) => e.key === "Enter" && handleAddTag()}
                placeholder="Add tag"
                className="block border-0 p-0 m-[3px] text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-0 focus:ring-0"
            />
        </div>
    )
}
