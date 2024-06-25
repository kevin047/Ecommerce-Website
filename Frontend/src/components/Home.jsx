import React, { useContext, useState } from 'react'
import { MdFavoriteBorder, MdKeyboardArrowDown, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom'
import "./Home.css"
import { IoMenuSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiDiscountPercentFill } from 'react-icons/ri';
import { FiShoppingBag } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { HiOutlineEye } from "react-icons/hi2";
import { PiPackage } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from '../store/store';
import Modal from './Modal';

function Home() {
    const navigate = useNavigate();
    const {deals, details} = useSelector((state)=>state.products);
    const dispatch = useDispatch();

    const [productModal, setProductModal] = useState(null)

    const handleCart = (event,product)=>{
        event.stopPropagation();
        dispatch(
            setCart(
                {
                    action:'INC',
                    product:{
                        productId: product.productId,
                        name: product.name,
                        image: product.images.main,
                        quantity: 1,
                        unitPrice: product.discountedPrice,
                        subtotal: +(product.discountedPrice).toFixed(2),
                    }
                }
            )
        )
    }


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (event,product) => {
        event.stopPropagation();
        setProductModal(product);
        setIsModalOpen(true);
    }
    const closeModal = () => {
        setProductModal(null);
        setIsModalOpen(false);
    }

  return (
    <>
        
        {/* <div className="flex items-center justify-center min-h-screen bg-gray-200">
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={openModal}
            >
                Open Modal
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} product/>
        </div> */}
        

        {/* Carousel */}
        <div className=''>
            <img className='' src="https://umino.bersky.co/media/revslider/dgt3_s2_1.jpg" alt="" />
        </div>

        

        
        {/* Shop Deals */}
        <div className='flex flex-wrap max-md:flex-col justify-center px-10 max-lg:px-2'>
            <div className="relative  md:flex-1 overflow-hidden h-52 my-2 md:mx-2 max-md:w-full">
                <img src="https://umino.bersky.co/media/wysiwyg/1_e1.jpg" alt="Card Image" className="absolute h-full w-full object-cover transition duration-500 ease-in-out hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-10 pointer-events-none">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4 w-2/3">Gamepad Save Up To $69</h2>
                        <p className="text-lg mt-10 underline underline-offset-2">Shop Gamepad</p>
                    </div>
                </div>
            </div>
            <div className="relative md:flex-1 overflow-hidden h-52 my-2 md:mx-2 max-md:w-full">
                <img src="https://umino.bersky.co/media/wysiwyg/1_e1.jpg" alt="Card Image" className="absolute h-full w-full object-cover transition duration-500 ease-in-out hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-10 pointer-events-none">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4 w-2/3">Gamepad Save Up To $69</h2>
                        <p className="text-lg mt-10 underline underline-offset-2">Shop Gamepad</p>
                    </div>
                </div>
            </div>
            <div className="relative md:flex-1 overflow-hidden h-52 my-2 md:mx-2 max-md:w-full max-md:flex">
                <img src="https://umino.bersky.co/media/wysiwyg/1_e1.jpg" alt="Card Image" className="absolute h-full w-full object-cover transition duration-500 ease-in-out hover:scale-105" />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-between p-10 pointer-events-none">
                    <div className="text-white">
                        <h2 className="text-2xl font-bold mb-4 w-2/3">Gamepad Save Up To $69</h2>
                        <p className="text-lg mt-10 underline underline-offset-2">Shop Gamepad</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-between px-10 py-10">
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                    <img className='hover:scale-110 transition duration-500 ease-in-out ' src="https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png" alt="" />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='text-md'>Macbook & PCs</div>
                    <div className='text-xs text-gray-500'>23 items</div>
                </div>
            </div>
        </div>

        {/* Top Deals  */}
        <div className='px-10 max-lg:px-2 my-10'>
            <div className='flex flex-wrap justify-between border-b border-b-gray-400 pb-2'>
                <div className='text-3xl max-sm:text-xl flex items-center pb-2'>Top Deals Of the Day</div>
                <div className='text-md max-sm:text-sm flex justify justify-evenly text-white font-semibold'>
                    <p className='text-gray-700 flex items-center'>Hurry up! Offer ends in:</p>
                    <div className='mx-1 p-2 bg-red-700 rounded-md flex items-center'>1841</div>
                    <div className='mx-1 p-2 bg-red-700 rounded-md flex items-center'>13</div>
                    <div className='mx-1 p-2 bg-red-700 rounded-md flex items-center'>47</div>
                    <div className='mx-1 p-2 bg-red-700 rounded-md flex items-center'>47</div>
                </div>
            </div>
            <div className="flex justify-around flex-wrap my-10">
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} product={productModal}/>}
                { details.map((product)=>{
                    return (
                        <>
                        
                        <div className="flex flex-col items-center  w-[258px] px-1 border-r">
                            <div className='h-auto w-auto relative group overflow-hidden cursor-pointer' onClick={()=>navigate(`/products/${product.productId}`)}>
                                <img className='pointer-events-none' src={`${product.images.main}`} alt=""/>
                                <div className="absolute h-full flex flex-col top-0 right-0 opacity-0  group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <button className="mb-1 mt-6 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Cart" onClick={(event)=>{handleCart(event,product)}}><FiShoppingBag /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Wishlist"><MdFavoriteBorder /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Compare"><GoStack /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Quick View" onClick={(event)=>{openModal(event,product)}}><HiOutlineEye /></button>
                                </div>
                                <div className="absolute top-1 left-1">
                                    <span className='rounded-full bg-blue-400 text-white font-semibold  px-2 py-0.5 text-sm'>-{product.discountPercentage}%</span>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between flex-1'>
                                <div className='text-gray-400 text-xs uppercase tracking-wide font-semibold'>{product.brand}</div>
                                <div className='text-sm tracking-wide cursor-pointer' onClick={()=>navigate(`/products/${product.productId}`)}>{product.name}</div>
                                <div>***** {product.rating}</div>
                                <div className='text-lg flex flex-wrap items-baseline'>
                                    <div>${product.discountedPrice}</div>
                                    <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.price}</div>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                    }) 
                }

                
                
            </div>
        </div>


        {/* Top Selling Products */}
        <div className="px-10 max-lg:px-2 mt-20 bg-[#f1f3f7] py-10">
            <div className='flex flex-wrap justify-between border-b border-b-gray-400 pb-2 mb-5'>
                <div className='text-3xl max-sm:text-xl flex items-center pb-2'>Top Selling Products</div>
                <div className='text-md max-sm:text-sm flex justify justify-evenly text-gray-500'>
                    <p className=' flex items-center pr-2'>View All</p>
                    <div className='flex items-center'><MdKeyboardDoubleArrowRight size={20}/></div>
                </div>
            </div>

            <div className="flex-wrap grid grid-cols-2 max-md:grid-flow-row max-md:grid-cols-none">
                {deals.topSellingProducts.map((product)=>{
                    return (<div className="flex p-5 rounded-md bg-white m-1">
                    <div className=' h-auto w-[160px] flex items-center p-1'>
                        <img className='' src={`${product.images.main}`} alt="" />
                    </div>
                    <div className='flex flex-col justify-center w-full h-fit p-1'>
                        <div className='text-gray-400 text-xs tracking-wide font-semibold'>{product.brand}</div>
                        <div className='text-sm tracking-wide max-h-[39.2px] text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap'>
                        {product.name}
                        </div>
                            <div>*****</div>
                            <div className='text-lg flex flex-wrap items-baseline'>
                            <div>${product.discountedPrice}</div>
                            <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.price}</div>
                        </div>
                    </div>
                </div>)})}
                <div className="flex p-5 rounded-md bg-white m-1">
                    <div className=' h-auto w-[160px] flex items-center p-1'>
                        <img className='' src="https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center w-full h-fit p-1'>
                        <div className='text-gray-400 text-xs tracking-wide font-semibold'>SAMSUNG</div>
                        <div className='text-sm tracking-wide max-h-[39.2px] text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap'>
                        Smart Watch Aluminum Case - Pride Edition/41mm - S/M
                        </div>

                            <div>*****</div>
                            <div className='text-lg flex flex-wrap items-baseline'>
                            <div>$500.00</div>
                            <div className='text-sm text-gray-500 font-semibold line-through px-2'>$500.00</div>
                        </div>
                    </div>
                </div>
                <div className="flex p-5 rounded-md bg-white m-1">
                    <div className=' h-auto w-[160px] flex items-center p-1'>
                        <img className='' src="https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg" alt="" />
                    </div>
                    <div className='flex flex-col justify-center w-full h-fit p-1'>
                        <div className='text-gray-400 text-xs tracking-wide font-semibold'>SAMSUNG</div>
                        <div className='text-sm tracking-wide max-h-[39.2px] text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap'>
                        Smart Watch Aluminum Case - Pride Edition/41mm - S/M
                        </div>

                            <div>*****</div>
                            <div className='text-lg flex flex-wrap items-baseline'>
                            <div>$500.00</div>
                            <div className='text-sm text-gray-500 font-semibold line-through px-2'>$500.00</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>


        {/* Recommended for you  */}
        <div className='px-10 max-lg:px-2 my-10'>
            <div className='flex flex-wrap justify-between border-b border-b-gray-400 pb-2'>
            <div className='text-3xl max-sm:text-xl flex items-center pb-2'>Recommended For You</div>
                <div className='text-md max-sm:text-sm flex justify justify-evenly text-gray-500'>
                    <p className=' flex items-center pr-2'>View All</p>
                    <div className='flex items-center'><MdKeyboardDoubleArrowRight size={20}/></div>
                </div>
            </div>

            <div className="flex justify-around flex-wrap my-10">
                { deals.recommendedProducts.map((product)=>{
                    return (
                        <div className="flex flex-col items-center justify-center w-[258px]">
                            <div className='h-auto w-auto relative group overflow-hidden'>
                                <img className='pointer-events-none' src={`${product.images.main}`} alt="" />
                                <div className="absolute h-full flex flex-col top-0 right-0 opacity-0  group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <button className="mb-1 mt-6 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Cart"><FiShoppingBag /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Wishlist"><MdFavoriteBorder /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Compare"><GoStack /></button>
                                    <button className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Quick View"><HiOutlineEye /></button>
                                </div>
                                <div className="absolute top-1 left-1">
                                    <span className='rounded-full bg-blue-400 text-white font-semibold  px-2 py-0.5 text-sm'>-{product.discountPercentage}%</span>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-gray-400 text-xs tracking-wide font-semibold'>{product.brand}</div>
                                <div className='text-sm tracking-wide'>{product.name}</div>
                                <div>*****</div>
                                <div className='text-lg flex flex-wrap items-baseline'>
                                    <div>${product.discountedPrice}</div>
                                    <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.price}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className='px-10 max-lg:px-2 mt-20 border-t py-10'>
            <div className="flex max-sm:flex-col justify-around">
                <div className="flex flex-col justify-center items-center my-3">
                    <div className='text-blue-600'><PiPackage size={30}/></div>
                    <p>Fast Delivery</p>
                    <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>Deliver in 24 hours max!</p>
                </div>
                <div className='max-lg:hidden w-px flex items-center'>
                    <div className="h-1/2 w-px bg-slate-200"></div>
                </div>
                <div className="flex flex-col justify-center items-center my-3">
                    <div className='text-blue-600'><PiPackage size={30}/></div>
                    <p>Fast Delivery</p>
                    <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>Visa, Mastercard, PayPal...!</p>
                </div>
                <div className='max-lg:hidden w-px flex items-center'>
                    <div className="h-1/2 w-px bg-slate-200"></div>
                </div>
                <div className="flex flex-col justify-center items-center my-3">
                    <div className='text-blue-600'><PiPackage size={30}/></div>
                    <p>Fast Delivery</p>
                    <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>Free Return within 15 days</p>
                </div>
                <div className='max-lg:hidden w-px flex items-center'>
                    <div className="h-1/2 w-px bg-slate-200"></div>
                </div>
                <div className="flex flex-col justify-center items-center my-3">
                    <div className='text-blue-600'><PiPackage size={30}/></div>
                    <p>Fast Delivery</p>
                    <p className='overflow-hidden text-ellipsis whitespace-nowrap text-sm'>Dedicated 24/7 support</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home