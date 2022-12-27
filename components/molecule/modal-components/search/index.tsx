import Image from "next/image";
import SearchIcon from "../../../../public/modal/search-icon.svg";
import { SearchProps } from "../../../../types/modal";

const Search = ({ setSearch }: SearchProps) => {
  let timer: number;

  const debounce = (func: Function) => {
    if (timer) clearTimeout(timer);
    setTimeout(func, 1000);
  };

  return (
    <div className="w-full">
      <div className="border border-grey-light p-2 px-4 flex w-full items-center">
        <Image src={SearchIcon} alt="search-icon"></Image>
        <input
          type="text"
          className="ml-4 bg-white text-base text-black placeholder:font-normal outline-0 w-full"
          placeholder="Search product"
          onChange={(e) => debounce(() => setSearch(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Search;
