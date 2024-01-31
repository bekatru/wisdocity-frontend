
import React, { useState } from 'react';

const testimonialsData = [
    {
        id: 1,
        author: 'John Doe',
        position: 'CEO, Company ABC',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        author: 'Jane Smith',
        position: 'CTO, Company XYZ',
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
        id: 3,
        author: 'Jane Smith',
        position: 'CTO, Company XYZ',
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
        id: 4,
        author: 'Jane Smith',
        position: 'CTO, Company XYZ',
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more testimonials as needed
];

// ...

export function HomeTestimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === testimonialsData.length ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonialsData.length : prevSlide - 1));
    };

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto relative">
                <h2 className="text-3xl font-semibold mb-6 text-center">Client Testimonials</h2>
                <div className="relative overflow-hidden">
                    <div className="flex transition-transform ease-in-out duration-300 transform translate-x-[-100%]">
                        {/* Add a clone of the first testimonial at the end for smooth looping */}
                        {[...testimonialsData, testimonialsData[0]].map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`flex-shrink-0 w-full p-6 bg-white rounded shadow-md ${
                                    index === currentSlide ? '' : 'hidden'
                                }`}
                            >
                                <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full object-cover"
                                            src={`https://randomuser.me/api/portraits/men/${testimonial.id}.jpg`}
                                            alt={`${testimonial.author}'s portrait`}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-800">{testimonial.author}</div>
                                        <div className="text-sm text-gray-600">{testimonial.position}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-l"
                    onClick={prevSlide}
                >
                    Prev
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-r"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
