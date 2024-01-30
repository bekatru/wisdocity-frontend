import { Header } from "components"

interface AuthPageHeaderProps {
    text: string
}

export function AuthPageHeader(props: AuthPageHeaderProps) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
            <Header>
                {props.text}
            </Header>
        </div>
    )
}