import { Header } from "components";
import { AuthPageFooter } from "./sections";
import { ReactNode } from "react";

interface AuthPageLayoutProps extends React.PropsWithChildren {
    headerText: string | ReactNode;
    secondaryText?: string,
    footerText: string;
    footerCtaText: string;
    onFooterCtaClick: () => void;
}

export function AuthPageLayout(props: AuthPageLayoutProps) {
    return (
            <div className="space-y-6">
                <div>
                    <Header>{props.headerText}</Header>
                    {
                        props.secondaryText
                        &&
                        <p className={"text-2xl text-center text-light mt-2"}>{props.secondaryText}</p>
                    }   
                </div>
                {props.children}
                <AuthPageFooter text={props.footerText} ctaText={props.footerCtaText} onCtaClick={props.onFooterCtaClick} />
            </div>
    )
}