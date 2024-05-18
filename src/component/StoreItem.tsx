import React, { ReactNode, Suspense, useState } from "react";
import Filter from './Filter'
import { IoClose } from "react-icons/io5";

const Card = React.lazy(() => import("./Card"))

interface Props {
  fillers: ReactNode[];
  storeItem: {
    id: number;
    price: number;
    title: string;
    description: string;
    image: string;
    category: string;
  }[];
}

const StoreItem = ({ storeItem, fillers }: Props) => {
    const [product, setProduct] = useState(storeItem)

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value.toLowerCase();
        const filterProducts = storeItem.filter((item) => {
            // Check if item title is a string and includes the search text
            return typeof item.title === 'string' && item.title.toLowerCase().includes(searchText);
        });
        setProduct(filterProducts);
    }
    
  return (
    <div className="flex-col">
         <form className="max-w-md mx-auto     me-11 hidden justify-end bg-black ">
        <div className="relative  ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text"  onChange={handleSearch}  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products Name ..." required />
        </div>
        </form>
        <div className="flex justify-between p-10 gap-4  ">
       
        <Filter></Filter>
          
          <div className="flex-col items-center w-4/5 justify-between   ">
          {fillers.length > 0 && (
  <div className="flex p-3 border rounded-2xl ">
    <h3>Applied Filters : </h3>
    {fillers.map((item, _index) => (
      <button className="flex ms-2 border-2 px-2 rounded-2xl" key={_index}>
        {item} <IoClose className="mt-1 text-red-600" />
      </button>
    ))}
  </div>
)}


            <div className="grid mt-2 rounded-2xl grid-cols-2 md:grid-cols-3 w-4/4 gap-4">
              
              {product.map((item, index) => (
                      <Suspense fallback={<div>Loading...</div>}>
                <Card key={index} item={item} />
                </Suspense>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
};

export default StoreItem;
