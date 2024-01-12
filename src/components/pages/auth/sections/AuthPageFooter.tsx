interface AuthPageFooterProps {
    text: string
    ctaText: string
}

export function AuthPageFooter(props: AuthPageFooterProps) {
    return (
        <p className="text-center text-sm text-gray-500">
            {props.text}{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-accent-500">
                {props.ctaText}
            </a>
        </p>
    )
}