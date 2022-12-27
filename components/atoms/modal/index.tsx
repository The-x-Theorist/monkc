import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ModalProps } from "../../../types/modal";
import CloseIcon from "../../../public/modal/close-icon.svg";
import Image from "next/image";

const Modal = ({ children, closeModal, isOpen, title }: ModalProps) => {
  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>
          <div
            className="fixed inset-0 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-black py-4 px-6 border-b border-grey pb-3 flex items-center w-full justify-between"
                  >
                    {title}
                    <button onClick={closeModal} className="outline-0">
                      <Image src={CloseIcon} alt="close-icon"></Image>
                    </button>
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
