interface OnboardPageLayoutProps extends React.PropsWithChildren {}

export function OnboardPageLayout(props: OnboardPageLayoutProps) {
    return (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="mx-auto max-w-lg">

                <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
                    <div className="px-4 py-5 sm:px-6">

                        <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col space-y-4">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Onboarding
                            </h2>

                            <p className="text-gray-400 text-center">
                                We want to get you know
                            </p>

                                <Steps />
                        </div>

                    </div>
                    <div className="px-4 py-5 sm:p-6">
                        {props.children}
                    </div>
                    <div className="px-4 py-4 sm:px-6 flex space-x-6">
                        <Button variant="outlined">Skip</Button>
                        <Button>Next</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from 'components'

const steps = [
    { name: 'Step 1', href: '#', status: 'current' },
    { name: 'Step 2', href: '#', status: 'upcoming' },
    { name: 'Step 3', href: '#', status: 'upcoming' },
    { name: 'Step 4', href: '#', status: 'upcoming' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Steps() {
    return (
        <nav aria-label="Progress" className='flex items-center justify-center'>
            <ol role="list" className="flex items-center max-w-fit">
                {steps.map((step, stepIdx) => (
                    <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
                        {step.status === 'complete' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-indigo-600" />
                                </div>
                                <a
                                    href="#"
                                    className="relative flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                                >
                                    <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : step.status === 'current' ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                                    aria-current="step"
                                >
                                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true" />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <a
                                    href="#"
                                    className="group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                                >
                                    <span
                                        className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">{step.name}</span>
                                </a>
                            </>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
