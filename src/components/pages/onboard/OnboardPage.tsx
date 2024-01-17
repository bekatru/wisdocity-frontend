import { OnboardPageLayout } from "./layouts";

interface OnboardPageProps extends React.PropsWithChildren {}

export function OnboardPage(props: OnboardPageProps) {
        return (
            <OnboardPageLayout>
                {props.children}
            </OnboardPageLayout>
        )
}