import { useFiles } from "modules/expert";
import { Collection, WisdomFTUE } from ".";

export function Files() {
    const files = useFiles()

    if (!files.data?.length) {
        return <WisdomFTUE/>
    }
    
    return (
        <Collection/>
    )
}