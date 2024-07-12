import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getOrderListApi } from '../../../../libs/apis';

function MyOrders() {

    const user = useSelector((state)=>state.user.user);
    const token = useSelector((state)=>state.token);
    // console.log(user)
    const navigate = useNavigate();

    const [orderList,setOrderList] = useState([]);

    const getOrders = async ()=>{
        let formData = new FormData();
        formData.append('customerId',user?.id);
        const orderList = await getOrderListApi(formData,token);
        if(orderList?.status){
            setOrderList(()=>orderList?.customerOrderList);
            console.log(orderList?.customerOrderList);
        }
    }

    useEffect(()=>{
        getOrders();
    },[])

    const [isMediumOrLarger, setIsMediumOrLarger] = useState(
        window.innerWidth >= 640
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMediumOrLarger(window.innerWidth >= 640);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
        <div className="overflow-x-auto">
            {isMediumOrLarger &&  
            orderList?.length>0 && <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 border-b dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-2">
                            Order#
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Ship To
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Order Total
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-2">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {orderList?.map((order)=>{
                        return (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-2">{order?.orderNo}</td>
                            <td className="px-6 py-2">{order?.orderDate}</td>
                            <td className="px-6 py-2">{user?.customerName}</td>
                            <td className="px-6 py-2">${order?.netAmount}</td>
                            <td className="px-6 py-2">{order?.orderStatus}</td>
                            <td className="px-6 py-2">
                                <button className="mr-2 hover:text-black">View Order</button>
                                <button className="hover:text-black">Reorder</button>
                            </td>
                        </tr>)
                    })}
                    
                    {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-2">12000000034</td>
                        <td className="px-6 py-2">6/12/24</td>
                        <td className="px-6 py-2">fname lname</td>
                        <td className="px-6 py-2">$300.00</td>
                        <td className="px-6 py-2">Pending</td>
                        <td className="px-6 py-2">
                            <button className="mr-2 hover:text-black">View Order</button>
                            <button className="hover:text-black">Reorder</button>
                        </td>
                    </tr> */}
                    
                </tbody>
            </table>}

            {!isMediumOrLarger && 
                <>
                    <div className="flex flex-col">
                        <table className="w-full my-2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody className="text-gray-700 border dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Order#
                                    </th>
                                    <td className="px-6 py-2 border">12000000034</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Date
                                    </th>
                                    <td className="px-6 py-2 border">6/12/24</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Ship To
                                    </th>
                                    <td className="px-6 py-2 border">fname lname</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Order Total
                                    </th>
                                    <td className="px-6 py-2 border">$300.00</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Status
                                    </th>
                                    <td className="px-6 py-2 border">Pending</td>
                                </tr>
                                <tr>
                                    <th scope="col" className="px-6 py-2 border">
                                        Action
                                    </th>
                                    <td className="px-6 py-2 border">
                                        <button className="mr-2 hover:text-black">View Order</button>
                                        <button className="hover:text-black">Reorder</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            }

        </div>
    </>
  )
}

export default MyOrders