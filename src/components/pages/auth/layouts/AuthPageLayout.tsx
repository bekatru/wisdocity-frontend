import { Header } from "components";
import { AuthPageFooter } from "./sections";

interface AuthPageLayoutProps extends React.PropsWithChildren {
    headerText: string;
    footerText: string;
    footerCtaText: string;
    onFooterCtaClick: () => void;
}

export function AuthPageLayout(props: AuthPageLayoutProps) {
    return (
            <div className="space-y-6">
                <Header>{props.headerText}</Header>
                {props.children}
                <AuthPageFooter text={props.footerText} ctaText={props.footerCtaText} onCtaClick={props.onFooterCtaClick} />
            </div>
    )
}