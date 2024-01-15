import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { InputLabel } from '../../../../InputLabel'

interface SelectProps {
    data?: { id: number, text: string }[]
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
// Todo: add an exhaustive list of countries
export function CountrySelect({ data = [{id: 1, text: "United States"}] }: SelectProps) {
    const [selected, setSelected] = useState(data[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <div className="relative mt-2">
                    <InputLabel text="Country"/>
                    <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-600 sm:text-sm sm:leading-6 mt-2">
                        <span className="block truncate">
                            <input
                                id="country"
                                name="country"
                                type="country"
                                autoComplete="country"
                                readOnly
                                required
                                value={selected.text}
                                className="outline-none"
                            />
                        </span>
                        
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>

                    <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {data.map((item) => (
                                <Listbox.Option
                                    key={item.id}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {item.text}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-indigo-600',
                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                    )}
                                                >
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            )}
        </Listbox>
    )
}