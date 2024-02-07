import { useParams } from "react-router-dom"

export function Collection() {
    
    const { collectionId } = useParams();

    return (
        <div>{collectionId}</div>
    )
}