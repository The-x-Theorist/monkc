import { FooterProps } from "../../../../types/modal";
import CTA1 from "../../../atoms/cta/variant-1";
import CTA2 from "../../../atoms/cta/variant-2";

const Footer = ({ closeModal, onAdd }: FooterProps) => {
  return (
    <div className="py-3 px-6 flex w-full justify-end border-t border-grey z-30">
      <div className="mr-3">
        <CTA2 onClick={closeModal}>Cancel</CTA2>
      </div>
      <div>
        <CTA1 onClick={onAdd}>Add</CTA1>
      </div>
    </div>
  );
};

export default Footer;
