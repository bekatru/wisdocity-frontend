interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
}

export function PrimaryButton(props: PrimaryButtonProps) {
    return (
        <button
            onClick={props.onClick}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
            {props.text}
        </button>
    )
}