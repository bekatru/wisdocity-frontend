import { XMarkIcon } from "@heroicons/react/16/solid";
import { Button, CenteredContainer, Header, Input, ShadowBox } from "components";
import { CreateCollectionResponse, useCreateCollection } from "modules/expert";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface CreateCollectionPageProps {
    onBackButtonClick?: () => void;
    onSubmitSuccess?: (responseData?: CreateCollectionResponse) => void;
}

export function CreateCollectionPage(props: CreateCollectionPageProps) {
    const navigate = useNavigate() 
    const [collectionName, setCollectionName] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);

    const {mutate: createCollection, isPending} = useCreateCollection({
        onSuccess: async (responseData: CreateCollectionResponse) => {
            toast.success("Collection created successfully!");
            props.onSubmitSuccess && (await props.onSubmitSuccess(responseData));
            props.onBackButtonClick && props.onBackButtonClick();
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
            <div className="w-[415px]">
                <ShadowBox>
                    <Header>Create new collection</Header>
                    <div className="space-y-6 mt-6">
                        <div className="space-y-1">
                            <p>Name your collection</p>
                            <Input value={collectionName} onChange={(e) => setCollectionName(e.target.value)}/>
                        </div>
                        <div className="space-y-1">
                            <p>Add custom tags</p>
                            <TagCreator value={tags} onChange={setTags} />
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-8">
                        <Button onClick={props.onBackButtonClick ? props.onBackButtonClick : () => navigate(-1)} variant="outlined">Back</Button>
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
        const splittedTags = inputValue.split(',');
        const formattedTagsResult: string[] = [];

        splittedTags.forEach(itemTag => {
            const trimmedValue = itemTag.trim();
            if (
                !trimmedValue
                || props.value.includes(trimmedValue)
            ) return;
            formattedTagsResult.push(trimmedValue)
        })
        props.onChange([...props.value, ...formattedTagsResult]);
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
                placeholder="Use commas between words to add list of tags"
                className="w-full block border-0 p-0 m-[3px] text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-0 focus:ring-0"
            />
        </div>
    )
}
