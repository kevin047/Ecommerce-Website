import React, { useEffect, useRef, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import {
    MdArrowBackIos,
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdKeyboardArrowUp,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

function Checkout() {
    const [isShip, setIsShip] = useState(false);
    const [isDiscount, setIsDiscount] = useState(false);
    const [selected, setSelected] = useState(-1);
    const [addressChange, setAddressChange] = useState(false);
    const [newAddress, setNewAddress] = useState('default');
    const [saveNewAddress, setsaveNewAddress] = useState(false);

    return (
        <>
            <div className=" h-32 max-sm:h-24  flex flex-col justify-center items-center ">
                <h1 className=" text-3xl font-bold">Shopping Cart</h1>
                <p>Home / Cart</p>
            </div>

            <div className="px-8 max-lg:px-2">
                <div className="flex max-lg:flex-col">
                    <div className="lg:w-3/5 mb-10">
                        <div className="flex mb-4">
                            <div className="flex flex-col w-1/2 items-center">
                                <div className="flex w-full justify-center before:h-1 before:w-full before:bg-black before:my-4 after:h-1 after:w-full after:bg-black after:my-4">
                                    <div className="flex items-center justify-center w-[40px] h-[40px] border-4 border-black rounded-full p-4">
                                        1
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    Shipping
                                </div>
                            </div>

                            <div className="flex flex-col w-1/2 items-center">
                                <div className="flex w-full opacity-20 justify-center before:h-1 before:w-full before:bg-black before:my-4 after:h-1 after:w-full after:bg-black after:my-4">
                                    <div className="flex items-center justify-center w-[40px] h-[40px] border-4 border-black rounded-full p-4">
                                        1
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    Review & Payments
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <div className="bg-gray-100 p-6 rounded-lg font-semibold">
                                <div className="py-3 border-b border-gray-300 text-2xl font-semibold">
                                    {isShip
                                        ? "Shipping Address"
                                        : "Payment Method"}
                                </div>

                                <div className={`${isShip ? "py-3" : ""}`}>
                                    {isShip && (
                                        <>
                                            <div className="py-2 font-normal text-base">
                                                <div className="font-normal">
                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        First Name
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Last Name
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Company
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Street Address
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Country
                                                    </label>
                                                    <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                        <option value="">
                                                            India
                                                        </option>
                                                        <option value="">
                                                            America
                                                        </option>
                                                    </select>

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        State/Province
                                                    </label>
                                                    <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                        <option value="">
                                                            Gujarat
                                                        </option>
                                                        <option value="">
                                                            Madhya Pradesh
                                                        </option>
                                                    </select>

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        City
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Zip/Postal Code
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />

                                                    <label
                                                        className="mb-2"
                                                        htmlFor="grid-first-name"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {!isShip && (
                                        <>
                                            <div className=" font-normal text-base">
                                                <ul>
                                                    <li className="py-6 border-b ml-2 border-gray-300">
                                                        <div>
                                                            <input
                                                                className=" scale-150 "
                                                                type="radio"
                                                                name="payment"
                                                                id=""
                                                                onChange={() => {
                                                                    setSelected(
                                                                        () => 1
                                                                    );
                                                                }}
                                                            />
                                                            <label
                                                                className="ml-5"
                                                                htmlFor=""
                                                            >
                                                                Check / Money order
                                                            </label>
                                                            {selected == 1 && (
                                                                <div className="pt-4">
                                                                    <input
                                                                        type="checkbox"
                                                                        name=""
                                                                        id=""
                                                                        onChange={() => {
                                                                            setAddressChange(
                                                                                (old) => !old
                                                                            );
                                                                        }}
                                                                    />
                                                                    <label
                                                                        className="ml-3"
                                                                        htmlFor=""
                                                                    >
                                                                        My
                                                                        billing
                                                                        and
                                                                        shipping
                                                                        address
                                                                        are the
                                                                        same
                                                                    </label>
                                                                    {!addressChange && (
                                                                        <>
                                                                            <div>
                                                                                <select onChange={(e)=>{setNewAddress(e.target.value)}} value={newAddress} className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                                                    <option value="default" disabled={true}>Select an Address</option>
                                                                                    <option value="saved">
                                                                                        Saved
                                                                                        Address
                                                                                    </option>
                                                                                    <option value="new">
                                                                                        New
                                                                                        Address
                                                                                    </option>
                                                                                </select>

                                                                                {newAddress=='new' && (<>
                                                                                    <div className="py-2 font-normal text-base">
                                                                                        <div className="font-normal">
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                First Name
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Last Name
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Company
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Street Address
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Country
                                                                                            </label>
                                                                                            <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                                                                <option value="">
                                                                                                    India
                                                                                                </option>
                                                                                                <option value="">
                                                                                                    America
                                                                                                </option>
                                                                                            </select>
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                State/Province
                                                                                            </label>
                                                                                            <select className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white">
                                                                                                <option value="">
                                                                                                    Gujarat
                                                                                                </option>
                                                                                                <option value="">
                                                                                                    Madhya Pradesh
                                                                                                </option>
                                                                                            </select>
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                City
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Zip/Postal Code
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                        
                                                                                            <label
                                                                                                className="mb-2"
                                                                                                htmlFor="grid-first-name"
                                                                                            >
                                                                                                Phone Number
                                                                                            </label>
                                                                                            <input className="rounded-full appearance-none block w-full text-gray-700 border border-gray-200 py-3 px-5 mb-3 mt-2 focus:bg-white" />
                                                                                        </div>
                                                                                    </div>

                                                                                    <input
                                                                                        type="checkbox"
                                                                                        name=""
                                                                                        id=""
                                                                                        onChange={() => {
                                                                                            setsaveNewAddress(
                                                                                                (old) => !old
                                                                                            );
                                                                                        }}
                                                                                    />
                                                                                    <label className="ml-3" htmlFor="">
                                                                                        Save in address book
                                                                                    </label>
                                                                                </>)}
                                                                            </div>

                                                                            <div className="flex flex-wrap py-4">
                                                                                <button className="px-6 py-2 rounded-full mr-2 bg-white text-black hover:bg-blue-400 hover:text-white font-bold transition duration-300 ease-in border border-gray-400">
                                                                                    Cancel
                                                                                </button>
                                                                                <button className="px-6 py-2 rounded-full bg-white text-black hover:bg-blue-400 hover:text-white font-bold transition duration-300 ease-in border border-gray-400">
                                                                                    Update
                                                                                </button>
                                                                            </div>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </li>

                                                    <li className="py-6 border-b ml-2 border-gray-300">
                                                        <div>
                                                            <input
                                                                className="scale-150 ml-2"
                                                                type="radio"
                                                                name="payment"
                                                                id=""
                                                                onChange={() => {
                                                                    setSelected(
                                                                        () => 2
                                                                    );
                                                                }}
                                                            />
                                                            <label
                                                                className="ml-5"
                                                                htmlFor=""
                                                            >
                                                                PayPal Express Checkout
                                                            </label>
                                                            {selected == 2 && (
                                                                <>
                                                                    <div className="py-4 ml-2 text-sm">
                                                                        You will be redirected to PayPal website
                                                                    </div>
                                                                    <button className="px-10 ml-2 py-2 rounded-full bg-black text-white hover:bg-blue-400 font-semibold transition duration-300 ease-in border border-gray-400">
                                                                        Continue to PayPal
                                                                    </button>
                                                                </>
                                                            )}
                                                        </div>
                                                    </li>

                                                    <li className="py-6 border-b border-gray-300">
                                                        <div>
                                                            <input
                                                                className=" scale-150 ml-2"
                                                                type="radio"
                                                                name="payment"
                                                                id=""
                                                            />
                                                            <label
                                                                className="ml-5"
                                                                htmlFor=""
                                                            >
                                                                Check / Money
                                                                order
                                                            </label>
                                                        </div>
                                                    </li>
                                                </ul>

                                                <div className="py-4">
                                                    <button
                                                        className="flex items-center justify-center"
                                                        onClick={() =>
                                                            setIsDiscount(
                                                                (old) => !old
                                                            )
                                                        }
                                                    >
                                                        <span>
                                                            Apply Discount Code{" "}
                                                        </span>
                                                        {isDiscount ? (
                                                            <MdKeyboardArrowUp
                                                                size={20}
                                                            />
                                                        ) : (
                                                            <MdKeyboardArrowDown
                                                                size={20}
                                                            />
                                                        )}
                                                    </button>
                                                    {isDiscount && (
                                                        <div className="py-1 flex flex-row max-sm:flex-col mb-3 mt-2">
                                                            <input
                                                                className="rounded-full w-full mr-2 max-sm:mb-3 appearance-none text-gray-700 border border-gray-200 py-3 px-5  focus:bg-white"
                                                                placeholder="Enter discount code"
                                                            />
                                                            <button className="px-10 py-3 border-2 text-nowrap bg-white rounded-full w-fit font-semibold hover:bg-blue-400 hover:text-white transition duration-300 ease-in">
                                                                Apply Discount
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {isShip && (
                            <>
                                <div className="">
                                    <div className="bg-gray-100 p-6 rounded-lg font-semibold">
                                        <div className="py-3 border-b border-gray-300 text-2xl font-semibold">
                                            Shipping Methods
                                        </div>

                                        <div className="py-3">
                                            <div className="py-2 font-normal text-base">
                                                <div className="flex justify-between px-6 py-2 mb-3 bg-white rounded-full">
                                                    <div className="w-1/4">
                                                        <input
                                                            type="radio"
                                                            name="shipping"
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="w-1/4">
                                                        $0.00
                                                    </div>
                                                    <div className="w-1/4">
                                                        Free
                                                    </div>
                                                    <div className="w-1/4 whitespace-nowrap max-md:overflow-scroll text-nowrap">
                                                        Free Shipping
                                                    </div>
                                                </div>
                                                <div className="flex justify-between px-6 py-2 mb-6 bg-white rounded-full">
                                                    <div className="w-1/4">
                                                        <input
                                                            type="radio"
                                                            name="shipping"
                                                            id=""
                                                        />
                                                    </div>
                                                    <div className="w-1/4">
                                                        $5.00
                                                    </div>
                                                    <div className="w-1/4">
                                                        Fixed
                                                    </div>
                                                    <div className="w-1/4 whitespace-nowrap max-md:overflow-scroll text-nowrap">
                                                        Flat Rate
                                                    </div>
                                                </div>

                                                <button className="bg-black font-semibold hover:bg-blue-400 text-white px-12 py-3 rounded-full transition duration-300 ease-in">
                                                    Next
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    <div className="lg:w-2/5">
                        <div className="lg:pl-10">
                            <div className="bg-gray-100 p-6 rounded-lg font-semibold">
                                <div className="py-3 border-b border-gray-300 text-2xl font-semibold">
                                    Order Summary
                                </div>

                                <div className="py-3 border-b">
                                    <div className="flex justify-between py-2">
                                        <div>Cart Subtotal</div>
                                        <div>$300.00</div>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <div className="flex flex-col">
                                            <div className="pb-1">Shipping</div>
                                            <div className="opacity-80">Free Shipping - Free</div>
                                        </div>
                                        <div>$300.00</div>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <div>Order Total</div>
                                        <div>$300.00</div>
                                    </div>
                                </div>

                                <div className="py-3 border-b">
                                    <div className="py-2 font-normal text-base">
                                        <div className="flex font-semibold justify-between py-2 text-base items-center">
                                            <div>1 Item in Cart</div>
                                            <MdKeyboardArrowUp size={20} />
                                        </div>

                                        <ul>
                                            <li>
                                                <div className="flex py-4 border-b">
                                                    <div className="w-[100px] mr-3">
                                                        <img
                                                            className="border rounded-lg w-full"
                                                            src="https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="flex flex-col justify-between w-full">
                                                        <p className="text-md font-semibold text-wrap">
                                                            Smart Watch Aluminum
                                                            Case - Pride
                                                            Edition/41mm - S/M
                                                        </p>
                                                        <div className="flex text-gray-400 font-semibold">
                                                            Qty: 1
                                                        </div>
                                                    </div>
                                                    <div className="text-gray-500 font-semibold px-2">
                                                        $300.00
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="py-3 border-b">
                                    <div className="py-2 font-normal text-base">
                                        <div className="flex text-lg justify-between py-2 items-center">
                                            <div>Ship To:</div>
                                            <FaRegEdit size={16} />
                                        </div>
                                        <div className="py-2">
                                            <div>fname lname addressline1 addressline2,</div>
                                            <div>State</div>
                                            <div>PinCode 390019</div>
                                            <div>Ph Number</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-3 border-b">
                                    <div className="py-2 font-normal text-base">
                                        <div className="flex text-lg justify-between py-2 items-center">
                                            <div>Shipping Method:</div>
                                            <FaRegEdit size={16} />
                                        </div>
                                        <div className="py-2">
                                            <div>Free Shipping - Free</div>
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

export default Checkout;
