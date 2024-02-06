import JoinIcon from '../../../../assets/learner-assets/join-peoples.png';

export function JoinWisdocity() {
    return (
        <div className="bg-none py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="bg-[#EAE7FC] rounded-[36px] py-8 px-8 mb-[70px]">
                    <div className="flex items-start">
                        <div className="flex-grow mt-[14px]">
                            <h4 className='ft fw-r text-[48px] text-[#321841] mb-[14px]'>Join Wisdocity Now</h4>
                            <p className='fn fw-r text-[20px] text-[#3C3545] mb-[28px]'>Join us and let the journey to knowledge excellence begin!</p>
                            <button type="button" className="text-white bg-btn-theme fn fw-sb fw-r rounded-full px-14 py-3 text-center text-[16px]">Join</button>
                        </div>
                        <div className='flex'>
                            <img src={JoinIcon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
