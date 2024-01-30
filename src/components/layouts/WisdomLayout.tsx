import { Button } from "components";
import { PropsWithChildren } from "react";

let files = [];

export function WisdomLayout(props: PropsWithChildren) {

    const noFiles = !files.length

    return noFiles 
        ? (
            <div className="w-full h-full flex flex-col justify-center items-center text-center max-w-lg mx-auto">
                <h1 className="text-2xl font-semibold">Here is your Wisdom Collection</h1>
                <p className="text-sm leading-5 text-gray-500 max-w-lg mt-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis 
                </p>
                <div className="w-full flex space-x-6 mt-8 justify-between px-16">
                <Button>Upload</Button>
                <Button variant="outlined">Create Collection</Button>
                </div>
            </div>
        ) : (
            <div>Wisdom {props.children}</div>
        )
}