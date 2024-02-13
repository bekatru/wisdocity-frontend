import { Transition } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { Paragraph } from "components";
import { ReactNode, useState } from "react";
import DoubleQuotesSvg from 'assets/svg/double-quotes.svg';
import TestimonialIcon1 from "../../../assets/home-assets/testimonial-1.png";
import TestimonialIcon2 from "../../../assets/home-assets/testimonial-2.png";
import TestimonialIcon3 from "../../../assets/home-assets/testimonial-3.png";
import TestimonialIcon4 from "../../../assets/home-assets/testimonial-4.png";

export function Testimonials() {

    const items = [
        <div className="px-12 flex justify-center space-x-6">
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Sarah McDonald's advice hit home on a personal level, leaving me feeling inspired and ready to tackle anything. Her expertise is a must-have for anyone looking to level up.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src={TestimonialIcon1}
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Edward Stone</div>
                        <div>Expert</div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Wisdocity has solved the challenge of finding time to connect with learners, allowing me to make a meaningful impact on a larger scale. The positive feedback from learners has been incredibly rewarding.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src={TestimonialIcon2}
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Rachel Felicio</div>
                        <div>Learner</div>
                    </div>
                </div>
            </div>
        </div>,
        <div className="px-12 flex justify-center space-x-6">
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    I've had an amazing experience in Wisdocity.  The platform is so easy to use, allowing me to connect with learners effortlessly. I highly recommend it to fellow experts.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src={TestimonialIcon3}
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">John Doe</div>
                        <div>Expert</div>
                    </div>
                </div>
            </div>
            <div className="w-[608px] px-10 py-16 bg-white shadow-lg rounded-[48px] space-y-8">
                <img src={DoubleQuotesSvg} alt="" />
                <Paragraph className="text-start text-xl leading-7">
                    Interacting with the experts through their avatar was such a unique and engaging experience. It felt incredibly immersive and personal.
                </Paragraph>
                <div className="flex space-x-4 items-center">
                    <img
                        className="inline-block h-[84px] w-[84px] rounded-full"
                        src={TestimonialIcon4}
                        alt=""
                    />
                    <div className="text-start">
                        <div className="text-2xl font-semibold">Jenny Wilson</div>
                        <div>Learner</div>
                    </div>
                </div>
            </div>
        </div>,

    ] as ReactNode[];

    const [currentItem, setCurrentItem] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const prev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentItem((curr) => (curr === 0 ? items.length - 1 : curr - 1));
            setTimeout(() => setIsTransitioning(false), 1100);
        }

    }
    const next = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentItem((curr) => (curr === items.length - 1 ? 0 : curr + 1));
            setTimeout(() => setIsTransitioning(false), 1100);
        }
    }

    return (
        <>
        <div className="mx-auto max-w-7xl container px-6 lg:px-8">
        <p className="text-left fn fw-r text-[24px] mt-[105px] mb-[90px] text-[#321841]">
            At the <strong>“City of Wisdom,”</strong> you will find a community of seasoned professionals generously sharing their expertise, either through their digital avatar or live, while eager learners from diverse backgrounds gather to explore, question and grow.  Whether your goal is to contribute your insights or absorb new perspectives, we invite you to become a part of a lifelong learning journey, fostering mutual enrichment and continuous growth.
        </p>
        <h3 className="ft text-[64px] text-left fn fw-r text-[#321841]">
            Impactful Stories
        </h3>
        </div>
        <section className="relative h-[514px] w-full overflow-hidden text-center mt-20">
           
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
                    <ChevronLeftIcon />
                </button>
                <button
                    className="m-4 h-8 w-8"
                    onClick={next}
                >
                    <ChevronRightIcon />
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
        </>
    )
}