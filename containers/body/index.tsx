import { useDispatch, useSelector } from "react-redux";
import CTA from "../../components/atoms/cta/variant-1";
import Modal from "../../components/atoms/modal";
import ProductModal from "../../components/molecule/products-modal";
import { setModal } from "../../store/reducers";
import { AppSliceActions } from "../../store/store";
import Products from "./products";

const Body = () => {
  const dispatch = useDispatch<any>();
  const { modal } = useSelector((state: any) => state.app);

  return (
    <div className="h-full w-full bg-grey pl-96 py-24 overflow-y-auto">
      <div
        className="flex flex-col"
        style={{
          width: "572px",
        }}
      >
        <div>
          <Products></Products>
        </div>
        <div className="flex justify-end mt-10">
          <CTA onClick={() => dispatch(AppSliceActions.setModal(true))} reverse>
            Add Product
          </CTA>
        </div>
      </div>
      {modal && <ProductModal></ProductModal>}
    </div>
  );
};

export default Body;
