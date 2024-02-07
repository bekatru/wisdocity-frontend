import { useState } from 'react';
import EditIcon from "../../../../assets/profile/icon-edit.svg";

export function EditModal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="ms-auto">
                <button className="text-black" onClick={openModal}>
                    <img src={EditIcon} alt="Edit" />
                </button>
            </div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="bg-white rounded-lg p-8 max-w-md w-full mx-auto z-50">
                        {/* Your modal content goes here */}
                        <div>
                            <h2 className="text-lg font-semibold mb-4">Edit Modal</h2>
                            {/* Close button */}
                            <button
                                className="text-sm text-gray-500 hover:text-gray-700"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
