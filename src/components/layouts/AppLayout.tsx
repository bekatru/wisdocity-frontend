
import { Fragment, PropsWithChildren, useMemo, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
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
    ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useProfile } from 'modules/auth'
import { useNavigate } from 'react-router-dom'
import { Routes } from 'modules/routing/types'
import { useAuthTokens } from 'modules/auth'
import { useAppLocation } from 'modules/routing'

const learnerNavigation = [
    { name: 'Home', href: Routes.Learner, icon: HomeIcon, current: true },
    { name: 'Dashboard', href: Routes.LearnerDashboard, icon: Squares2X2Icon, current: false },
    { name: 'Chats', href: Routes.LearnerChats, icon: ChatBubbleLeftIcon, current: false },
    { name: 'Community', href: Routes.LearnerCommunity, icon: UsersIcon, current: false },
    { name: 'Profile', href: Routes.LearnerProfile, icon: UserIcon, current: false },
    { name: 'Help', href: Routes.LearnerHelp, icon: QuestionMarkCircleIcon, current: false },
]

const expertNavigation = [
    { name: 'Home', href: Routes.ExpertHome, icon: HomeIcon, current: true },
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
const userNavigation = [
    { name: 'Sign out', href: '' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export function AppLayout(props: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const auth = useProfile()
    const navigate = useNavigate();
    const {isCurrentRoute} = useAppLocation();
    const { removeTokens } = useAuthTokens()

    const navigation = useMemo(() => {

        switch (auth.data?.current_role) {
            case "learner":
                return learnerNavigation.map((navigation) => ({...navigation, current: isCurrentRoute(navigation.href)}));
            case "expert":
                return expertNavigation.map((navigation) => ({...navigation, current: isCurrentRoute(navigation.href)}));
            default:
                return [];
        }

    }, [auth.data?.current_role, isCurrentRoute])

    return (
        <>
            <div className='min-h-screen'>
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
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#64108F] px-6 pb-4">
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
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#64108F] px-6 pb-4">
                        <div className="flex h-16 shrink-0 items-center justify-center">
                            <div
                                // onClick={() => navigate(Routes.Root)}
                                className="hidden sm:block mr-auto font-semibold text-xl text-white text-center"
                            >
                                Wisdocity.ai
                            </div>
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

                <div className="lg:pl-60 min-h-screen flex flex-col">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Separator */}
                        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form className="relative flex flex-1" action="#" method="GET">
                                <label htmlFor="search-field" className="sr-only">
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <input
                                    id="search-field"
                                    className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                                    placeholder="Search..."
                                    type="search"
                                    name="search"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>

                                {/* Separator */}
                                <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative">
                                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                                        <span className="sr-only">Open user menu</span>
                                        <div
                                            className="h-8 w-8 rounded-full bg-gray-50"
                                        >
                                            <UserCircleIcon />
                                        </div>
                                        <span className="hidden lg:flex lg:items-center">
                                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                                                {auth.data?.username}
                                            </span>
                                            <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <a
                                                            onClick={() => removeTokens()}
                                                            className={classNames(
                                                                active ? 'bg-gray-50' : '',
                                                                'px-3 py-1 text-sm leading-6 text-gray-900 cursor-pointer text-center flex flex-row justify-center'
                                                            )}
                                                        >
                                                            {item.name}
                                                            <ArrowRightStartOnRectangleIcon className='w-6 h-6 ml-2' />
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <main className="p-6 flex-grow flex">
                        {props.children}
                    </main>

                </div>
            </div>
        </>
    )
}
