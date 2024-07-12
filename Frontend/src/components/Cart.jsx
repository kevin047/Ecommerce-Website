import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import {
    MdArrowBackIos,
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../store/products";
import { setCart, setItem } from "../store/store";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { getCartDetailsApi, updateCartDetailsApi } from "../../libs/apis";
import { toast } from "react-toastify";

function Cart() {
    const user = useSelector((state)=>state.user.user);
    const token = useSelector((state)=>state.token);
    // console.log(user)
    const {cart} = useSelector((state)=>state.shopping);
    const cartDetails = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(cartDetails)

    const getCartDetails = async ()=>{
        if(user){
            let formData = new FormData();
            const userId = user?.id;
            formData.append("customerId",userId);
            const cartDetails = await getCartDetailsApi(formData,token);
            if(cartDetails?.status){
                // console.log(cartDetails.cartList)
                dispatch(
                    setCart(
                        {
                            cart:cartDetails?.cartList,
                        }
                    )
                )
            }
        }
    }

    useEffect(()=>{
        getCartDetails();
    },[])

    async function handleCart(action,product){
        if(action==='INC'){
            let qty = Number.parseInt(product?.qty);
            qty++;
            
            let formData = new FormData();
            formData.append("id", product?.id);
            formData.append("clientId", import.meta.env.VITE_Client_Id);
            formData.append("qty", qty);
            formData.append("created_by", import.meta.env.VITE_Client_Id);
            const newCartDetails = await updateCartDetailsApi(formData);
            if(newCartDetails?.status){
                getCartDetails();
                toast.success('Cart Updated!');
            }
            else{
                toast.error(newCartDetails?.message);
            }
        }
        else if(action==='DEC'){
            let qty = Number.parseInt(product?.qty);
            qty--;
            if(qty==0){
                return;
            }
            let formData = new FormData();
            formData.append("id", product?.id);
            formData.append("clientId", import.meta.env.VITE_Client_Id);
            formData.append("qty", qty);
            formData.append("created_by", import.meta.env.VITE_Client_Id);
            const newCartDetails = await updateCartDetailsApi(formData);
            if(newCartDetails?.status){
                getCartDetails();
                toast.success('Cart Updated!');
            }
            else{
                toast.error(newCartDetails?.message);
            }
        }
    }

    const [isMediumOrLarger, setIsMediumOrLarger] = useState(
        window.innerWidth >= 768
    );

    useEffect(() => {
        const handleResize = () => {
            setIsMediumOrLarger(window.innerWidth >= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    const handleCheckout = ()=>{
        navigate('/checkout');
    }
    

    return (
        <>
            <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center ">
                <h1 className=" text-3xl font-bold">Shopping Cart</h1>
                <p>Home / Cart</p>
            </div>
            <div className="px-8 max-lg:px-2">
                <div className="flex max-lg:flex-col">
                    <div className="lg:w-3/4 max-lg:w-full mb-10">
                        {isMediumOrLarger && (
                            <table className="text-left border table-auto w-full">
                                <tbody>
                                    <tr className="">
                                        <th className="border-r p-2">Item</th>
                                        <th className="border-r p-2">Price</th>
                                        <th className="border-r p-2">Qty</th>
                                        <th className="border-r p-2">Subtotal</th>
                                    </tr>
                                    
                                    {cartDetails?.map((product)=>{
                                        return (
                                            <tr className="border">
                                                <td className="p-6 border-r w-2/5">
                                                    <div className="flex">
                                                        <div className="w-[100px] mr-3">
                                                            <img
                                                                className="border rounded-lg w-full"
                                                                src={`${product?.variantDetails?.variantImage}`}
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-between w-full">
                                                            <p className="text-md font-bold tracking-wide text-wrap">
                                                                {product?.productDetails?.productName}
                                                            </p>
                                                            <div className="flex">
                                                                <button className="mr-2" onClick={()=>navigate(`/products/${product?.productDetails?.id}`)}><CiEdit  /></button>
                                                                <button><RiDeleteBin6Line onClick={()=>handleCart('DELxxx',product)}/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    ${product?.variantDetails?.price}
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    <div className="flex w-fit p-3 bg-gray-200 rounded-full mr-3 justify-between">
                                                        <button className="" onClick={()=>handleCart('DEC',product)}>
                                                            <FiMinus />
                                                        </button>
                                                        <span className="mx-6">{product?.qty}</span>
                                                        <button  onClick={()=>handleCart('INC',product)}>
                                                            <IoMdAdd />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    ${product?.variantDetails?.price * product?.qty}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        )}

                        {!isMediumOrLarger && (
                            <div className="border p-3">
                                <ul>
                                    {cart.items.map((product)=>{
                                        return (
                                            <li className="mb-6">
                                                <div className="flex py-4 border-b">
                                                    <div className="w-[100px] mr-3">
                                                        <img
                                                            className="border rounded-lg w-full"
                                                            src={`${product.image}`}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-between w-full">
                                                        <p className="text-md font-bold tracking-wide text-wrap">
                                                            {product.name}
                                                        </p>
                                                        <div className="flex">
                                                            <CiEdit className="mr-2" />
                                                            <RiDeleteBin6Line />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="sm:hidden">
                                                    <div className="">Qty:</div>
                                                    <div className="flex w-full p-2 sm:translate-y-2 max-sm:my-3 bg-gray-200 rounded-full justify-between">
                                                        <button className="">
                                                            <FiMinus />
                                                        </button>
                                                        <span className="mx-6">{product.quantity}</span>
                                                        <button>
                                                            <IoMdAdd />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex justify-around max-sm:justify-between">
                                                    <div className="flex flex-col justify-around items-center">
                                                        <div>Price:</div>
                                                        <div>${product.unitPrice}</div>
                                                    </div>
                                                    <div className="flex flex-col justify-around items-center max-sm:hidden">
                                                        <div className="">Qty:</div>
                                                        <div className="flex w-fit p-2 translate-y-2 bg-gray-200 rounded-full justify-between">
                                                            <button className="">
                                                                <FiMinus />
                                                            </button>
                                                            <span className="mx-6">
                                                                {product.quantity}
                                                            </span>
                                                            <button>
                                                                <IoMdAdd />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-around items-center">
                                                        <div>Subtotal:</div>
                                                        <div>${product.subtotal}</div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                    
                                </ul>
                            </div>
                        )}

                        <div className="flex flex-row max-md:flex-col justify-between my-10">
                            <button className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500" onClick={()=>navigate('/shop')}>
                                <MdArrowBackIos />
                                <span className="text-sm font-bold tracking-wide text-nowrap">Continue Shopping</span>
                            </button>
                            <button
                                to="/checkout"
                                className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500"
                                onClick={() => emptyCart()}
                            >
                                <span className="text-sm font-bold tracking-wide text-nowrap">Clear Shopping Cart</span>
                            </button>
                            <button
                                className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500"                                
                            >
                                <RxUpdate className="mr-2 rotate-90"/>
                                <span className="text-sm font-bold tracking-wide text-nowrap" onClick={async ()=>{await getCartDetails(); toast.success('Cart Refreshed')}}>Update Shopping Cart</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/4 lg:pl-4">
                        <div className="bg-gray-100 p-6 rounded-lg font-semibold">
                            <div className="py-3 border-b border-gray-300 text-lg font-semibold">
                                Summary
                            </div>

                            <Accordion defaultExpanded={true} className=" transition-none" style={{ all:'unset' }}>
                                <AccordionSummary
                                className=" font-semibold cursor-pointer"
                                expandIcon={<MdKeyboardArrowDown size={20} className="cursor-pointer"/>}
                                style={{ padding:'unset'}}
                                >
                                    Estimate Shipping and Tax
                                </AccordionSummary>
                                <AccordionDetails className="text-pretty" style={{padding:'unset'}}>
                                    <div className="py-1 font-normal text-sm opacity-75">
                                        <div className="font-normal text-xs tracking-wide py-3">
                                            Enter your destination to get a shipping
                                            estimate.
                                        </div>
                                        <div className="font-normal">
                                            <label
                                                className="mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                Country
                                            </label>
                                            <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                <option value="">India</option>
                                                <option value="">America</option>
                                            </select>
                                            <label
                                                className="mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                State/Province
                                            </label>
                                            <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                <option value="">Gujarat</option>
                                                <option value="">
                                                    Madhya Pradesh
                                                </option>
                                            </select>
                                            <label
                                                className="mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                State/Province
                                            </label>
                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                            <label
                                                className="pt-4 mb-2 block font-semibold"
                                                htmlFor="grid-first-name"
                                            >
                                                Free Shipping
                                            </label>
                                            <input type="radio" />{" "}
                                            <label htmlFor="">Free $0.00</label>
                                            <label
                                                className="pt-4 mb-2 block font-semibold"
                                                htmlFor="grid-first-name"
                                            >
                                                Flat Rate
                                            </label>
                                            <input type="radio" />{" "}
                                            <label htmlFor="">Fixed $5.00</label>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                            {/* <div className="border-b border-gray-300 py-3">
                                <div className="flex justify-between py-2 text-base items-center">
                                    <div>Estimate Shipping and Tax</div>
                                    <MdKeyboardArrowUp size={20} />
                                </div>
                                <div className="py-6 font-normal text-sm opacity-75">
                                    <div className="font-normal text-xs tracking-wide py-3">
                                        Enter your destination to get a shipping
                                        estimate.
                                    </div>
                                    <div className="font-normal">
                                        <label
                                            className="mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            Country
                                        </label>
                                        <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                            <option value="">India</option>
                                            <option value="">America</option>
                                        </select>
                                        <label
                                            className="mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            State/Province
                                        </label>
                                        <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                            <option value="">Gujarat</option>
                                            <option value="">
                                                Madhya Pradesh
                                            </option>
                                        </select>
                                        <label
                                            className="mb-2"
                                            htmlFor="grid-first-name"
                                        >
                                            State/Province
                                        </label>
                                        <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        <label
                                            className="pt-4 mb-2 block font-semibold"
                                            htmlFor="grid-first-name"
                                        >
                                            Free Shipping
                                        </label>
                                        <input type="radio" />{" "}
                                        <label htmlFor="">Free $0.00</label>
                                        <label
                                            className="pt-4 mb-2 block font-semibold"
                                            htmlFor="grid-first-name"
                                        >
                                            Flat Rate
                                        </label>
                                        <input type="radio" />{" "}
                                        <label htmlFor="">Fixed $5.00</label>
                                    </div>
                                </div>
                            </div> */}

                            <div className="py-6 text-sm text-gray-700">
                                <table className="bg-white border w-full">
                                    <tbody>
                                        <tr className="border">
                                            <td className="border border-gray-300 p-2">
                                                Subtotal
                                            </td>
                                            <td className="border border-gray-300 p-2 text-right">
                                                ${cart.totalAmount}
                                            </td>
                                        </tr>

                                        <tr className="border text-black font-bold">
                                            <td className="border border-gray-300 p-2">
                                                Order Total
                                            </td>
                                            <td className="border border-gray-300 p-2 text-right">
                                                ${cart.totalAmount}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            

                            <Accordion defaultExpanded={true} className=" transition-none" style={{ all:'unset' }}>
                                <AccordionSummary
                                className=" font-semibold cursor-pointer"
                                expandIcon={<MdKeyboardArrowDown size={20} className="cursor-pointer"/>}
                                style={{ padding:'unset'}}
                                >
                                    Apply Discount Code
                                </AccordionSummary>
                                <AccordionDetails className="text-pretty" style={{padding:'unset'}}>
                                    <div className="py-6 font-normal text-sm">
                                        <div className="font-normal">
                                            <label
                                                className="mb-2"
                                                htmlFor="grid-first-name"
                                            >
                                                Enter Discount Code
                                            </label>
                                            <input
                                                className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white"
                                                placeholder="Enter Coupon Code"
                                            />
                                            <button className="px-6 py-4 rounded-full bg-white text-black hover:bg-blue-400 hover:text-white font-bold transition duration-300 ease-in border border-gray-400">
                                                Apply Discount
                                            </button>
                                        </div>
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                            <div className="border-b border-gray-300 text-sm">
                                <button className=" tracking-wide block py-3 my-4 bg-black text-white w-full rounded-full font-bold" onClick={()=>handleCheckout()}>
                                    Proceed To Checkout
                                </button>
                                <div className="my-3 flex flex-wrap">
                                    <input
                                        className="pr-1 py-1 lg:w-1/2"
                                        type="image"
                                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                                        alt="Checkout with PayPal"
                                        title="Checkout with PayPal"
                                    />
                                    <input
                                        className="pl-1 py-1 lg:w-1/2"
                                        type="image"
                                        src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit-logo-medium.png"
                                        alt="Checkout with PayPal"
                                        title="Checkout with PayPal"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
