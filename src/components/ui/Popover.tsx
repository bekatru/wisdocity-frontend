import {Popover as HeadlessPopover, Transition} from '@headlessui/react'
import { Fragment, ReactNode, Ref, useState } from 'react'
import { usePopper } from 'react-popper';

interface PopoverProps {
  button: ReactNode,
  children: ReactNode
}
export function Popover(props: PopoverProps) {
  const {button, children} = props

  const [referenceElement, setReferenceElement] = useState<HTMLButtonElement>()
  const [popperElement, setPopperElement] = useState<HTMLDivElement>()
  const { styles, attributes } = usePopper(referenceElement, popperElement, {placement: 'bottom'})
  return (
    <HeadlessPopover>
      {() => (
        <>
          <HeadlessPopover.Button ref={setReferenceElement as Ref<HTMLButtonElement>}>{button}</HeadlessPopover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
        >
            <HeadlessPopover.Panel
              className="absolute z-10 mt-6 lg:max-w-3xl rounded-lg bg-white shadow"
              ref={setPopperElement as Ref<HTMLDivElement>}
              style={styles.popper}
              {...attributes.popper}
            >
                {children}
            </HeadlessPopover.Panel>
          </Transition>
        </>
      )}
    </HeadlessPopover>
  )
}