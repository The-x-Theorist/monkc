import Image from "next/image";
import SpinnerAnimation from "../../../public/utils/spinner.svg";

const Spinner = () => (
  <div>
    <Image src={SpinnerAnimation} alt="spinner" height={48}></Image>
  </div>
);

export default Spinner;
