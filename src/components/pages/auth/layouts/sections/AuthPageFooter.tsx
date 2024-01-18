interface AuthPageFooterProps {
    text: string
    ctaText: string;
  onCtaClick: () => void;
}

export function AuthPageFooter(props: AuthPageFooterProps) {
    return (
        <p className="text-center text-sm text-gray-500">
            {props.text}{' '}
          <a onClick={props.onCtaClick}
             className="font-semibold leading-6 text-purple-600 hover:text-accent-500 cursor-pointer">
            {props.ctaText}
          </a>
        </p>
    )
}
