import { useNavigate, useParams } from "react-router-dom"
import { WisdomTable } from "./WisdomTable";
import { useCollections, useFiles } from "modules/expert";
import { useMemo } from "react";
import { Routes } from "modules/routing";

export function Collection() {
    const navigate = useNavigate();
    const { collectionId } = useParams();

    const collections = useCollections();

    const files = useFiles();

    const currentCollection = useMemo(() => {
        return collections.data?.find((collection) => collection.id === collectionId);
    }, [collections.data])

    const filteredFiles = useMemo(() => {
        if (!files.data) return [];
        if (!collectionId) return files.data;
        return files.data.filter((file) => file.key.includes(collectionId))
    }, [files.data, collectionId])

    return (
        <div className="space-y-6">
            <div className="text-lg font-bold px-2">{currentCollection?.name}</div>
            <WisdomTable files={filteredFiles} onAddFileClick={() => navigate( collectionId ? [Routes.ExpertWisdomUpload, collectionId].join('/') : Routes.ExpertWisdomUpload)}/>    
        </div>
    )
}