import { ArrowLeftStartOnRectangleIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline';
import Logo from 'assets/svg/logo.svg';
import cn from 'classnames';
import { Button } from 'components';
import { useAuthTokens, useIsAuthenticated, useProfile } from 'modules/auth';
import { Routes } from 'modules/routing';
import { useNavigate } from 'react-router-dom';

export function AuthTopBar() {
    const navigate = useNavigate();
    const profile = useProfile();
    const isAuthenticated = useIsAuthenticated();
    const {removeTokens} = useAuthTokens();

    const handleSignOut = () => {
        removeTokens();
    }

    return (
        <nav
            className={cn(
                "sticky top-0 bg-white shadow-md px-10 py-4",
                "flex items-center justify-end space-x-8",
                "cursor-pointer"
            )}>
            <div
                onClick={() => navigate(Routes.Root)}
                className="hidden sm:block mr-auto font-semibold text-xl text-[#321841]"
            >
                Wisdocity.ai
            </div>
            {
                isAuthenticated && profile.data && <Example username={profile.data.username} role={profile.data.current_role} onSignOut={handleSignOut} />
            }
            <Button onClick={() => navigate(Routes.SignIn)} className="px-8" fullWidth={false} variant="outlined">Sign in</Button>
            <img
                onClick={() => navigate(Routes.Root)}
                alt="logo"
                src={Logo}
                className="h-9 mr-auto cursor-pointer"
            />
        </nav>
    )
}

import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

interface AccountMenuProps {
    username: string;
    role: string;
    onSignOut: () => void;
}

export default function Example(props: AccountMenuProps) {
    return (
        <Popover>
            {() => (
                <>
                    <Popover.Button className={"group h-9 inline-flex items-center hover:text-white focus:outline-none"}>
                        <UserIcon className="h-6 w-6 text-gray-500" />
                    </Popover.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute right-10 z-10 mt-6 min-w-[250px] px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                <div className="bg-white p-4">
                                    <div className='flex flex-col items-center my-6'>
                                        <span className="inline-block h-20 w-20 overflow-hidden rounded-full bg-gray-100">
                                            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </span>
                                        <div className="text-md text-gray-900">{props.username}</div>
                                        <div className="text-sm text-gray-500">{props.role}</div>

                                    </div>

                                    <a
                                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                        <span className="flex items-center space-x-2 cursor-pointer">
                                            <Cog6ToothIcon className="h-6"/>
                                            <span className="text-sm font-medium">
                                                Close Account
                                            </span>
                                        </span>
                                    </a>
                                    <a
                                        onClick={props.onSignOut}
                                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                    >
                                        <span className="flex items-center space-x-2 cursor-pointer">
                                            <ArrowLeftStartOnRectangleIcon className="h-6"/>
                                            <span className="text-sm font-medium text-gray-900">
                                                Sign out
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    )
}
