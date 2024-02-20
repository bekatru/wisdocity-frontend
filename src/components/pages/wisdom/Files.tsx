import { useFiles } from "modules/expert";
import { Collection, WisdomFTUE } from ".";
import { Spinner } from "components";

export function Files() {
    const files = useFiles()

    if (!files.data){
        return (
            <div className={"w-full flex justify-center items-center h-96"}>
                <Spinner/>
            </div>
        )
    }
    if (files.data.length === 0) {
        return <WisdomFTUE refetchFiles={files.refetch} />
    }
    
    return (
        <Collection/>
    )
}