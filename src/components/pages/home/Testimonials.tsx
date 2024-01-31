import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { Paragraph } from "components";
import { ReactNode, useEffect, useState } from "react";
import DoubleQuotesSvg from 'assets/svg/double-quotes.svg';

export function Testimonials() {
    const INTERVAL_LENGTH = 5000;
    const AUTOPLAY = true;

    const items = [
        <div className="px-12 flex justify-center space-x-6">
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Tim Cook</div>
                        <div>CEO of Apple</div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Tim Cook</div>
                        <div>CEO of Apple</div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="px-12 flex justify-center space-x-6">
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Tim Cook</div>
                        <div>CEO of Apple</div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con. Ut enim ad minim veniam, quis nostrud exercitation. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Tim Cook</div>
                        <div>CEO of Apple</div>
                    </div>
                </div>
            </div>
        </div>,

    ] as ReactNode[];

    const [currentItem, setCurrentItem] = useState(0);

    const prev = () =>
        setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
    const next = () =>
        setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!AUTOPLAY) return;
        const interval = setInterval(next, INTERVAL_LENGTH);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative h-[514px] w-full overflow-hidden text-center">
            {items.map((item, index) => (
                <Transition
                    key={index}
                    show={currentItem === index}
                    enter="transition ease-out duration-1000"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in duration-1000"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                >
                    <div className="absolute w-full">{item}</div>
                </Transition>
            ))}
            {/* Controls */}
            <div className="absolute w-full h-full items-center flex justify-between">
                <button
                    className="m-4 h-8 w-8"
                    onClick={prev}
                >
                    <ChevronLeftIcon/>
                </button>
                <button
                    className="m-4 h-8 w-8"
                    onClick={next}
                >
                    <ChevronRightIcon/>
                </button>
            </div>
            {/* Indicator */}
            <div className="absolute bottom-0 flex w-full justify-center gap-4">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={classNames("h-[14px] w-[14px] rounded-full duration-1000", {
                            "bg-slate-300": index !== currentItem,
                            "bg-purple-600": index === currentItem
                        })}
                    />
                ))}
            </div>
        </section>
    )
}