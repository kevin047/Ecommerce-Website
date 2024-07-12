import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllAddressApi, getOrderListApi } from "../../../../libs/apis";
import { useNavigate } from "react-router-dom";

function MyAccount() {
    const user = useSelector((state)=>state?.user?.user);
    const token = useSelector((state)=>state?.token);
    // console.log(user)
    const navigate = useNavigate();

    const [addressList,setAddressList] = useState([]);
    const [orderList,setOrderList] = useState([]);
    const [currAddress, setCurrAddress] = useState({});
    const getAddress = async ()=>{
        let formData = new FormData();
        formData.append('customerId',user?.id);
        const addressList = await getAllAddressApi(formData,token);
        if(addressList?.status){
            setAddressList(()=>addressList?.addressList);
            setCurrAddress(()=>addressList?.addressList?.[0]);
        }
    }

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
        getAddress();
        getOrders();
    },[])

    return (
        <>
            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2">
                    Account Information
                </div>
                <div className="flex max-md:flex-col">
                    <div className="md:w-1/2 max-md:pb-5">
                        <div className="font-semibold py-1 text-lg">
                            Contact Information
                        </div>
                        <div className="py-2 tracking-wide">
                            <p>{user?.customerName}</p>
                            <p>{user?.customerEmail}</p>
                        </div>
                        <div className="flex text-sm">
                            <button className="mr-2">Edit</button>
                            <button>Change Password</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="font-semibold py-1 text-lg">
                            Newsletters
                        </div>
                        <div className="py-2">
                            <p>You aren't subscribed to our newsletter.</p>
                        </div>
                        <div className="flex text-sm">
                            <button className="">Edit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2 text-pretty">
                    Address Book{" "}
                    <span className="text-sm tracking-wide font-normal">
                        Manage Address
                    </span>
                </div>
                <div className="flex max-md:flex-col">
                    <div className="md:w-1/2 max-md:pb-5">
                        <div className="font-semibold py-1 text-lg">
                            Default Billing Address
                        </div>
                        <div className="py-2 tracking-wide">
                            {/* <p>fname lname</p>
                            <p>abc@gmail.com</p> */}
                            <p>{currAddress?.customerAddress}</p>
                            <p>{currAddress?.customerCity}, {currAddress?.customerState}, {currAddress?.customerPincode}</p>
                            <p className="capitalize">{currAddress?.customerCountry}</p>
                            <p>
                                T: <a href="tel:+1234567890">1234567890</a>
                            </p>
                        </div>
                        <div className="flex text-sm">
                            <button className="mr-2">Edit Address</button>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="font-semibold py-1 text-lg">
                            Default Shipping Address
                        </div>
                        <div className="py-2 tracking-wide">
                            <p>fname lname</p>
                            <p>abc@gmail.com</p>
                            <p>Address</p>
                            <p>City, State, Pincode</p>
                            <p>Country</p>
                            <p>
                                T: <a href="tel:+1234567890">1234567890</a>
                            </p>
                        </div>
                        <div className="flex text-sm">
                            <button className="mr-2">Edit Address</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border p-10 mb-10">
                <div className="text-2xl font-bold py-2 text-pretty">
                    Recent Orders <button className="text-sm tracking-wide font-normal " onClick={()=>navigate('./orders')}>
                        View all
                    </button>
                </div>
                <div className="my-4">
                    <div className="relative overflow-x-auto">
                        {orderList?.length>0 && <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
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
                                {orderList?.slice(0,3)?.map((order)=>{
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
                        {!orderList?.length>0 && <div>No Orders</div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyAccount;
