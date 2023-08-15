import React, { useState } from 'react'
import ShippingAdd from './ShippingAdd';
import ShippingGet from './ShippingGet'
import ShippingEdit from './ShippigEdit';
import Base from '../../components/base/Base'

function Shipping() {
    const [activeComponent, setActiveComponent] = useState('get');
    const [item, setItem] = useState({
        name:'',
        id:0
    });
    console.log("🚀 ~ Shipping ~ item:", item)
    return (
        <Base>
            <div className='bg-[#BDBDBD] w-full h-full px-9 py-9'>
                {activeComponent =="get" && <ShippingGet onClick={()=> setActiveComponent("add")} onClickItem={()=> setActiveComponent("edit")} selectedItem ={(e:any)=> setItem(e)}/>}
                {activeComponent =="add" && <ShippingAdd/>}
                {activeComponent =="edit" && <ShippingEdit item ={item}/>}
            </div>
        </Base>
    )
}

export default Shipping