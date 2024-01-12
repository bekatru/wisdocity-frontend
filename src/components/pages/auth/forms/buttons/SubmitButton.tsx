interface SubmitButtonProps {
    text: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
    return (
        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
        >
            {text}
        </button>
    )
}