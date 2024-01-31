import StepIcon1 from '../../../../assets/home-assets/step-1-icon.svg';
import StepIcon2 from '../../../../assets/home-assets/step-2-icon.svg';
import StepIcon3 from '../../../../assets/home-assets/step-3-icon.svg';
import PlaceholderIcon from '../../../../assets/home-assets/placeholder.png';

export function HomeLearnerSteps() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">


                <div className="p-6 -py-2 bg-indigo-500 mb-3">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                                <h2>1</h2>
                                <header>
                                    <img src={StepIcon1} />
                                    <h4>Reach Global Learners Instantly</h4>
                                </header>
                                <p>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-end items-right'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 -py-2 bg-indigo-500 mb-3">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-start items-left'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>

                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                                <h2>2</h2>
                                <header>
                                    <img src={StepIcon2} />
                                    <h4>Reach Global Learners Instantly</h4>
                                </header>
                                <p>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 -py-2 bg-indigo-500 mb-3">
                    <div className='flex flex-wrap'>
                        <div className="w-full md:w-3/5">
                            <div className="w-full p-6 bg-white rounded-lg shadow dark:bg-gray-800 text-center h-full">
                                <h2>3</h2>
                                <header>
                                    <img src={StepIcon1} />
                                    <h4>Reach Global Learners Instantly</h4>
                                </header>
                                <p>Share your expertise with a worldwide audience without the constraints of physical presence. Multiply your outreach and save valuable time by being available 24/7 through your digital avatar.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-2/5">
                            <div className='w-full flex justify-end items-right'>
                                <img src={PlaceholderIcon} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
