import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdFavoriteBorder, MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.css"
import { IoMenuSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiDiscountPercentFill } from 'react-icons/ri';
import { useSelector } from "react-redux";

import { MdClose, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { HiOutlineEye } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";


function Header() {

    const navigate  = useNavigate();
    const location = useLocation();
    const [isSearchCategory,setISSearchCategory] = useState(false);
    const [searchCategory,setSearchCategory] = useState('All Categories');

    const [searchText,setSearchText] = useState('');
    const [toggleSearch, setToggleSearch] = useState(false);

    const searchbarRef = useRef();
    const searchModalRef = useRef();
    const headerRef = useRef(null);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(()=>{
        const handleOutsideClick = (e) => {
            console.log('hello',e.target)
            if (searchbarRef.current && !searchbarRef.current.contains(e.target) && searchModalRef.current && !searchModalRef.current.contains(e.target)) {
                setToggleSearch(()=>false);
            }
        };

        const id = document.getElementById('searchbar');
        id.addEventListener('focus', ()=>setToggleSearch(true))
        // id.addEventListener('change', ()=>setToggleSearch(true))

        if (toggleSearch) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    },[toggleSearch])

    useEffect(() => {
        setToggleSearch(false);
    }, [location]);

    const {details} = useSelector((state)=>state.products);

    const {cart} = useSelector((state)=>state.shopping)

    function toogleMobileMenu(){
        const menu = document.getElementById('left-menu');
    
        menu.classList.toggle('hidden');
    }

    function toggleAccordion(id) {
        const accordion = document.getElementById(id);

        if (accordion.classList.contains('h-0')) {
          accordion.style.height = `${accordion.scrollHeight}px`; // Set height to content's height to start the transition
          accordion.classList.remove('h-0');
          // setTimeout(() => {
          //   accordion.style.height = null; // Remove inline height to allow the content to expand freely
          // }, 500); // Wait for the transition to complete
        } else {
          accordion.style.height = `${accordion.scrollHeight}px`; // Set height to current content height to start the transition
          setTimeout(() => {
            accordion.classList.add('h-0');
            accordion.style.height = null; // Remove inline height to trigger the collapse transition
          }, 10); // Small delay to ensure the height is set before collapsing
        }

    }

    const handleSearchCategory = (e)=>{
        setSearchCategory(e.target.textContent);
        setISSearchCategory(()=>false);
    }


    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                setIsFixed((old)=>{
                    if(old==false){
                        return window.scrollY > 2*headerRef.current.offsetHeight
                    }
                    else{
                        return window.scrollY > 0
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`z-50 w-full bg-white shadow-md ${isFixed ? 'top-0' : ''}`} ref={headerRef}>
                {/* Main Header */}
                {/* <div className="bg-[#253380] text-white text-sm font-semibold px-10 py-2 border-b border-blue-800">
                    <div className="flex justify-between">
                        <div className="w-1/2 ">
                            <div className="flex justify-start">
                                <span className="mr-10">+222-1800-2628 </span>
                                <span>abc@gmail.com </span>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="flex justify-end">
                                <span className="mr-10 flex justify-center items-center">
                                    USD
                                    <RiArrowDropDownLine />
                                </span>
                                <span className="mr-10 flex justify-center items-center">
                                    Digital 01
                                    <RiArrowDropDownLine />
                                </span>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* Repsonsive menu  */}
                <div className="bg-[#253380] z-50 text-white text-sm font-semibold px-10 pt-3 max-md:px-2 md:hidden max-md:block">
                    <div className="flex justify-between">
                        <div className="flex items-center cursor-pointer" onClick={toogleMobileMenu}><IoMenuSharp size={28}/></div>
                        <div className=" h-1/6 overflow-hidden">
                            <Link to='/'><img
                                className=""
                                src="https://umino.bersky.co/media/logo/stores/12/logo_white.png"
                                alt=""
                                
                            />
                            </Link>
                        </div>
                        
                        <div className="flex justify-evenly">
                            <Link to='/account/wishlist'><div className="h-full flex items-center relative wishlist mx-2">
                                <MdFavoriteBorder size={30} />
                                <span className="absolute text-xs  top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">0</span>
                            </div>
                            </Link>

                            <Link to='/cart' className="flex">
                            <div className="flex ">
                                <div className="h-full flex items-center mr-1 max-sm:mr-0 relative">
                                    <AiOutlineShoppingCart size={30} />
                                    <span className="absolute text-xs top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">{cart.totalQuantity}</span>
                                </div>
                                <div className=" flex flex-col justify-center max-sm:hidden">
                                    <span className="text-xs">Cart</span>
                                    <span className="text-xs">${cart.totalAmount}</span>
                                </div>
                            </div>
                            </Link>
                            {/* <div className="h-full flex items-center relative">
                                <AiOutlineShoppingCart size={30} />
                                <span className="absolute text-xs  top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">0</span>
                            </div> */}



                            <div id="left-menu"  className="navbar-menu relative z-50 hidden">
                                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                                <nav id='left-menubar' className=" fixed top-0 left-0 bottom-0 flex flex-col max-w-sm bg-white border-r overflow-y-auto w-5/6">
                                    <div className="flex items-center mb-8 bg-black text-white px-3">
                                        {/* <a
                                            className="mr-auto text-3xl font-bold leading-none"
                                            href="#"
                                        > */}
                                        <div className="flex mr-auto text-xs">
                                            <button className="p-4">MENU</button>
                                            <button className="p-4 text-gray-400">CATEGORIES</button>
                                        </div>
                                            
                                        {/* </a> */}
                                        <button className="navbar-close" onClick={toogleMobileMenu}>
                                            <svg
                                                className="h-6 w-6 text-gray-100 cursor-pointer hover:text-gray-500"
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
                                    </div>
                                    <div className="py-6 px-6 text-black">
                                        <ul className=" cursor-pointer">
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/' onClick={toogleMobileMenu}
                                                >
                                                    Home
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/shop' onClick={toogleMobileMenu}
                                                >
                                                    Shop
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/products/0' onClick={toogleMobileMenu}
                                                >
                                                    Product
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            {/* <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/shop'
                                                >
                                                    Shop
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/cart'
                                                >
                                                    Cart
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/account'
                                                >
                                                    My Account
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/contact'
                                                >
                                                    Contact Us
                                                </NavLink>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="mt-auto py-6 px-6">
                                        <div className="pt-6">
                                            <NavLink
                                                className="block px-4 py-3 mb-2 leading-loose text-center text-white font-semibold transition duration-500 bg-gray-900 hover:bg-blue-700  rounded-xl"
                                                to='/login'
                                            >
                                                Sign In
                                            </NavLink>
                                        </div>
                                        <div className="pt-6">
                                            <NavLink
                                                className="block px-4 py-3 mb-2 leading-loose text-center text-black hover:text-white transition duration-500 font-semibold hover:bg-blue-600 rounded-xl border border-gray-400"
                                                to='/login'
                                            >
                                                Login/Register
                                            </NavLink>
                                        </div>
                                        <p className="my-4 text-xs text-center text-gray-400">
                                            <span>Copyright © 2021</span>
                                        </p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navbar */}
                <div className="bg-[#253380] relative text-white text-sm font-semibold z-40 px-10 py-6 max-md:px-2">
                    
                        {toggleSearch && <>
                            <div className="fixed inset-0 -z-40 h-full bg-black opacity-50"></div>
                            <div ref={searchModalRef} className="absolute bottom-0 left-0 z-50 h-[70vh] translate-y-full text-black bg-white w-screen px-10 py-6 max-md:px-2">
                                <div className="text-xl mb-4">Need Inspiration?</div>
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 max-h-[40vh]  lg:grid-cols-4 gap-4 my-5 overflow-y-scroll">
                                    {/* {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} product={productModal}/>} */}
                                    {details.slice(0,8).map((product,index)=>{
                                        return (
                                            <div className="flex flex-col items-center mx-auto max-w-[258px] w-full px-1 py-4">
                                                <div className="h-auto w-auto relative group overflow-hidden cursor-pointer" onClick={()=>navigate(`/products/${product.productId}`)}>
                                                    <img
                                                        className="pointer-events-none"
                                                        src={`${product.images.main}`}
                                                        alt=""
                                                    />
                                                    {/* <div className="absolute h-full flex flex-col top-0 right-0 md:opacity-0  group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-500 ease-in-out">
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
                                                    </div> */}
                                                </div>
                                                <div className="flex flex-col justify-between flex-1">
                                                    <div className="text-gray-400 text-xs tracking-wide font-semibold">
                                                        {product.brand} 
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
                                <div className="flex justify-center">
                                    <button className="px-10 py-3 bg-black text-white rounded-full">View All</button>
                                </div>
                        </div>
                        </>}

                    <div className="flex justify-between ">
                        <div className="w-1/6 max-lg:hidden">
                        <Link to='/'>
                            <img
                                src="https://umino.bersky.co/media/logo/stores/12/logo_white.png"
                                alt=""
                            />
                        </Link>
                        </div>
                        <div className="w-2/4 max-lg:w-full flex justify-center text-black">
                            <div className="relative categories max-md:hidden cursor-pointer flex rounded-l-full bg-white text-black items-center px-6 border-r border-r-gray-600" onClick={()=>setISSearchCategory((old)=>!old)}>
                                <div className="text-nowrap" >{searchCategory}</div>
                                <span className="ml-4 max-md:ml-1">
                                    <RiArrowDropDownLine />
                                </span>
                                {isSearchCategory && <div className="absolute translate-y-full bottom-0 left-0 bg-white z-50 w-full border" onClick={(e)=>e.stopPropagation()}>
                                    <div className="px-0.5">
                                        <input type="text"  className="w-full p-2 border my-1"/>
                                        <div className="p-1 max-h-40 overflow-x-auto">
                                            <ul>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>All Categories</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>Macbook & PCs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white" onClick={(e)=>{handleSearchCategory(e)}}>OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white">OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white">OLED & Smart TVs</li>
                                                <li className="py-2 px-1 hover:bg-blue-400 hover:text-white">OLED & Smart TVs</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="w-full" >
                                <input
                                    id="searchbar"
                                    className="h-full w-full px-3 py-2 focus:outline-0 max-md:rounded-l-full"
                                    type="text"
                                    placeholder="I'm looking for"
                                    ref={searchbarRef}
                                />
                                
                            </div>
                            <div>
                                <button id="searchbar-products" className="h-full w-full max-md:w-auto categories flex rounded-r-full bg-blue-500 text-white items-center px-6 max-sm:px-2 border-r border-r-gray-600">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="w-1/5 flex max-md:hidden justify-evenly">
                            <div className="flex max-md:hidden cursor-pointer" onClick={()=>navigate('/login')}>
                                <div className="h-full flex items-center mr-1">
                                    <svg
                                        width="23"
                                        height="23"
                                        viewBox="0 0 17 17"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M16.8927 15.7682C16.0329 14.3137 14.8061 13.1078 13.3338 12.27C11.8614 11.4322 10.1946 10.9914 8.49845 10.9914C6.80225 10.9914 5.13546 11.4322 3.66314 12.27C2.19082 13.1078 0.964024 14.3137 0.104236 15.7682C-0.00102398 15.9568 -0.027822 16.179 0.0295835 16.387C0.0566587 16.493 0.106188 16.592 0.174854 16.6774C0.243521 16.7627 0.329737 16.8325 0.427728 16.8821C0.554141 16.9534 0.697158 16.9903 0.842462 16.9894C0.986554 16.9954 1.12952 16.9616 1.25545 16.8917C1.38138 16.8218 1.48536 16.7185 1.5558 16.5933C2.26752 15.3886 3.2833 14.3898 4.50251 13.6958C5.72172 13.0018 7.10204 12.6367 8.50674 12.6367C9.91144 12.6367 11.2918 13.0018 12.511 13.6958C13.7302 14.3898 14.746 15.3886 15.4577 16.5933C15.5685 16.7806 15.7491 16.9169 15.9603 16.9725C16.1715 17.0281 16.3963 16.9986 16.5858 16.8903C16.6801 16.8403 16.7628 16.7711 16.8285 16.6872C16.8943 16.6034 16.9415 16.5067 16.9673 16.4035C16.998 16.298 17.0072 16.1874 16.9944 16.0783C16.9816 15.9692 16.947 15.8638 16.8927 15.7682Z"></path>
                                        <path d="M8.49966 10.2C9.83622 10.2002 11.1195 9.67091 12.0732 8.72594C13.027 7.78097 13.5752 6.49588 13.5997 5.14718C13.5997 3.78206 13.0623 2.47286 12.1059 1.50757C11.1495 0.542291 9.85226 0 8.49966 0C7.14705 0 5.84985 0.542291 4.89341 1.50757C3.93698 2.47286 3.39966 3.78206 3.39966 5.14718C3.42416 6.49588 3.97228 7.78097 4.92607 8.72594C5.87987 9.67091 7.1631 10.2002 8.49966 10.2ZM5.09966 5.14718C5.09966 4.2371 5.45787 3.3643 6.09549 2.72078C6.73312 2.07725 7.59792 1.71573 8.49966 1.71573C9.40139 1.71573 10.2662 2.07725 10.9038 2.72078C11.5414 3.3643 11.8997 4.2371 11.8997 5.14718C11.8997 6.05726 11.5414 6.93006 10.9038 7.57359C10.2662 8.21711 9.40139 8.57864 8.49966 8.57864C7.59792 8.57864 6.73312 8.21711 6.09549 7.57359C5.45787 6.93006 5.09966 6.05726 5.09966 5.14718Z"></path>
                                    </svg>
                                </div>
                                <div className=" flex flex-col justify-center " >
                                    <span className="text-xs">Sign In</span>
                                    <span className="text-xs">Account </span>
                                </div>
                            </div>

                            <Link to='account/wishlist'>
                            <div className="h-full flex items-center relative wishlist">
                                <MdFavoriteBorder size={30} />
                                <span className="absolute text-xs  top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">0</span>
                            </div>
                            </Link>

                            <Link to='/cart' className="flex">
                                <div className="flex ">
                                    <div className="h-full flex items-center mr-1 max-sm:mr-0 relative">
                                    <AiOutlineShoppingCart size={30} />
                                    <span className="absolute text-xs top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">{cart.totalQuantity}</span>
                                    </div>
                                    <div className=" flex flex-col justify-center max-sm:hidden">
                                        <span className="text-xs">Cart</span>
                                        <span className="text-xs">${cart.totalAmount}</span>
                                    </div>
                                </div>
                            </Link>
                            {/* <div className="h-full flex items-center relative">
                                <AiOutlineShoppingCart size={30} />
                                <span className="absolute text-xs  top-1 -right-1 rounded-full text-white border bg-blue-500 px-1">0</span>
                            </div> */}



                            <div id="left-menu"  className="navbar-menu relative z-50 hidden">
                                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                                <nav className=" fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm bg-white border-r overflow-y-auto">
                                    <div className="flex items-center mb-8 bg-black text-white px-3">
                                        {/* <a
                                            className="mr-auto text-3xl font-bold leading-none"
                                            href="#"
                                        > */}
                                        <div className="flex mr-auto text-xs">
                                            <button className="p-4">MENU</button>
                                            <button className="p-4 text-gray-400">CATEGORIES</button>
                                        </div>
                                            
                                        {/* </a> */}
                                        <button className="navbar-close">
                                            <svg
                                                className="h-6 w-6 text-gray-100 cursor-pointer hover:text-gray-500"
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
                                    </div>
                                    <div className="py-6 px-6 text-black">
                                        <ul className=" cursor-pointer">
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/'
                                                >
                                                    Home
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/'
                                                >
                                                    Home
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            <li className="mb-1 border-b border-b-gray-700 py-4 flex justify-between">
                                                <NavLink
                                                    className="block text-sm font-semibold hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/'
                                                >
                                                    Home
                                                </NavLink>
                                                <MdKeyboardArrowRight size={22} />
                                            </li>
                                            {/* <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/shop'
                                                >
                                                    Shop
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/cart'
                                                >
                                                    Cart
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/account'
                                                >
                                                    My Account
                                                </NavLink>
                                            </li>
                                            <li className="mb-1">
                                                <NavLink
                                                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                                                    to='/contact'
                                                >
                                                    Contact Us
                                                </NavLink>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="mt-auto py-6 px-6">
                                        <div className="pt-6">
                                            <NavLink
                                                className="block px-4 py-3 mb-2 leading-loose text-center text-white font-semibold transition duration-500 bg-gray-900 hover:bg-blue-700  rounded-xl"
                                                to='/login'
                                            >
                                                Sign In
                                            </NavLink>
                                        </div>
                                        <div className="pt-6">
                                            <NavLink
                                                className="block px-4 py-3 mb-2 leading-loose text-center text-black hover:text-white transition duration-500 font-semibold hover:bg-blue-600 rounded-xl border border-gray-400"
                                                to='/login'
                                            >
                                                Login/Register
                                            </NavLink>
                                        </div>
                                        <p className="my-4 text-xs text-center text-gray-400">
                                            <span>Copyright © 2021</span>
                                        </p>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Navbar 2 */}
                <nav className='px-10 max-md:px-2 border-b border-b-gray-500 max-md:hidden'>
                    <div className="flex h-11">
                        <div className='relative w-1/4 h-full flex items-center'>
                            <div className='mr-4'><IoMenuSharp size={28}/></div>
                            <div className="flex items-center w-full justify-between cursor-pointer" onClick={()=>toggleAccordion('accordion-1')}>
                                <div className='font-semibold'>All Departments</div>
                                <div className='font-semibold'><FaChevronDown size={10}/></div>
                            </div>
                            <div id="accordion-1" className="accordian absolute bg-white top-full z-50  w-full overflow-hidden h-0">
                                <ul className="p-5">
                                    <li className="text-base p-2 border-b">
                                        <div className="flex items-center w-full justify-between">
                                            <div className=''>Electronics</div>
                                            <div className=''><FaChevronDown size={10}/></div>
                                        </div>
                                    </li>
                                    <li className="text-base p-2 border-b">
                                        <div className="flex items-center w-full justify-between">
                                            <div className=''>Electronics</div>
                                            <div className=''><FaChevronDown size={10}/></div>
                                        </div>
                                    </li>
                                    <li className="text-base p-2 border-b">
                                        <div className="flex items-center w-full justify-between">
                                            <div className=''>Electronics</div>
                                            <div className=''><FaChevronDown size={10}/></div>
                                        </div>
                                    </li>
                                    <li className="text-base p-2 border-b">
                                        <div className="flex items-center w-full justify-between">
                                            <div className=''>Electronics</div>
                                            <div className=''><FaChevronDown size={10}/></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-1/3 px-4'>
                            <ul className='flex justify-evenly h-full'>
                                <li className='relative drop-c1 flex items-center'>
                                    <div className="flex items-center">
                                        <Link to='/'>Home</Link>
                                        <div className='font-semibold px-2'><FaChevronDown size={10}/></div>
                                    </div>
                                    <div className='absolute drop-1 bg-gray-100 w-56 z-50'>
                                        <ul className="">
                                            <li className='hover:translate-x-2 transition-all duration-400 ease-out hover:text-black'>hey</li>
                                            <li className='hover:translate-x-2 transition-all duration-400 hover:text-black'>hey</li>
                                            <li className='hover:translate-x-2 transition-all duration-400 hover:text-black'>hey</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='relative drop-c1 flex items-center'>
                                    <div className="flex items-center">
                                        <Link to='/shop'>Shop</Link>
                                        <div className='font-semibold px-2'><FaChevronDown size={10}/></div>
                                    </div>
                                    <div className='absolute drop-1 bg-gray-100 w-56 z-50'>
                                        <ul>
                                            <li className='hover:translate-x-2 transition-all duration-400 ease-out hover:text-black'>hey</li>
                                            <li className='hover:translate-x-2 transition-all duration-400 hover:text-black'>hey</li>
                                            <li className='hover:translate-x-2 transition-all duration-400 hover:text-black'>hey</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='flex items-center'>
                                    <Link to='/products/P001'> Product </Link>
                                    <div className='font-semibold px-2'><FaChevronDown size={10}/></div>
                                </li>
                                <li className='flex items-center'>
                                    Blog 
                                    <div className='font-semibold px-2'><FaChevronDown size={10}/></div>
                                </li>
                            </ul>
                        </div>
                        <div className=' ml-auto flex justify-end font-bold text-sm items-center'>
                            <div className='px-3'><RiDiscountPercentFill size={24} /></div>
                            <div>Sale $20 Off Your First Order.</div>
                        </div>
                    </div>
                </nav>                                  
            </div>
        </>
    );
}

export default Header;
