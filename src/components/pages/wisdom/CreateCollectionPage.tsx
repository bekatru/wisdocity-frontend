import { XMarkIcon } from "@heroicons/react/16/solid";
import { Button, CenteredContainer, Header, Input, Paragraph, MultiSelect, ShadowBox, MultiSelectOption } from "components";
import { useCollections } from "modules/expert";
import { useCallback, useMemo, useState } from "react";

enum CollectionAccessType {
    Private,
    Wisdocity,
    Public,
}

const notificationMethods = [
    { id: 'draft', title: 'Save as draft' },
    { id: 'wisdom', title: 'Upload to wisdom' },
]

const ACCESS_TYPE_OPTIONS = [
    {
        id: CollectionAccessType.Private,
        value: "Only me",
    },
    {
        id: CollectionAccessType.Wisdocity,
        value: "Wisdocity chat",
    },
    {
        id: CollectionAccessType.Public,
        value: "Everywhere my avatar is embeded",
    },
]

export function CreateCollectionPage() {
    const [mainCollection, setMainCollection] = useState<MultiSelectOption | null>(null);
    const [collectionName, setCollectionName] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [accessType, setAccessType] = useState<MultiSelectOption>(ACCESS_TYPE_OPTIONS[0]);
    // const [saveTo, setSaveTo] = useState(notificationMethods[0].id);

    const collections = useCollections();

    const mainCollectionOptions: MultiSelectOption[] = useMemo(() => {
        if (!collections.data?.length) return [];
        return collections.data.map((collection) => ({id: collection.id, value: collection.name}));
    }, [collections.data]);

    return (
        <CenteredContainer>
            <div className="w-[500px]">
                <ShadowBox>
                    <Header>Create wisdom collection</Header>
                    <div className="space-y-6 mt-6">
                        <div className="space-y-1">
                            <Paragraph>Choose main collection</Paragraph>
                            <MultiSelect options={mainCollectionOptions} onChange={setMainCollection} value={mainCollection}/>
                        </div>
                        <div className="space-y-1">
                            <Paragraph>Add collection name</Paragraph>
                            <Input value={collectionName} onChange={(e) => setCollectionName(e.target.value)}/>
                        </div>
                        <div className="space-y-1">
                            <Paragraph>Add tags</Paragraph>
                            <TagCreator value={tags} onChange={setTags} />
                        </div>
                        <div className="space-y-1">
                            <Paragraph>Access</Paragraph>
                            <MultiSelect
                                options={ACCESS_TYPE_OPTIONS}
                                value={accessType} 
                                onChange={setAccessType}
                            />
                        </div>

                        <div>
                            <p className="text-sm text-gray-500">Save this collection to</p>
                            <fieldset className="mt-4">
                                <legend className="sr-only">Notification method</legend>
                                <div className="space-y-4">
                                    {notificationMethods.map((notificationMethod) => (
                                        <div key={notificationMethod.id} className="flex items-center">
                                            <input
                                                disabled={notificationMethod.id === 'draft'}
                                                id={notificationMethod.id}
                                                name="notification-method"
                                                type="radio"
                                                defaultChecked={notificationMethod.id === 'wisdom'}
                                                className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-600"
                                            />
                                            <label htmlFor={notificationMethod.id} className="ml-3 block text-sm leading-6 text-gray-900">
                                                {notificationMethod.title}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-8">
                        <Button variant="outlined">Back</Button>
                        <Button> Save</Button>
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
