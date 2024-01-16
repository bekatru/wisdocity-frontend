import { AuthPageFooter, AuthPageHeader } from "./sections";

interface AuthPageLayoutProps extends React.PropsWithChildren {
    headerText: string;
    footerText: string;
    footerCtaText: string;
    onFooterCtaClick: () => void;
}

export function AuthPageLayout(props: AuthPageLayoutProps) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <AuthPageHeader text={props.headerText}/>
            {props.children}
            <AuthPageFooter text={props.footerText} ctaText={props.footerCtaText} onCtaClick={props.onFooterCtaClick}/>
        </div>
    )
}