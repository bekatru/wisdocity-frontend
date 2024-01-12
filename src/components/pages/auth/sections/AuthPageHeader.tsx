interface AuthPageHeaderProps {
    text: string
}

export function AuthPageHeader(props: AuthPageHeaderProps) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {props.text}
            </h2>
        </div>
    )
}