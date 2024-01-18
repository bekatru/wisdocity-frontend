import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { FormInput } from "components";
import { useCallback, useState } from "react";

interface GoalsFormProps {
    value: string[];
    onChange: (value: string[]) => void
}

export function GoalsForm(props: GoalsFormProps) {

    const [inputValue, setInputValue] = useState("");

    const handleAddButtonClick = useCallback(() => {
        const trimmedInputValue = inputValue.trim()
        if (!trimmedInputValue) return setInputValue("");
        
        props.onChange([...props.value, trimmedInputValue]);
        setInputValue("");
    }, [inputValue, props.value, props.onChange]);

    const handleDeleteIconClick = useCallback((goalToRemove: string) => {
        const newGoals = removeStringFromArray(goalToRemove, props.value.slice())
        props.onChange(newGoals);
    }, [props.value, props.onChange])

    return (
        <>
        <ol className="list-decimal list-inside flex flex-col space-y-2">
        {
            props.value.map((goal) => (
                <div key={goal} className="flex items-center justify-between">
                <li key={goal}>{goal}</li>
                <XMarkIcon onClick={() => handleDeleteIconClick(goal)} className="h-5 w-5 cursor-pointer"/>
                </div>
            ))
        }
        </ol>
        <div className="flex flex-row items-end space-x-2 mt-4">
            <FormInput placeholder="Add new goal" value={inputValue} onChange={(e) => setInputValue(e.target.value)} label="" className="grow"/>
            <button
                onClick={handleAddButtonClick}
                className="h-9 rounded-full bg-purple-600 p-2 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
                <PlusIcon className="h-5 w-5" aria-hidden="true" />
            </button>
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