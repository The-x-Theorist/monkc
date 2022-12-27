import { Disclosure, RadioGroup } from "@headlessui/react";
import { ItemButtonProps, VariantContainer } from "../../../../types/modal";
import CheckedIcon from "../../../../public/modal/checked-icon.svg";
import UncheckedIcon from "../../../../public/modal/unchecked-icon.svg";
import Image from "next/image";
import { ImgProps } from "../../../../types/modal";

const ItemButton = ({ item, variant = false, onSelect }: ItemButtonProps) => (
  <Container
    variant={variant}
    className="flex w-full justify-between rounded-lg bg-purple-100 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
  >
    <RadioGroup.Option
      key={item.id}
      value={item}
      className={({ active, checked }) =>
        variant
          ? `relative flex cursor-pointer border-b border-grey px-5 py-4 pl-16  focus:outline-none w-full`
          : `relative flex cursor-pointer border-b border-grey px-5 py-4  focus:outline-none w-full`
      }
      onClick={() => onSelect(item)}
    >
      {({ active }) => (
        <>
          <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center">
              <div className="text-sm w-full">
                <RadioGroup.Label
                  as="p"
                  className={`font-normal text-base text-black flex items-center w-full text-left px-2`}
                >
                  <div className="transition-all">
                    {item.checked && (
                      <div className="shrink-0 text-white">
                        <Img src={CheckedIcon} alt="checked-icon"></Img>
                      </div>
                    )}
                    {!item?.checked && (
                      <div className="shrink-0 text-white">
                        <Img src={UncheckedIcon} alt="unchecked-icon"></Img>
                      </div>
                    )}
                  </div>
                  {item?.image?.src && (
                    <div className="ml-5">
                      <Img
                        src={item.image.src}
                        alt="product-image"
                        size={32}
                      ></Img>
                    </div>
                  )}
                  <p className="ml-4">{item.title}</p>
                  {variant && (
                    <div className="flex items-center ml-auto">
                      {item?.inventory_quantity && (
                        <p>{item.inventory_quantity} available</p>
                      )}
                      <p className="ml-10">${item.price}</p>
                    </div>
                  )}
                </RadioGroup.Label>
              </div>
            </div>
          </div>
        </>
      )}
    </RadioGroup.Option>
  </Container>
);

const Container = ({ children, variant, ...otherProps }: VariantContainer) =>
  variant ? (
    <button {...otherProps}>{children}</button>
  ) : (
    <Disclosure.Button {...otherProps}>{children}</Disclosure.Button>
  );

const Img = ({ src, alt, size = 24 }: ImgProps) => (
  <Image height={size} width={size} src={src} alt={alt}></Image>
);

export default ItemButton;
