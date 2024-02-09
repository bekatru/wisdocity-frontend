import { Header, ShadowBox } from "components";
import { AuthPageFooter } from "./sections";

interface AuthPageLayoutProps extends React.PropsWithChildren {
    headerText: string;
    footerText: string;
    footerCtaText: string;
    onFooterCtaClick: () => void;
}

export function AuthPageLayout(props: AuthPageLayoutProps) {
    return (
        <div className="h-full w-full flex items-center justify-center">
            <ShadowBox className="space-y-6 min-w-lg grow max-w-lg min-w-sm">
                <Header>{props.headerText}</Header>
                {props.children}
                <AuthPageFooter text={props.footerText} ctaText={props.footerCtaText} onCtaClick={props.onFooterCtaClick} />
            </ShadowBox>
        </div>
    )
}