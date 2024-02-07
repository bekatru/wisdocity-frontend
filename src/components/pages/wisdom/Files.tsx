import { useFiles } from "modules/expert";
import { Collection, WisdomFTUE } from ".";

export function Files() {
    const files = useFiles({refetchInterval: 1000, queryKey: 'files'})

    if (!files.data?.length) {
        return <WisdomFTUE/>
    }
    
    return (
        <Collection/>
    )
}