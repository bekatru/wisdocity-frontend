import { useLocation } from "react-router-dom"

export const useAppLocation = () => {
    const location = useLocation()

    const isCurrentRoute = (route: string) => location.pathname === route

    return {
        isCurrentRoute,
    }
}