import Dropdown from './Dropdown';

const items= ["1","2","3","5","6","8"]
const Filter = () => {

  return (
    <div className="items-start w-1/5 p-3 py-4  shadow rounded-2xl border-1 border-black h-fit justify-between">
      <h1 className="text-2xl">Filter Products</h1>
      <Dropdown items={items}>Category</Dropdown>
      {/* <Dropdown>Brand</Dropdown> */}
      <Dropdown items={['item1 ', 'ite2']}>Price</Dropdown>
      <Dropdown items={['A-Z','Price Height to low  ', 'Price low to Height']}>Sort</Dropdown>




    </div>
  );
};

export default Filter;


