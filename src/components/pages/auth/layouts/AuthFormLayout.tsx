interface AuthFormLayoutProps {
  children: React.ReactNode
}

export function AuthFormLayout({children}: AuthFormLayoutProps) {
    return(
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="px-6 py-6 sm:px-12">
         {children}
        </div>
      </div>
    )
}