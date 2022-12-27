import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../api/products";
import { AppSliceActions } from "../../../store/store";
import { Product, Variant } from "../../../types/modal";
import Modal from "../../atoms/modal";
import Footer from "../modal-components/footer";
import ProductComponent from "../modal-components/product-component";
import Search from "../modal-components/search";

const ProductModal = () => {
  const {
    modal,
    selectedProduct,
    products: oldProducts,
  } = useSelector((state: any) => state.app);
  const isOpen = modal;
  const [products, setProducts] = useState<Product | any>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [paginationLoading, setPaginationLoading] = useState(false);
  const [search, setSearch] = useState<string>("");
  const [paginating, setPaginating] = useState<boolean>(true);
  const [loadMore, setLoadMore] = useState(false);

  const dispatch = useDispatch();

  const fetchProducts = async (hardSet?: boolean) => {
    try {
      const productsData = await getProducts(
        hardSet ? "" : search,
        hardSet ? 1 : page
      );
      if (productsData.length < 10) setPaginating(false);
      const newProducts = hardSet
        ? [...productsData].filter(
            (product) =>
              !oldProducts.some(
                (oldProduct: Product) => oldProduct.id === product.id
              )
          )
        : [...products, ...productsData].filter(
            (product) =>
              !oldProducts.some(
                (oldProduct: Product) => oldProduct.id === product.id
              )
          );
      if (hardSet) {
        setProducts(newProducts);
      } else {
        if (search === "") {
          if (selectedProduct?.title) {
            newProducts.unshift(selectedProduct);
          }
          setProducts(newProducts);
        }
        if (search !== "") {
          if (page === 1) setProducts([...productsData]);
          else setProducts([...products, ...productsData]);
        }
      }
      setLoading(false);
      setPaginationLoading(false);
      if (newProducts.length < 10 && paginating) setLoadMore(true);
      else setLoadMore(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (page > 1 && paginating) {
      setPaginationLoading(true);
      fetchProducts();
    }
  }, [page]);

  useEffect(() => {
    if (search !== "") {
      setLoading(true);
      fetchProducts();
    }
  }, [search]);

  const closeModal = () => {
    dispatch(AppSliceActions.setModal(false));
    setSearch("");
    setPage(1);
  };

  const alignProducts = (selectedProduct: Product) => {
    if (!selectedProduct.checked)
      setProducts(
        products.map((product: Product) => {
          if (selectedProduct.id === product.id) {
            product.variants[0] = {
              ...product.variants[0],
              checked: true,
            };
            product.variants[0].discount = {
              text: "% Off",
              type: "% Off",
              value: 0,
              productId: selectedProduct.id ?? 0,
            };
            return {
              ...product,
              checked: true,
            };
          } else return product;
        })
      );
    else
      setProducts(
        products.map((product: Product) => {
          const newProduct = { ...product };
          if (selectedProduct.id === product.id) {
            let newVariants = [...product.variants];
            newVariants = product.variants.map((variant) => ({
              ...variant,
              checked: false,
            }));
            newProduct.variants = newVariants;
            return {
              ...newProduct,
              checked: false,
            };
          } else return newProduct;
        })
      );
  };

  const alignVariants = (selectedProduct: Product) => {
    setProducts(
      products.map((product: Product) => {
        if (selectedProduct.product_id === product.id) {
          const newVariants = [...product.variants];
          const newVariantIndex = newVariants.findIndex((variant) => {
            return selectedProduct.id === variant.id;
          });

          newVariants[newVariantIndex] = {
            ...product.variants[newVariantIndex],
            checked: !product.variants[newVariantIndex].checked,
          };

          newVariants[newVariantIndex].discount = {
            value: 0,
            text: "% Off",
            type: "% Off",
            productId: selectedProduct.product_id ?? 0,
          };
          const newProduct = {
            ...product,
            checked: !!newVariants.filter((variant) => variant.checked).length,
          };
          newProduct.variants = newVariants;

          return newProduct;
        } else return product;
      })
    );
  };

  const addHandler = () => {
    const selectedProducts = products.filter((product: Product) => {
      if (product.checked) {
        return product;
      }
    });
    dispatch(AppSliceActions.setProducts(selectedProducts));
  };

  return (
    <Modal isOpen={isOpen} closeModal={closeModal} title="Select Products">
      <Dialog.Panel className="w-full flex flex-col justify-between">
        <div className="my-4 px-6">
          <Search
            setSearch={(text) => {
              if (text === "") {
                setPage(1);
                setSearch("");
                setLoading(true);
                return fetchProducts(true);
              }
              setPage(1);
              setSearch(text);
            }}
          ></Search>
        </div>
        <div className="border-t border-grey w-full">
          <ProductComponent
            incrementPage={() => {
              setPage(page + 1);
            }}
            products={products}
            loading={loading}
            setProducts={alignProducts}
            setVariants={alignVariants}
            paginationLoading={paginationLoading}
            loadMore={loadMore}
          ></ProductComponent>
        </div>
        <Footer onAdd={addHandler} closeModal={closeModal}></Footer>
      </Dialog.Panel>
    </Modal>
  );
};

export default ProductModal;
