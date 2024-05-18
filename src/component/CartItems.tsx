import React from "react";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const CartItems = () => {
  const { CartItems, cartTotalAmount } = useSelector((state) => state.cart);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg   ">
        {CartItems.length > 0 ? (
          <>
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400  ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-16 py-3">
                    <span className="sr-only">Image</span>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <TableRow />
              </tbody>
            </table>
            <div className="flex  justify-end m-5">
              <h3>Sub Total </h3>
              <p className="text-1xl text-red-500 ms-10 "> {cartTotalAmount}</p>
            </div>
          </>
        ) : (
          <div className="p-5  justify-center ">
            <img
              className=" size-64"
              src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
              alt=""
            />
            <h1 className="text-3xl flex justify-center">Empty Cart</h1>
            <p className="text-1xl  text-gray-400">
              Looks like you have anything add to cart
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
