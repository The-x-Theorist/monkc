import { InputProps } from "../../../types/body";

const Input = ({
  type = "text",
  value = 0,
  onChange,
  rounded,
  limit,
  ...otherProps
}: InputProps) => (
  <input
    type={"tel"}
    className="bg-white text-sm text-black py-2 px-4 w-24 border border-grey-light focus:border-primary outline-0"
    style={{
      boxShadow: "0px 2px 4px 0px #0000001A",
      borderRadius: rounded ? "5rem" : "",
    }}
    pattern="/^-?\d+\.?\d*$/"
    value={value}
    onChange={(e) =>
      limit && +e.target.value >= limit ? false : onChange(e.target.value)
    }
    {...otherProps}
  />
);

export default Input;
