import React, { useEffect, useRef, useState } from 'react';
import { LuExpand } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { GoShareAndroid } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { GoStack } from "react-icons/go";
import {
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShareAltSolid } from "react-icons/lia";

const Modal = ({ isOpen, onClose, product }) => {
    const modalRef = useRef(null);
    const closeRef = useRef(null);
    const [quantity, setQuantity] = useState(1);
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target) || closeRef && closeRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div ref={modalRef} className="bg-white relative rounded-lg z-40 max-w-[80vw] mx-auto ">
                <button ref={closeRef} className="absolute shadow-m bg-white rounded-full z-50 top-0 right-0">
                    <svg
                        className="h-6 w-6  cursor-pointer hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <div className="flex flex-wrap py-2 px-1 max-h-[70vh] overflow-auto">
                    
                    <div className="flex sm:w-1/2 ">
                        
                        <div className="w-full relative">
                            <img
                                src={product.images.main}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="sm:w-1/2 px-2 max-h-[70vh] overflow-y-scroll">
                        <div className=" text-3xl font-semibold tracking-wide">
                            {product.name}
                        </div>
                        <div className="my-3 text-sm text-gray-400">
                            *****
                            <span className="mx-3 tracking-wide">({product.reviewCount} Reviews) </span>
                            
                        </div>
                        <div className="flex flex-wrap items-baseline font-semibold ">
                            <div className="text-3xl text-blue-400 mr-3">
                                ${product.discountedPrice}
                            </div>
                            <div className="text-gray-400 line-through text-xl">
                                ${product.price}
                            </div>
                        </div>

                        <div className="description my-4 border-b py-1 text-gray-700">
                            {product.description}
                        </div>

                        <div className="flex my-4">
                            <div className="flex p-3 bg-gray-200 rounded-full mr-3">
                                <button className="" onClick={()=>{setQuantity((qty)=> qty==1 ? qty : qty-1)}}>
                                    <FiMinus />
                                </button>
                                <span className="mx-6">{quantity}</span>
                                <button onClick={()=>{setQuantity((qty)=>qty+1)}}>
                                    <IoMdAdd />
                                </button>
                            </div>
                            <button className="block bg-black text-white w-full rounded-full" onClick={()=>handleCart()}>
                                Add to Cart
                            </button>
                        </div>

                        <div className="my-3 py-2">
                            <button className="block w-full rounded-full p-3 bg-blue-400 text-white">
                                Buy it Now
                            </button>
                        </div>

                        <div className="py-4 border-b">
                            <table className="text-left table-auto">
                                <tbody>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            Availibity:
                                        </th>
                                        <td>{product.stock.availibility}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            SKU:
                                        </th>
                                        <td>{product.sku}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            Categories:
                                        </th>
                                        <td>{product.category.mainCategory}
                                            {product.category.subCategory.map((value)=>{return (`, ${value}`)})}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="py-6">
                            <table className="text-left table-auto">
                                <tbody>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            <TbTruckDelivery
                                                className="inline mr-1"
                                                size={18}
                                            />
                                            Estimated Delivery:
                                        </th>
                                        <td>{product.estimatedDelivery}</td>
                                    </tr>
                                    <tr>
                                        <th className="pr-3 text-gray-700 font-medium">
                                            <LiaShareAltSolid
                                                className="inline mr-1"
                                                size={18}
                                            />
                                            Free Shipping & Returns:
                                        </th>
                                        <td>On all orders above $350</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div>
                            <fieldset className="border flex justify-center p-3">
                                <legend
                                    align="center"
                                    className="px-2 font-semibold"
                                >
                                    Guarantee Safe Checkout
                                </legend>
                                <img
                                    className=" "
                                    src="https://umino.bersky.co/media/wysiwyg/payment.png"
                                    alt=""
                                    title=""
                                    width="331"
                                    height="26"
                                    data-element="desktop_image"
                                    data-pb-style="Y9YMDHF"
                                ></img>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
