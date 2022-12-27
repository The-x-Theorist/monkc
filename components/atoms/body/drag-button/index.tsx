import Image from "next/image";
import { UIEventHandler } from "react";
import DragIcon from "../../../../public/product/drag-icon.svg";

const DragButton = ({
  height = 20,
  onDrag,
}: {
  height?: number;
  onDrag?: any;
}) => (
  <button onPointerDown={onDrag}>
    <Image height={height} src={DragIcon} alt="drag-icon"></Image>
  </button>
);

export default DragButton;
