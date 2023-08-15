import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaTrash } from 'react-icons/fa'; // Import the trash icon
import { updateData } from '../../api/Api';
import { deleteData } from '../../api/Api';

interface ShippingData {
    name: string;
}
interface itemProps {
    item: {
        name:string,
        id:number
    }
}

function ShippingEdit({ item }: itemProps) {
    const { handleSubmit, control, formState: { errors } } = useForm<ShippingData>();

    const onSubmit = async(data: ShippingData) => {
        const response = await updateData("/finance/shippingComps", item.id, {data})
        console.log(data); // Log the form data for testing purposes
        // Perform your save action here using the form data
    };

    const handleDelete =async()=>{
        const res = await deleteData("finance/shoppingCamps", item.id)
    }

    return (
        <div className='rounded-2xl bg-white h-full w-full px-10 py-7'>
            <div>
                <div className="flex items-center gap-4 mb-12">
                    <h1 className='text-2xl font-bold'>
                        Edit Shipping Comps
                    </h1>
                    <button onClick={handleDelete} className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <FaTrash />
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className='text-textgray font-bold text-sm mt-12'>
                        Name
                    </label>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Name is required' }} // Add validation rule
                        render={({ field }) => (
                            <input
                                {...field}
                                value={item.name}
                                type="text"
                                id="name"
                                className="mt-1 border-2 focus:ring-indigo-500 focus:border-indigo-500 block w-1/4  h-10 shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        )}
                    />
                    {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
                </div>
                <div>
                    <button type="submit" className="bg-blue-500 text-white px-4 font-bold py-2 rounded">Simpan</button>
                </div>
            </form>
        </div>
    );
}

export default ShippingEdit;
