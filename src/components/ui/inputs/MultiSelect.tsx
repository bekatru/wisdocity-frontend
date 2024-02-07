
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';

export interface MultiSelectOption {
    id: number | string;
    value: string
}
export interface MultiSelectProps {
    options: MultiSelectOption[];
    value: MultiSelectOption | null;
    onChange: (value: MultiSelectOption) => void;
    placeholder?: string;
    multiple?: boolean;
    styled?: boolean;
}

export function MultiSelect({styled = true, ...props}: MultiSelectProps) {

    return (
        <Listbox value={props.value} onChange={props.onChange}>
            {({ open }) => (
                <div className="relative">

                        <Listbox.Button 
                            className={classNames(
                                "relative w-full cursor-default py-1.5 pl-3 pr-10 text-left text-gray-900 sm:text-sm sm:leading-6",
                                {"rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600": styled}
                            )}>
                            <span className="block truncate">
                                {  
                                        !props.value
                                        ? props.placeholder ?? "Choose an options"
                                            : props.value.value
                                }
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
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.options.map((option) => (
                                <Listbox.Option
                                    key={option.id}
                                    className={({ active }) =>
                                        classNames(
                                            active ? 'bg-purple-600 text-white' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                    }
                                    value={option}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                {option.value}
                                            </span>

                                            {selected ? (
                                                <span
                                                    className={classNames(
                                                        active ? 'text-white' : 'text-purple-600',
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
