import { Dialog, Transition } from '@headlessui/react'
import classNames from 'classnames';
import { Fragment, PropsWithChildren, ReactNode, memo } from 'react'


export interface ModalProps extends PropsWithChildren {
    button?: ReactNode;
    isOpen: boolean;
    closeModal: () => void;
    isOverflowHidden?: boolean,
}

export const Modal = memo((props: ModalProps) => {
    const {isOverflowHidden=true} = props;
    return (
        <>
            {props.button}

            <Transition appear show={props.isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-slate-950/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className={classNames("w-full max-w-md transformalign-middle transition-all", isOverflowHidden && 'overflow-hidden')}>
                                    {props.children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
})