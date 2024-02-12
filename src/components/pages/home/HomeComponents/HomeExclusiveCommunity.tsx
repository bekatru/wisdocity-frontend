import { Link } from 'react-router-dom';
import Icon1 from '../../../../assets/home-assets/exclusive-icon-1.svg';
import Icon2 from '../../../../assets/home-assets/exclusive-icon-2.svg';

export function HomeExclusiveCommunity() {
    return (
        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/4 px-4 mb-4">
                        <div className="w-full text-left h-full">
                            <div className='flex justify-left items-left'>
                                <img src={Icon1} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 px-4 mb-4 flex justify-center items-center">
                        <div className="w-full text-center">
                            <h2 className="ft w-full leading-none fw-r text-[64px] mb-[40px] text-[#321841]">Immortalize Your <br />Wisdom! </h2>
                            <div className='text-center'>
                                <Link to="signin/register/expert">
                                    <button type="button" className="text-white bg-btn-theme fn fw-b rounded-full px-10 py-3 text-center text-[18px]">Join as an expert</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-4 mb-4">
                        <div className="w-full text-right h-full">
                            <div className='flex justify-end items-right'>
                                <img src={Icon2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
