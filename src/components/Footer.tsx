
import LogoFooter from '../assets/logo-footer.svg';
import Linkedin from '../assets/linkedin.svg';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';


export function Footer() {
    return (

        <div className="bg-none">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className='bg-footer py-14 px-20 sm:py-14 mb-6'>
                    <div className="flex">
                        <div className="w-full md:w-1/2 px-4">
                            <div className='item-left'>
                                <img className='mb-[24px]' src={LogoFooter} alt='Home' />
                                <div className='flex justify-start social-card'>
                                    <a href='#'>
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                    <a className='ml-[33px]' href='#'>
                                        <img src={Facebook} alt='Facebook' />
                                    </a>
                                    <a className='ml-[33px]' href='#'>
                                        <img src={Instagram} alt='Instagram' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-4">
                            <div className='nav-links-footer'>
                                <h4 className='fn fw-sb leading-7 text-[16px] mb-[24px] text-[#FFF]'>Company</h4>
                                <ul>
                                    <li>
                                        <a href='#'>About Us</a>
                                    </li>
                                    <li>
                                        <a href='#'>News</a>
                                    </li>
                                    <li>
                                        <a href='#'>For Investors</a>
                                    </li>
                                    <li>
                                        <a href='#'>Pricing</a>
                                    </li>
                                    <li>
                                        <a href='#'>FAQ</a>
                                    </li>
                                    <li>
                                        <a href='#'>Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-1/4 px-4">
                            <div className='nav-links-footer'>
                                <h4 className='fn fw-sb leading-7 text-[16px] mb-[24px] text-[#FFF]'>Our offerings</h4>
                                <ul>
                                    <li>
                                        <a href='#'>Expert</a>
                                    </li>
                                    <li>
                                        <a href='#'>Learner</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center item-center footer-privacy mt-[70px]'>
                        <p className='fn fw-r leading-7 text-[16px] mb-[0px] text-[#B3B1C9]'>Copyright © 2024 Wisdocity AI</p>
                        <a  className='ml-[55px] fn fw-r text-[16px] mb-[0px] text-[#B3B1C9]' href='#'>Privacy Policy</a>
                        <a  className='ml-[55px] fn fw-r text-[16px] mb-[0px] text-[#B3B1C9]' href='#'>Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}