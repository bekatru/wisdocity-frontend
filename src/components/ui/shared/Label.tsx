interface LabelProps extends React.PropsWithChildren {
    className?: string;
}

export function Label(props: LabelProps) {
    return (
        <label className={["block text-sm leading-6 text-gray-900", props.className].join(' ')}>
            {props.children}
        </label>
    )
}