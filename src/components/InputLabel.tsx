interface InputLabelProps extends React.PropsWithChildren {
    className?: string;
}

export function InputLabel(props: InputLabelProps) {
    return (
        <label className={["block text-sm font-medium leading-6 text-gray-900", props.className].join(' ')}>
            {props.children}
        </label>
    )
}