import Image from "next/image";
import { MouseEventHandler } from "react";
import CloseIcon from "../../../../public/product/close-icon.svg";

const CloseButton = ({
  size = 48,
  onClick,
}: {
  size?: number;
  onClick: MouseEventHandler;
}) => (
  <button onClick={onClick} className="ml-4">
    <Image height={size} src={CloseIcon} alt="close-icon"></Image>
  </button>
);

export default CloseButton;
