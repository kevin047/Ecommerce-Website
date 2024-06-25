import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import {
    MdArrowBackIos,
    MdFavoriteBorder,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { products } from "../store/products";
import { setCart } from "../store/store";

function Cart() {

    const {cart} = useSelector((state)=>state.shopping);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(cart)

    function handleCart(action,product){
        dispatch(
            setCart(
                {
                    action:action,
                    product:{
                        productId: product.productId,
                        quantity: 1,
                    }
                }
            )
        )
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
                                    
                                    {cart.items.map((product)=>{
                                        return (
                                            <tr>
                                                <td className="p-6 border-r w-2/5">
                                                    <div className="flex">
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
                                                                <button className="mr-2" onClick={()=>navigate(`/products/${product.productId}`)}><CiEdit  /></button>
                                                                <button><RiDeleteBin6Line onClick={()=>handleCart('DEL',product)}/></button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    ${product.unitPrice}
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    <div className="flex w-fit p-3 bg-gray-200 rounded-full mr-3 justify-between">
                                                        <button className="" onClick={()=>handleCart('DEC',product)}>
                                                            <FiMinus />
                                                        </button>
                                                        <span className="mx-6">{product.quantity}</span>
                                                        <button  onClick={()=>handleCart('INC',product)}>
                                                            <IoMdAdd />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="p-6 border-r w-1/5">
                                                    ${product.subtotal}
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
                                            <li>
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
                            <button className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500">
                                <MdArrowBackIos />
                                <span className="text-sm font-bold tracking-wide text-nowrap">Continue Shopping</span>
                            </button>
                            <Link
                                to="/checkout"
                                className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500"
                            >
                                <span className="text-sm font-bold tracking-wide text-nowrap">Clear Shopping Cart</span>
                            </Link>
                            <button
                                className="border flex items-center justify-center my-1 py-3 px-7 rounded-3xl hover:bg-blue-400 hover:text-white transition duration-500"
                                onClick={() => emptyCart()}
                            >
                                <RxUpdate className="mr-2 rotate-90"/>
                                <span className="text-sm font-bold tracking-wide text-nowrap">Update Shopping Cart</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:w-1/4 lg:pl-4">
                        <div className="bg-gray-100 p-6 rounded-lg font-semibold">
                            <div className="py-3 border-b border-gray-300 text-lg font-semibold">
                                Summary
                            </div>

                            <div className="border-b border-gray-300 py-3">
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
                            </div>

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

                            <div className="border-b border-gray-300 py-3">
                                <div className="flex justify-between py-2 text-base items-center">
                                    <div>Apply Discount Code</div>
                                    <MdKeyboardArrowUp size={20} />
                                </div>
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
                                        <button className=" tracking-wide block py-3 my-4 bg-black text-white w-full rounded-full font-bold">
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
                </div>
            </div>
        </>
    );
}

export default Cart;
