import { useCallback, useState } from "react";

const topics: string[] = [
    "AI", "Career", "Investment", "Psychology", "Software Development", "Design", "Marketing", "Managment", "Productivuty", "Travelling", "Writing", "Music", "Lifestyle"
]

export function TopicsForm() {

    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

    const isSelected = useCallback((topic: string) => {
        return selectedTopics.includes(topic)
    }, [selectedTopics])

    const handleTopicDeselect = useCallback((topic: string) => {
        const newSelectedTopics = removeStringFromArray(topic, selectedTopics.slice());
        setSelectedTopics(newSelectedTopics);
    }, [selectedTopics])


    const handleTopicSelect = useCallback((topic: string) => {
        const newSelectedTopics = [...selectedTopics, topic];
        setSelectedTopics(newSelectedTopics);
    }, [selectedTopics])

    const handleTopicClick = useCallback((topic: string) => {
        if (isSelected(topic)) {
            handleTopicDeselect(topic);
        } else {
            handleTopicSelect(topic);
        }
    }, [selectedTopics])

    return (
        <>
            <p className="text-center text-gray-500">Choose topics you are interested in</p>
            <div className="mt-4 flex justify-center flex-wrap gap-2">
                {
                    topics.map((topic) => (
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