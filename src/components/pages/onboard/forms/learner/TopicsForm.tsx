import { useCallback } from "react";

interface TopicsFormProps {
    options: string[];
    value: string[];
    onChange: (value: string[]) => void;
}

export function TopicsForm(props: TopicsFormProps) {

    const isSelected = useCallback((topic: string) => {
        return props.value.includes(topic)
    }, [props.value])

    const setSelectedTopics = useCallback((newValue: string[]) => {
        props.onChange(newValue)
    }, [props.onChange])

    const handleTopicDeselect = useCallback((topic: string) => {
        const newSelectedTopics = removeStringFromArray(topic, props.value.slice());
        setSelectedTopics(newSelectedTopics);
    }, [props.value, setSelectedTopics])


    const handleTopicSelect = useCallback((topic: string) => {
        const newSelectedTopics = [...props.value, topic];
        setSelectedTopics(newSelectedTopics);
    }, [props.value, setSelectedTopics])

    const handleTopicClick = useCallback((topic: string) => {
        if (isSelected(topic)) {
            handleTopicDeselect(topic);
        } else {
            handleTopicSelect(topic);
        }
    }, [props.value, isSelected, handleTopicSelect, handleTopicDeselect])

    return (
        <>
            <p className="text-center text-gray-500">Choose topics you are interested in</p>
            <div className="mt-4 flex justify-center flex-wrap gap-2">
                {
                    props.options.map((topic) => (
                        <span
                            key={topic}
                            onClick={() => handleTopicClick(topic)}
                            className={`${isSelected(topic) ? "bg-indigo-600 text-white" : "bg-white text-indigo-900"} inline-flex items-center rounded-full px-3 py-2 text-xs font-medium ring-1 ring-inset ring-gray-500/10 cursor-pointer`}
                        >
                            {topic}
                        </span>
                    ))
                }
            </div>
        </>
    )
}

function removeStringFromArray(targetString: string, stringArray: string[]) {
    const index = stringArray.indexOf(targetString);
    if (index !== -1) {
        stringArray.splice(index, 1);
    }
    return stringArray;
}