import { useContext, ReactNode, useState } from "react";
import { AppContext } from "../AppContextFilter";

interface Props {
  children: ReactNode;
  items: ReactNode[];
}

const Dropdown = ({ children, items }: Props) => {
  const { selectedValues, addSelectedValue, removeSelectedValue } = useContext(AppContext);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      addSelectedValue(value);
    } else {
      removeSelectedValue(value);
    }
  };
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const toggleDropdown = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  return (
    <>
      <button
        id="dropdownDelay"
        onClick={toggleDropdown}
        className="text-white w-full bg-gray-300 mt-4 justify-between font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        {children}{" "}
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isOpenCategory ? "rotate-180" : ""}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownDelay"
        className={`${
          isOpenCategory ? "block" : "hidden"
        } z-10 bg-white divide-y w-full divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDelayButton"
        >
          {items.map((item, index) => (
            <li key={index}>
              <div className="flex items-center p-2">
                <input
                  id={`checkbox-item-${children}${index}`}
                  type="checkbox"
                  checked={selectedValues.includes(item)}
                  onChange={(e) => handleCheckboxChange(e, item)}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={`checkbox-item-${children}${index}`}
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
