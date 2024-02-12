import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Import your custom icons
import logo from "../assets/logo.svg";
import logoText from "../assets/logo-text.svg";
import ExpertsIcon from '../assets/experticon.svg';
import LearnersIcon from '../assets/learnericon.svg';
import CircleIcon from '../assets/circles.svg';
import { useNavigate } from 'react-router';
import { Routes } from 'modules/routing';

const navigation = [
  { name: 'Experts', href: Routes.Experts, icon: ExpertsIcon, current: false, },
  { name: 'Learners', href: Routes.Learners, icon: LearnersIcon, current: false,  customClass: 'ml80'  },
  {
    name: '', href: '#', icon: CircleIcon, current: false, subItems: [
      { name: 'About Us', href: '#', current: false },
      { name: 'News', href: '#', current: false },
      { name: 'For Investors', href: '#', current: false },
      { name: 'Pricing', href: '#', current: false },
      { name: 'FAQ', href: '#', current: false },
      { name: 'Contact Us', href: '#', current: false },
    ]
  },
  { name: 'Log In', href: Routes.SignIn, current: false, customClass: 'LoginBtns' },
  { name: 'Sign Up', href: Routes.Register, current: false, customClass: 'SignupBtns' },
  // ... other navigation items excluding image rendering
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function TopBar() {
  const navigate = useNavigate();
  return (
    <div className="navbar-main sticky top-0 z-50 bg-white">
      <Disclosure as="nav" className="bg-none py-4">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <Link to="/" className="flex content-center items-center cursor-pointer">
                        <span className="sr-only">Wisdocity</span>
                        <img className="w-auto" src={logo} alt="Wisdocity" />
                        <span className='logo-text'><img className="w-auto" src={logoText} alt="Wisdocity" /></span>
                        </Link>
                  {/* ... rest of the code */}

                </div>
                <div className="absolute inset-y-0 right-0 flex items-right sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <div key={item.name} className={`relative ${item.customClass ? item.customClass : ''}`}>

                        {item.subItems ? (
                          <Menu as="div" className="relative inline-block text-left">
                            <div>
                              <Menu.Button className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                                'rounded-md px-3 py-2 text-sm font-medium nav-link-top fn fw-m ml130 cursor-pointer'
                              )}>
                                {/* Use img tag for icons */}
                                {item.icon && <img src={item.icon} alt={item.name} className="h-6 w-6" />}
                              </Menu.Button>
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-1 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none nav-link-dropdown">
                                {item.subItems.map((subItem) => (
                                  <Menu.Item key={subItem.name}>
                                    {({ active }) => (
                                      <a
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 w-full nav-link-top fn fw-m drp-link fn fw-r d-i text-left cursor-pointer')}
                                      >
                                        {subItem.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </Menu.Items>
                            </Transition>
                          </Menu>
                        ) : (
                          <a
                            onClick={() => navigate(item.href)}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 nav-link-top fn fw-m cursor-pointer',
                              'rounded-md px-3 py-2 text-sm font-medium nav-link-top fn fw-m'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {/* Use img tag for icons */}
                            {item.icon && <img src={item.icon} alt={item.name} className="h-8 w-8" />}
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 	mobile-menu">
                {navigation.map((item) => (
                    <div key={item.name} className={`relative ${item.customClass ? item.customClass : ''}`}>
                    {item.subItems ? (
                      <Menu as="div" className="relative ok inline-block text-left">
                        <div>
                          <Menu.Button className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>
                            {/* Use img tag for icons */}
                            {item.icon && <img src={item.icon} alt={item.name} className="h-8 w-8" />}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="right-0 mt-2 w-48 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {item.subItems.map((subItem) => (
                              <Menu.Item key={subItem.name}>
                                {({ active }) => (
                                  <a
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 nav-link-top cursor-pointer')}
                                  >
                                    {subItem.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    ) : (
                      <a
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                          'rounded-md px-3 py-2 text-sm font-medium nav-link-top cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {/* Use img tag for icons */}
                        {item.icon && <img src={item.icon} alt={item.name} className="h-8 w-8" />}
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
