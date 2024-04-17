import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

interface CardProps {
    item: { 
      id: number,
      price: number,
      title: string,
      description: string,
      image: string,
      category: string
    };
  }
  
  const Card = ({ item }: CardProps) => {
    return (
      <div className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">

<div className='flex justify-end'>
  <Link to={`/product/${item.id}`} className='h-1/3 '>
    <img
      className="rounded-t-lg object-cover"
      src={item.image}
      alt="Sunset in the mountains"
    />
  </Link>
  <div className='p-2 '>
  <CiShoppingCart className='text-2xl mt-2 cursor-pointer ' onClick={() => console.log('shipped')
  } />
  <CiHeart className='text-2xl mt-2' />

  </div>
</div>

 

<div className='h-1/3'>
    <div className="px-3 p-1  h-.5/3 bg-white">
        <a href="# flex  items-start">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
      </div>
      <div className="flex items-center justify-between p-3 h-.5/3">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
<Link to={`/product/${item.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Details</Link>
      </div>
</div>
</div>

    );
  };
  
  export default Card;
  