import Image from "next/image";
import React from "react";
import EditIcon from "../../../../public/product/edit-icon.svg";
import Button from "../../button";
import Paragraph from "../../paragraph";
import { ProductButton } from "../../../../types/button";
import { useDispatch } from "react-redux";
import { AppSliceActions } from "../../../../store/store";

const ProductButton = ({
  title,
  edit = true,
  w = "long",
  product,
  ...otherProps
}: ProductButton) => {
  const dispatch = useDispatch();

  return (
    <Button w={w} {...otherProps}>
      <Paragraph>{title}</Paragraph>
      {!!edit && (
        <button
          onClick={() => {
            if (product?.id) {
              dispatch(AppSliceActions.setSelectedProduct(product));
            } else dispatch(AppSliceActions.setModal(true));
          }}
          className="flex justify-center ml-4"
        >
          <Image height={24} src={EditIcon} alt="edit-icon"></Image>
        </button>
      )}
    </Button>
  );
};

export default ProductButton;
