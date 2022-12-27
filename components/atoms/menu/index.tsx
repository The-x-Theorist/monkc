import { Menu as MenuComponent, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import { MenuProps } from "../../../types/discount";
import DropdownIcon from "../../../public/product/drop-variant-1/drop-down.svg";
import DropUpIcon from "../../../public/product/drop-variant-1/drop-up.svg";

const Menu = ({ items, activeItem, setActiveItem, rounded }: MenuProps) => {
  return (
    <MenuComponent>
      {({ open }) => (
        <>
          <div>
            <MenuComponent.Button
              className="bg-white px-4 py-2 text-sm text-black w-28 text-left border border-grey-light flex justify-between items-center"
              style={{
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderColor: open ? "#008060" : "",
                borderRadius: rounded ? "5rem" : "",
              }}
            >
              {activeItem.text}
              {!open && <Image src={DropdownIcon} alt="drop-down-icon"></Image>}
              {!!open && <Image src={DropUpIcon} alt="drop-down-icon"></Image>}
            </MenuComponent.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuComponent.Items
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-grey-light bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black border border-grey-light z-20"
              style={{
                borderRadius: rounded ? "14px" : "",
              }}
            >
              {!!items.length &&
                items.map((item, i) => {
                  const { id, text } = item;
                  return (
                    <MenuComponent.Item key={i}>
                      {({ active }: { active: boolean }) => (
                        <button
                          className={`${
                            active || activeItem.id === id ? "text-primary" : ""
                          } group flex w-full items-center px-3 py-2 text-sm rounded-0`}
                          onClick={() => {
                            setActiveItem(item);
                          }}
                        >
                          {text}
                        </button>
                      )}
                    </MenuComponent.Item>
                  );
                })}
            </MenuComponent.Items>
          </Transition>
        </>
      )}
    </MenuComponent>
  );
};

export default Menu;
