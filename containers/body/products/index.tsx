import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Head from "../../../components/molecule/products/head";
import Product from "../../../components/molecule/products/product";
import { AppSliceActions } from "../../../store/store";
import { Product as ProductType } from "../../../types/modal";
import { ProductProps } from "../../../types/products";

const ProductsComponent = () => {
  const { products } = useSelector((state: any) => state.app);

  const dispatch = useDispatch();
  const dragControls = useDragControls();

  const addDiscount = (product: ProductType) => {
    dispatch(AppSliceActions.addProductDiscount(product));
  };

  return (
    <div>
      <Head></Head>
      <div className="mt-6">
        <Reorder.Group
          axis="y"
          values={products}
          onReorder={(newProducts) =>
            dispatch(AppSliceActions.reorderProducts(newProducts))
          }
        >
          {!!products.length &&
            products.map((product: ProductProps, index: number) => (
              <Item
                product={product}
                index={index}
                products={products}
                addDiscount={addDiscount}
              ></Item>
            ))}
        </Reorder.Group>
        {!products.length && (
          //@ts-ignore
          <Product
            product={{
              title: "Select Product",
              variants: [],
            }}
            index={0}
            canDelete={false}
          ></Product>
        )}
      </div>
    </div>
  );
};

const Item = ({
  product,
  addDiscount,
  index,
  products,
}: {
  product: ProductProps;
  addDiscount: (product: ProductType) => void;
  index: number;
  products: ProductProps[];
}) => {
  const y = useMotionValue(0);
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={product}
      id={product?.id?.toString()}
      style={{ y }}
      dragListener={false}
      dragControls={controls}
    >
      {/* @ts-ignore */}
      <Product
        addDiscount={addDiscount}
        product={product}
        index={index}
        canDelete={products.length > 1}
        dragControls={controls}
      ></Product>
    </Reorder.Item>
  );
};

export default ProductsComponent;
