import { EllipsisVerticalIcon, MagnifyingGlassIcon, PlusIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button, MultiSelect, MultiSelectOption, ShadowBox } from "components";
import { useCollections } from "modules/expert";
import { useState } from "react";

const SORT_OPTIONS = [{ id: 1, value: "Name" }, { id: 2, value: "Date" }, { id: 3, value: "Type" }, { id: 4, value: "Status" }];

export function CollectionsPage() {

    const collections = useCollections();

    const [sortOption, setSortOption] = useState<MultiSelectOption>(SORT_OPTIONS[0]);
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between flex-wrap">
                <div className="flex items-center space-x-4">

                    <div className="relative flex border h-9 w-[300px] p-2 rounded-md bg-white">
                        <MagnifyingGlassIcon
                            className="pointer-events-none absolute inset-y-0 left-2 h-full w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <input
                            id="search-field"
                            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                            placeholder="Search by name or tags"
                            type="search"
                            name="search"
                        />
                    </div>
                    <MultiSelect placeholder="Sort by" value={sortOption} options={SORT_OPTIONS} onChange={setSortOption} />
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                    <Button variant="text" className="space-x-3">
                        <PlusIcon className="h-5" />
                        <div>Add new collection</div>
                    </Button>
                    <Button variant="outlined">
                        Chat with collection
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {
                    collections.data?.map((collection) => (
                        <ShadowBox key={collection.id}>
                            <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="text-4.5 font-medium mr-auto">
                                    {collection.name}
                                </div>
                                <StarIcon className="h-6 mr-2" />
                                <EllipsisVerticalIcon className="h-5" />
                            </div>
                            <div className="flex flex-wrap items-center w-full text-gray-900 sm:text-sm sm:leading-6">
                                {
                                    ["tag", "tag2", "Business", "AI", "Investment"].map((tag) => (
                                        <div className="box-border h-7 px-3 pr-3 bg-purple-100 rounded-xl flex items-center text-[14px] max-h-[24px] mr-3 mb-3" key={tag}>
                                            {tag}
                                        </div>
                                    ))
                                }

                            </div>
                            </div>
                        </ShadowBox>
                    ))
                }
            </div>
        </div>
    )
}