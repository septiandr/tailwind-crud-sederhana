import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Base from '../../components/base/Base';
import { fetchData } from '../../api/Api';

interface ShippingDataItem {
  id: number;
  name: string;
}

interface ShippingGetProps {
  onClick: () => void,
  onClickItem: () => void,
  selectedItem: (e: any) => void,
}

function ShippingGet({ onClick, onClickItem, selectedItem }: ShippingGetProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [shippingData, setShippingData] = useState<ShippingDataItem[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const filteredData = shippingData.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setShippingData(filteredData);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const getShippigData = async () => {
    const response = await fetchData("/shippigComps");
    console.log("🚀 ~ getShippigData ~ response:", response)
    return response.data as ShippingDataItem[];
  };

  const onClickSelect = (data: any) => {
    onClickItem()
    selectedItem(data)
  }

  useEffect(() => {
    getShippigData().then(data => {
      setShippingData(data);
    });
  }, []);

  return (
    <div className='rounded-2xl bg-white h-full w-full px-20 py-20'>
      <div className='absolute left-14 top-28 w-full'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-3'>
            <h1 className='text-2xl font-bold'>Shipping Comps</h1>
            <button
              onClick={onClick}
              className='bg-primary rounded-full w-7 h-7 flex justify-center items-center text-white text-xl'
            >
              +
            </button>
          </div>
          <div className='flex items-center pr-32'>
            <div className='relative'>
              <input
                type='text'
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder='Search...'
                className='rounded-full h-9 px-4 border border-gray-300 focus:outline-none'
              />
              <div className='absolute right-3 top-2'>
                <FaSearch className='text-gray-400' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' mx-20 h-full rounded-lg flex flex-col justify-center'>
        <table className="table-auto w-full bg-white shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className=" text-left px-4 py-2">Name</th>
            </tr>
          </thead>
          <tbody>
            {shippingData.map((item, index) => (
              <tr onClick={() => onClickSelect(item)} key={index} className={`cursor-pointer ${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                <td className="px-4 py-2">{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default ShippingGet;
