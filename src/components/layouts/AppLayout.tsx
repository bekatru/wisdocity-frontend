
import { Fragment, PropsWithChildren, useMemo, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    UserIcon,
    Cog6ToothIcon,
    QuestionMarkCircleIcon,
    UsersIcon,
    HomeIcon,
    ChatBubbleLeftIcon,
    XMarkIcon,
    Squares2X2Icon,
    BookOpenIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'
import { useProfile } from 'modules/auth'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'modules/routing/types'

const learnerNavigation = [
    { name: 'Home', href: Routes.Learner, icon: HomeIcon, current: true },
    { name: 'Dashboard', href: Routes.LearnerDashboard, icon: Squares2X2Icon, current: false },
    { name: 'Chats', href: Routes.LearnerChats, icon: ChatBubbleLeftIcon, current: false },
    { name: 'Community', href: Routes.LearnerCommunity, icon: UsersIcon, current: false },
    { name: 'Profile', href: Routes.LearnerProfile, icon: UserIcon, current: false },
    { name: 'Help', href: Routes.LearnerHelp, icon: QuestionMarkCircleIcon, current: false },
]

const expertNavigation = [
    { name: 'Home', href: Routes.Expert, icon: HomeIcon, current: true },
    { name: 'Avatar', href: Routes.ExpertAvatar, icon: UserCircleIcon, current: false },
    { name: 'Wisdom', href: Routes.ExpertWisdom, icon: BookOpenIcon, current: false },
    { name: 'Profile', href: Routes.ExpertProfile, icon: UserIcon, current: false },
    { name: 'Help', href: Routes.ExpertHelp, icon: QuestionMarkCircleIcon, current: false },
]
// const teams = [
//   { id: 1, name: 'Heroicons', href: '', initial: 'H', current: false },
//   { id: 2, name: 'Tailwind Labs', href: '', initial: 'T', current: false },
//   { id: 3, name: 'Workcation', href: '', initial: 'W', current: false },
// ]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function AppLayout(props: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const auth = useProfile()
    const navigate = useNavigate();

    const navigation = useMemo(() => {

        switch (auth.data?.current_role) {
            case "learner":
                return learnerNavigation;
            case "expert":
                return expertNavigation;
            default:
                return [];
        }

    }, [auth.data?.current_role])

    return (
        
            <div className=''>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-600 px-6 pb-4">
                                        <div className="flex h-16 shrink-0 items-center">
                                            {/* Logo or company name */}
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <a
                                                                    onClick={() => navigate(item.href)}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-purple-700 text-white'
                                                                            : 'text-purple-200 hover:text-white hover:bg-purple-700',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-white' : 'text-purple-200 group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                {/* <li>
                          <div className="text-xs font-semibold leading-6 text-purple-200">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-purple-700 text-white'
                                      : 'text-purple-200 hover:text-white hover:bg-purple-700',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-purple-400 bg-purple-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li> */}
                                                <li className="mt-auto">
                                                    <a
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-purple-200 hover:bg-purple-700 hover:text-white"
                                                    >
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-purple-200 group-hover:text-white"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col pt-16">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-purple-600 px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center">
                            {/* Logo or company name here*/}
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navigation.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    onClick={() => navigate(item.href)}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-purple-700 text-white'
                                                            : 'text-purple-200 hover:text-white hover:bg-purple-700',
                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current ? 'text-white' : 'text-purple-200 group-hover:text-white',
                                                            'h-6 w-6 shrink-0'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {/* <li>
                  <div className="text-xs font-semibold leading-6 text-purple-200">Your teams</div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-purple-700 text-white'
                              : 'text-purple-200 hover:text-white hover:bg-purple-700',
                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-purple-400 bg-purple-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li> */}
                                <li className="mt-auto">
                                    <a

                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-purple-200 hover:bg-purple-700 hover:text-white"
                                    >
                                        <Cog6ToothIcon
                                            className="h-6 w-6 shrink-0 text-purple-200 group-hover:text-white"
                                            aria-hidden="true"
                                        />
                                        Settings
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='lg:pl-60'>
                    {props.children}
                    </div>
                     
            </div>
        
    )
}
