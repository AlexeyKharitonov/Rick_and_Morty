import { IOptions } from "../types/Types";

interface Props {
  sortType: string;
  options: IOptions[];
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomSelect = ({ sortType, handleSelectChange, options }: Props) => {
  return (
    <div className="w-full">
      <select
        name="list"
        value={sortType}
        onChange={handleSelectChange}
        className="w-full rounded-md p-2 bg-gray-500 text-white outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
