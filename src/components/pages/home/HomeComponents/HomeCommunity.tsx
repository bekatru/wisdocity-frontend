import { Link } from 'react-router-dom';
import Icon1 from '../../../../assets/home-assets/icon_1.png';
import Icon2 from '../../../../assets/home-assets/icon_2.png';
import Icon3 from '../../../../assets/home-assets/icon_3.png';

export function HomeCommunity() {
    return (
        <div className="bg-none pt-5 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full lg:mx-0 text-center">
                    <h2 className="text-left ft leading-none fw-r text-[64px] mb-[60px] text-[#321841]">Unlock the Power of Community <br /> Learning at Wisdocity!</h2>
                </div>

                <div className="flex flex-wrap -mx-4">

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full  pt-8 pb-0 bg-[#F6E3FF] shadow-e text-left h-full  relative overflow-hidden	">
                            <div className='relative'>
                                <h5 className="px-8 fn fw-b text-[24px] mb-[14px] text-[#321841]">Connect with Your Role Models and Experts</h5>
                                <p className="px-8 fn fw-r leading-7 text-[16px] mb-[5px] text-[#321841]">Discover a unique opportunity to engage with your role models and industry experts. Ask questions, seek guidance, and gain personalized insights tailored to your situation and understanding.</p>
                            </div>
                            <div className=' bottom-0 flex justify-center items-center w-full px-2'>
                                <img className='w-full' src={Icon1} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full  pt-8 pb-0 bg-[#ffffff] shadow-e text-left h-full  relative overflow-hidden	">
                            <div className='relative'>
                                <h5 className="px-8 fn fw-b text-[24px] mb-[14px] text-[#321841]">Join a Thriving Learning Community</h5>
                                <p className="px-8 fn fw-r leading-7 text-[16px] mb-[5px] text-[#321841]">Be part of a dynamic community of like-minded learners. Collaborate, discuss, and brainstorm with fellow enthusiasts. Learn not just from the experts but also from each other's experiences and perspectives.</p>
                            </div>
                            <div className='absolute bottom-0 flex justify-center items-center w-full px-2'>
                                <img className='w-full' src={Icon2} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 px-4 mb-4 ">
                        <div className="w-full  pt-8 pb-0 bg-[#F6E3FF] shadow-e text-left h-full  relative overflow-hidden	">
                            <div className='relative'>
                                <h5 className="px-8 fn fw-b text-[24px] mb-[14px] text-[#321841]">Shape the Learning Experience</h5>
                                <p className="px-8 fn fw-r leading-7 text-[16px] mb-[5px] text-[#321841]">Your feedback matters! Help our experts refine their guidance by providing valuable insights. Your input ensures that the learning experience continually evolves to meet your needs and those of fellow learners.</p>
                            </div>
                            <div className='absolute bottom-0 flex justify-center items-center w-full px-2'>
                                <img className='w-full' src={Icon3} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='text-center'>
                    <h4 className='text-center fn fw-b text-[33px] mt-[20px] text-[#321841]'>Experience a transformative journey of learning, collaboration, and growth!</h4>
                    <Link to="signin/register">
                        <button type="button" className="text-white bg-btn-theme fn fw-b rounded-full px-10 py-3 text-center text-[18px] mt-[50px]">Join Wisdocity </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
