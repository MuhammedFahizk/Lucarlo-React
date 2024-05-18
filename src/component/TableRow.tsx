import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, addtoCart, decreaseItemQuantity } from '../feathers/cartSlice'; // Make sure the path is correct

const TableRow = () => {
    const { CartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

  

    return (
        <React.Fragment>
            {CartItems && CartItems.map((item, index) => (
                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-1">
                        <img src={item.image} className="w-16 md:w-32 max-w-full h-20 object-cover" alt={item.title} />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.title}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <button onClick={() => dispatch(decreaseItemQuantity(item))} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Decrease quantity</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                                </svg>
                            </button>
                            <div>
                                <input type="number" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={item.cartQuantity} readOnly />
                            </div>
                            <button onClick={() => dispatch(addtoCart(item))} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                <span className="sr-only">Increase quantity</span>
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                                </svg>
                            </button>
                        </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.price}
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() =>dispatch(removeItem(item.id))}>Remove</a>
                    </td>
                </tr>
            ))}
        </React.Fragment>
    );
};

export default TableRow;
