interface InputMessageProps extends React.PropsWithChildren {
    className?: string;
}

export const InputLabel: React.FC<InputMessageProps> = (props) => {
    return (
        <label className={["block text-sm font-medium leading-6 text-gray-900", props.className].join(' ')}>
            {props.children}
        </label>
    )
}