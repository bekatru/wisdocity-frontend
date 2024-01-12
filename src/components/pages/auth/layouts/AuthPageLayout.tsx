interface AuthPageLayoutProps {
    children: React.ReactNode
}

export function AuthPageLayout({ children }: AuthPageLayoutProps) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            {children}
        </div>
    )
}