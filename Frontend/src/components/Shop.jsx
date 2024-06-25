import React, { useState, useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import RangeSlider from "svelte-range-slider-pips";
import { MdClose, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { HiOutlineEye } from "react-icons/hi2";
import {
    MdFavoriteBorder,
    MdKeyboardArrowDown,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCart } from "../store/store";
import Modal from "./Modal";


function Shop() {
    const {details} = useSelector((state)=>state.products);
    const navigate  = useNavigate();
    // console.log(details)
    const [values, setValues] = useState([33, 66]);
    const MySlider = useRef();
    const $node = useRef();
    const dispatch = useDispatch();

    let products = [...details];
    console.log(products)

    useEffect(() => {
        if (!MySlider.current) {
            MySlider.current = new RangeSlider({
                target: $node.current,
                props: {
                    values: values,
                    range: true,
                    min: 55,
                    max: 4747,
                    pips: {
                        mode: "values",
                        values: [55, 1000, 2000, 3000, 4000, 4747],
                        density: 10,
                        stepped: true,
                        format: {
                            to: (value) => `${value}`,
                        },
                    },
                },
            });
            MySlider.current.$on("change", (e) => {
                console.log(e.detail.values);
                setValues(e.detail.values);
            });
        }
    }, []);

    function handleClick() {
        const newVal = 11;
        setValues([newVal]);
        MySlider.current.$set({ values: [newVal], range: false });
    }

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

    const [productModal, setProductModal] = useState(null);
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

    const [perPage,setPerPage] = useState(5);
    const [currentPage,setCurrentPage] = useState(1);

    const handlePerPage = (event)=>{
        setPerPage(()=>event.target.value<=0 ? 5 : event.target.value)
    }

    return (
        <>
            <div className=" h-32 max-sm:h-24 bg-[url('https://umino.bersky.co/media/catalog/category/banner-digital.jpg')] flex flex-col justify-center items-center text-white">
                <h1 className=" text-3xl font-semibold">Shop</h1>
                <p>Home / Shop</p>
            </div>

            <div className="flex px-10 max-md:px-2 py-10 justify-evenly flex-wrap">
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer my-3">
                    <img
                        className="group-hover:scale-110 transition duration-400 ease-in-out"
                        src="https://umino.bersky.co/media/catalog/category/thumbnail/cate2.jpg"
                        alt=""
                    />
                    <button className="absolute font-semibold p-3 rounded-r-full rounded-l-full bottom-4 bg-white left-1/2 -translate-x-1/2 hover:bg-blue-400 hover:text-white transition duration-700 ease-in-out">
                        Macbook/PCs
                    </button>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer my-3">
                    <img
                        className="group-hover:scale-110 transition duration-400 ease-in-out"
                        src="https://umino.bersky.co/media/catalog/category/thumbnail/cate2.jpg"
                        alt=""
                    />
                    <button className="absolute font-semibold p-3 rounded-r-full rounded-l-full bottom-4 bg-white left-1/2 -translate-x-1/2 hover:bg-blue-400 hover:text-white transition duration-700 ease-in-out">
                        Macbook/PCs
                    </button>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer my-3">
                    <img
                        className="group-hover:scale-110 transition duration-400 ease-in-out"
                        src="https://umino.bersky.co/media/catalog/category/thumbnail/cate2.jpg"
                        alt=""
                    />
                    <button className="absolute font-semibold p-3 rounded-r-full rounded-l-full bottom-4 bg-white left-1/2 -translate-x-1/2 hover:bg-blue-400 hover:text-white transition duration-700 ease-in-out">
                        Macbook/PCs
                    </button>
                </div>
                <div className="relative group overflow-hidden rounded-2xl cursor-pointer my-3">
                    <img
                        className="group-hover:scale-110 transition duration-400 ease-in-out"
                        src="https://umino.bersky.co/media/catalog/category/thumbnail/cate2.jpg"
                        alt=""
                    />
                    <button className="absolute font-semibold p-3 rounded-r-full rounded-l-full bottom-4 bg-white left-1/2 -translate-x-1/2 hover:bg-blue-400 hover:text-white transition duration-700 ease-in-out">
                        Macbook/PCs
                    </button>
                </div>
            </div>

            <div className="main-container flex justify-between md:px-10 px-2 my-10">
                {/* Sidebar  */}

                <div className="sidebar w-1/4 max-lg:hidden">
                    <div className="border-b pb-6">
                        <p className="text-lg font-semibold">Now Shopping by</p>
                        <p className=" my-2">
                            <span className="px-4 py-2 text-sm bg-gray-300 rounded-lg inline-flex items-center">
                                <span className="h-full">
                                    <span className="font-bold">Price: </span>
                                    $47.47 - $4700
                                </span>
                                <button className="ml-2">
                                    <IoMdClose size={17} />
                                </button>
                            </span>
                        </p>
                        <button className="px-3 mt-2 py-1 bg-black rounded-md text-white hover:bg-blue-400">
                            Clear All
                        </button>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">
                                Category
                            </div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <ul className="text-sm font-semibold py-2">
                            <li className="py-2">
                                Macbook/PCs{" "}
                                <span className="text-gray-500">(47)</span>
                            </li>
                            <li className="py-2">
                                Macbook/PCs{" "}
                                <span className="text-gray-500">(47)</span>
                            </li>
                            <li className="py-2">
                                Macbook/PCs{" "}
                                <span className="text-gray-500">(47)</span>
                            </li>
                        </ul>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">Price</div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <div
                            className="text-black text-xs py-4"
                            ref={$node}
                        ></div>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">Rating</div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <div className="pt-4">
                            <input type="checkbox" name="" id="" />
                            <label htmlFor="" className="px-1">
                                {" "}
                                *****{" "}
                            </label>
                            <span className="text-gray-500">(47)</span>
                        </div>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">Size</div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap py-4 ">
                            <div className="px-2 py-1 border text-sm m-1">
                                32 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                64 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                128 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                256 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                256 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                256 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                256 GB
                            </div>
                            <div className="px-2 py-1 border text-sm m-1">
                                256 GB
                            </div>
                        </div>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">Size</div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap py-4 ">
                            <div className="h-[30px] w-[30px] rounded-full bg-[#6344df] cursor-pointer hover:outline-1 hover:outline hover:outline-offset-2"></div>
                        </div>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">
                                Brand Product
                            </div>
                            <div>
                                <FaMinus />
                            </div>
                        </div>
                        <div className="pt-4">
                            <div className="pt-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="px-1">
                                    {" "}
                                    Aby{" "}
                                </label>
                                <span className="text-gray-500">(47)</span>
                            </div>
                            <div className="pt-2">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="" className="px-1">
                                    {" "}
                                    Aby{" "}
                                </label>
                                <span className="text-gray-500">(47)</span>
                            </div>

                            <div className="pt-2">
                                <a
                                    href=""
                                    className="underline underline-offset-2"
                                >
                                    Show more
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="category py-6 border-b">
                        <div className="flex justify-between items-center">
                            <div className="font-semibold text-lg">
                                My Wish List
                            </div>
                            {/* <div><FaMinus /></div> */}
                        </div>
                        <div className="pt-4">
                            <div className="flex  py-4 bg-white border-b justify-between">
                                <div className="w-[75px] h-auto">
                                    <img
                                        className=""
                                        src="https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center">
                                    <div className="text-sm max-lg:text-xs tracking-wide text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                                        Smart Watch Aluminum Case - Pride
                                        Edition/41mm - S/M
                                    </div>
                                    <div className="text-lg max-lg:text-sm flex flex-wrap items-baseline">
                                        <div>$500.00</div>
                                        <div className="text-sm text-gray-500 font-semibold line-through px-2 py-2">
                                            $500.00
                                        </div>
                                        <a
                                            href=""
                                            className="underline underline-offset-4 text-sm"
                                        >
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <MdClose size={16} />
                                </div>
                            </div>
                            <div className="flex py-4 bg-white justify-between">
                                <div className="w-[75px] h-auto">
                                    <img
                                        className=""
                                        src="https://umino.bersky.co/media/catalog/product/cache/d95551324d2f056978c367b7e0c9fdf5/p/r/products_digital_32_2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex flex-col w-1/2 justify-center">
                                    <div className="text-sm max-lg:text-xs tracking-wide text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                                        Smart Watch Aluminum Case - Pride
                                        Edition/41mm - S/M
                                    </div>
                                    <div className="text-lg max-lg:text-sm flex flex-wrap items-baseline">
                                        <div>$500.00</div>
                                        <div className="text-sm text-gray-500 font-semibold line-through px-2 py-2">
                                            $500.00
                                        </div>
                                        <a
                                            href=""
                                            className="underline underline-offset-4 text-sm"
                                        >
                                            Add to Cart
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <MdClose size={16} />
                                </div>
                            </div>

                            <div className="pt-2">
                                <a href="" className="font-semibold text-sm">
                                    Go to Wish List
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar End  */}

                {/* Product List  */}

                <div className="shop-card w-full lg:pl-10">
                    <div className="flex justify-between flex-wrap w-auto mb-5">
                        <div className="max-sm:hidden">{products.length} Items</div>
                        <div className="max-sm:flex-1 max-sm:justify-between">
                            <span className="max-md:hidden">Sort by:</span>
                            <select
                                name=""
                                id=""
                                className="focus:outline-none px-3 font-semibold"
                            >
                                <option value="">Product Name</option>
                                <option value="">Product Price</option>
                                <option value="">Product Rating</option>
                                <option value="">Product Name</option>
                            </select>
                            <BiSortAlt2
                                size={20}
                                className="inline mx-3 text-thin"
                            />
                        </div>
                    </div>

                    {/* Product Cards Display */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
                        {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} product={productModal}/>}
                        {products.slice(currentPage*perPage - perPage, currentPage*perPage).map((product,index)=>{
                            return (
                                <div className="flex flex-col items-center mx-auto max-w-[258px] w-full px-1 py-4">
                                    <div className="h-auto w-auto relative group overflow-hidden cursor-pointer" onClick={()=>navigate(`/products/${product.productId}`)}>
                                        <img
                                            className="pointer-events-none"
                                            src={`${product.images.main}`}
                                            alt=""
                                        />
                                        <div className="absolute h-full flex flex-col top-0 right-0 md:opacity-0  group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <button
                                                className="mb-1 mt-6 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white"
                                                title="Add to Cart"
                                                onClick={(event)=>{handleCart(event,product)}}
                                            >
                                                <FiShoppingBag />
                                            </button>
                                            <button
                                                className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white"
                                                title="Add to Wishlist"
                                                onClick={(e)=>{e.stopPropagation()}}
                                            >
                                                <MdFavoriteBorder />
                                            </button>
                                            <button
                                                className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white"
                                                title="Add to Compare"
                                                onClick={(e)=>{e.stopPropagation()}}
                                            >
                                                <GoStack />
                                            </button>
                                            <button
                                                className="my-1 p-2 bg-white rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white"
                                                title="Quick View"
                                                onClick={(e)=>{e.stopPropagation(); openModal(e,product)}}
                                            >
                                                <HiOutlineEye />
                                            </button>
                                        </div>
                                        <div className="absolute top-1 left-1">
                                            <span className="rounded-full bg-blue-400 text-white font-semibold  px-2 py-0.5 text-sm">
                                                -{product.discountPercentage}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between flex-1">
                                        <div className="text-gray-400 text-xs tracking-wide font-semibold">
                                            {product.brand} {currentPage*perPage - perPage+index+1}
                                        </div>
                                        <div className="text-sm tracking-wide cursor-pointer" onClick={()=>navigate(`/products/${product.productId}`)}>
                                            {product.name}
                                        </div>
                                        <div>*****</div>
                                        <div className="text-lg flex flex-wrap items-baseline">
                                            <div>${product.discountedPrice}</div>
                                            <div className="text-sm text-gray-500 font-semibold line-through px-2">
                                                ${product.price}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                        
                    {/* Shop Product List Layout  */}
                    {/* <div className="hidden">
                        <div className="flex max-sm:flex-col bg-white border-b py-3">
                            <div className="w-[300px] max-sm:w-full max-sm:align-middle">
                                <img
                                    className=""
                                    src="https://umino.bersky.co/media/catalog/product/cache/319d96eb393923f802525ce8015de50d/p/r/products_digital_6_1.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="flex-1">
                                <div className="text-gray-400 text-xs tracking-wide font-semibold mb-1">
                                    SAMSUNG
                                </div>
                                <div className="mb-1 text-xl tracking-wide text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap">
                                    Smartphone S21 Ultra 5G 128GB - Unlocked
                                    International
                                </div>

                                <div className="mb-1">*****</div>
                                <div className="text-lg flex flex-wrap items-baseline">
                                    <div className="mb-1">$500.00</div>
                                    <div className="mb-1 text-sm text-gray-500 font-semibold line-through px-2">
                                        $500.00
                                    </div>
                                </div>
                                <p className="my-2 text-sm">
                                    IPad Air with a vibrant 10.9-inch Liquid
                                    Retina display. Breakthrough Apple M1 chip
                                    for faster performance, making iPad Air
                                    super-powerful for creativity and mobile
                                    gaming.
                                </p>

                                <div className="flex mt-4 flex-wrap">
                                    <button className="text-white bg-black rounded-full px-10 py-3 font-semibold mr-2 hover:bg-blue-400 transition duration-400 ease-linear">
                                        Add to cart
                                    </button>
                                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-gray-400 mr-2">
                                        <MdFavoriteBorder
                                            size={22}
                                            className="inline"
                                        />
                                    </div>
                                    <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center border border-gray-400 mr-2">
                                        <GoStack size={22} className="inline" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* Pagination  */}
                    <div className="flex justify-between items-center px-2 flex-wrap">
                        <div className="flex py-2">
                            <span 
                                className={`bg-white border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer ${currentPage==1 ? 'pointer-events-none' : ''}`}
                                onClick={()=>setCurrentPage((currPage)=>currPage-1)}
                            >
                                    <MdKeyboardDoubleArrowLeft/>
                            </span>

                            {
                                [...Array(3)].map((_,index)=>{
                                    let adder = index;
                                    if(currentPage==1) adder+=0;
                                    else adder+=-1;
                                    let pageNumber = currentPage+adder;
                                    if(pageNumber*perPage - perPage<products.length){
                                        console.log(currentPage+adder, products.length)
                                        return (
                                            <span 
                                                className={`mx-1 bg-white border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer ${pageNumber==currentPage ? 'shadow-inner shadow-blue-200' : ''}`} 
                                                onClick={()=>{setCurrentPage((curr)=>curr+adder)}}
                                            >
                                                {currentPage+adder}
                                            </span>
                                        )
                                    }
                                    
                                })
                            }

                            <span 
                                className={`bg-white border rounded-full w-10 h-10 flex items-center justify-center cursor-pointer ${(currentPage+1)*perPage - perPage>=products.length ? 'hidden' : ''}`}
                                onClick={()=>setCurrentPage((currPage)=>currPage+1)}
                            >
                                <MdKeyboardDoubleArrowRight/>
                            </span>
                        </div>
                        <div className="py-2">
                            <input type="number" value={perPage} onChange={(e)=>handlePerPage(e)} className="appearance-none border rounded-xl w-24 px-2 py-1 mx-1"/>   
                            <label className="">Per Page</label>
                        </div>
                    </div>

                </div>

                {/* Product List End  */}
            </div>


        </>
    );
}

export default Shop;
