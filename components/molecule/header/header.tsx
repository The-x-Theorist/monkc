import Image from "next/image";
import MonkIcon from "../../../public/header/monk-icon.svg";
import { H4 } from "../../atoms/heading";

const HeaderComponents = () => {
  return (
    <div className="flex items-center">
      <Image src={MonkIcon} alt="monk-icon"></Image>
      <H4 className="ml-4 text-base font-semibold text-grey-300">
        Monk Upsell & Cross-sell
      </H4>
    </div>
  );
};

export default HeaderComponents;
