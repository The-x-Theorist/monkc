import Menu from "../../menu";
import { DiscountTypeMenuProps } from "../../../../types/discount";

const DiscountTypeMenu = ({
  activeDiscountType,
  setActiveDiscountType,
  rounded = false,
}: DiscountTypeMenuProps) => {
  return (
    <Menu
      items={[
        {
          id: 1,
          text: "% Off ",
        },
        {
          id: 2,
          text: "Flat Off ",
        },
      ]}
      activeItem={activeDiscountType}
      setActiveItem={setActiveDiscountType}
      rounded={rounded}
    ></Menu>
  );
};

export default DiscountTypeMenu;
