import Card from "./Card";

interface Props {
  storeItem: {
    id: number;
    price: number;
    title: string;
    description: string;
    image: string;
    category: string;
  }[];
}

const StoreItem = ({ storeItem }: Props) => {
  return (
    <div className="flex justify-between p-10 gap-4">
      <div className="items-start w-1/5 border-2 shadow rounded h-40 justify-between">
        
<h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">Choose technology:</h3>
<ul className="">
    <li>
        <input type="checkbox" id="react-option" value="" className="hidden peer" ></input>
        <label htmlFor="react-option" className="inline-flex items-center justify-between w-full p- text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div className="block">
                <div className="w-full text-lg font-semibold">React Js</div>
            </div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="flowbite-option" value="" className="hidden peer"></input>
        <label htmlFor="flowbite-option" className="inline-flex items-center justify-between w-full p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Vue Js</div>
            </div>
        </label>
    </li>
    <li>
        <input type="checkbox" id="angular-option" value="" className="hidden peer"></input>
        <label htmlFor="angular-option" className="inline-flex items-center justify-between w-full p-1 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="block">
                <div className="w-full text-lg font-semibold">Angular</div>
            </div>
        </label>
    </li>
</ul>

      </div>
      <div className="flex items-center w-4/5 justify-between  ">
        <div className="grid grid-cols-2 md:grid-cols-3 w-4/4 gap-4">
          {storeItem.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreItem;
