import React, { useContext, useEffect, useState } from 'react'
import { MdFavoriteBorder, MdKeyboardArrowDown, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom'
import { IoMenuSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { RiDiscountPercentFill, RiStarFill, RiStarHalfFill, RiStarLine, RiStarSFill } from 'react-icons/ri';
import { FiShoppingBag } from "react-icons/fi";
import { GoStack } from "react-icons/go";
import { HiOutlineEye } from "react-icons/hi2";
import { PiPackage } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from '../store/store';
import Modal from './Modal';

// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


import "./Home.css"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { getFeaturedProductsApi } from '../../libs/apis';
import { AiOutlineStar } from 'react-icons/ai';
// import 'bootstrap/dist/css/bootstrap.min.css';





function Home() {

    const responsiveCarousel = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const [featuredProducts, setFeaturedProducts] = useState({});
    const getFeaturedProducts = async ()=>{
        try{
            const featuredProductsList = await getFeaturedProductsApi();
            setFeaturedProducts(featuredProductsList);
            // console.log(featuredProducts)
        }
        catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getFeaturedProducts();
        // console.log(featuredProducts);
    },[])
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
        link.rel = 'stylesheet';

        if (document.head.firstChild) {
            document.head.insertBefore(link, document.head.firstChild);
          } else {
            document.head.appendChild(link);
          }
  
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js';
        document.body.appendChild(script);
  
        return () => {
          document.head.removeChild(link);
          document.body.removeChild(script);
        };
      }, []);
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
        setProductModal(()=>product);
        console.log(product,'hello')
        setIsModalOpen(()=>true);
    }
    const closeModal = () => {
        setProductModal(null);
        setIsModalOpen(false);
    }

    const deptCategory = [
        {
          "id": "1",
          "name": "Macbook & PCs",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 23,
          "link": "/macbook-pcs"
        },
        {
          "id": "2",
          "name": "Smartphones & Accessories",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 15,
          "link": "/smartphones-accessories"
        },
        {
          "id": "3",
          "name": "Tablets & E-Readers",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 8,
          "link": "/tablets-e-readers"
        },
        {
          "id": "4",
          "name": "Desktops & All-in-Ones",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 12,
          "link": "/desktops-all-in-ones"
        },
        {
          "id": "4",
          "name": "Desktops & All-in-Ones",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 12,
          "link": "/desktops-all-in-ones"
        },
        {
          "id": "4",
          "name": "Desktops & All-in-Ones",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 12,
          "link": "/desktops-all-in-ones"
        },
        {
          "id": "4",
          "name": "Desktops & All-in-Ones",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 12,
          "link": "/desktops-all-in-ones"
        },
        {
          "id": "4",
          "name": "Desktops & All-in-Ones",
          "imageSrc": "https://umino.bersky.co/media/catalog/category/thumbnail/t1_e1.png",
          "itemCount": 12,
          "link": "/desktops-all-in-ones"
        }
      ];

      useEffect(() => {
        if (featuredProducts.topSellingProductList) {
          // Force update of Carousel
          window.dispatchEvent(new Event('resize'));
        }
      }, [featuredProducts.topSellingProductList]);

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
        {featuredProducts.imageSliderList && <div id="carouselExampleAutoplaying" className="carousel slide h-[70vh] overflow-hidden max-md:h-[50vh] relative" data-bs-ride='carousel'>
            <div className="carousel-indicators" data-bs-interval="2000">
            {featuredProducts.imageSliderList?.map((_,index)=>{
                return (<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to={`${index}`} className="active" aria-current="true" aria-label={`Slide ${index+1}`}></button>)
            })}
                
                {/* <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
            </div>
            <div className="carousel-inner">
                {featuredProducts.imageSliderList?.map((slider,index)=>{
                    return (<div className={`carousel-item ${index==0 ? 'active':''}`} data-bs-interval="4000">
                        <img src="https://img.freepik.com/free-photo/fading-blue-background_53876-88684.jpg" className="d-block w-100 h-[70vh] object-cover object-center" alt="..." />
                        <div className="absolute inset-0 flex h-[70vh] max-md:h-[50vh]">
                            <div className="Xsm:w-1/3X flex justify-center sm:ml-20 max-sm:justify-center max-sm:items-center max-sm:px-3 flex-col text-white max-sm:text-center">
                                <div className="md:text-5xl textxl text-wrap font-semibold mb-1">{slider.title}</div>
                                <p className="text-3xl mb-3">${slider.price}</p>
                                <button className='bg-white md:px-4 md:py-2 max-md:p-1 rounded-full text-black mb-2 w-fit'>Shop Now → </button>
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <img src={`${slider.sliderImage}`} className="d-block  object-cover object-center" alt="..." />
                            </div>
                        </div>
                    </div>)
                })}
                
            </div>
            <button className="carousel-control-prev w-fit" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next w-fit" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        }


        

        
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
        <div className="flex flex-wrap justify-evenly px-10 py-10">
            {deptCategory.map((item)=>{
                return (
                    <div className='flex flex-col items-center cursor-pointer' onClick={()=>{}}>
                        <div className='overflow-hidden rounded-full h-[120px] w-[120px]'>
                            <img className='hover:scale-110 transition duration-500 ease-in-out ' src={`${item.imageSrc}`} alt="" />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='text-md'>{item.name}</div>
                            <div className='text-xs text-gray-500'>{item.itemCount} items</div>
                        </div>
                    </div>
                )
            })}
            
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
            <div className="flex justify-around flex-wrap my-10 slider-container overflow-clip">
                {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} productDetails={productModal}/>}
                { featuredProducts.topRatedProductList ? 
                <Slider {...responsiveCarousel} className='w-full  '>
                { featuredProducts.topRatedProductList?.map((product)=>{
                    const avgRating = product.averageRatingsDetails[0].averageRating;
                    const ratings = [1,2,3,4,5];
                    const fill = Math.floor(avgRating);
                    const Hfill = Math.ceil(avgRating)-fill;
                    const Nofill = 5-fill-Hfill;
                    // console.log(product?.id, product?.productName)
                    return (
                        <div key={product.productId} className="flex flex-col items-center my-3 w-[258px] p-3 bg-white ">
                            <div className='h-auto w-auto relative group overflow-hidden cursor-pointer' onClick={()=>navigate(`/products/${product?.id}`)}>
                                <img className='pointer-events-none' src={`${eval(product?.productGallery)[0]}`} alt=""/>
                                <div className="absolute h-full flex flex-col top-0 right-0  group-hover:-translate-x-1 group-hover:opacity-100 opacity-[0] transition duration-500 ease-in-out">
                                    <button className="mb-1 mt-6 p-2 rounded-full shadow-lg transition duration-500 bg-neutral-50 text-gray-950 hover:bg-black hover:text-white" title="Add to Cart" onClick={(event)=>{handleCart(event,product)}}><FiShoppingBag /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 bg-neutral-50 text-gray-950 hover:bg-black hover:text-white" title="Add to Wishlist"><MdFavoriteBorder /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 bg-neutral-50 text-gray-950 hover:bg-black hover:text-white" title="Add to Compare"><GoStack /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 bg-neutral-50 text-gray-950 hover:bg-black hover:text-white" title="Quick View" onClick={(event)=>{openModal(event,product)}}><HiOutlineEye /></button>
                                </div>
                                <div className="absolute top-1 left-1">
                                {product.discountedPercentage && <span className='rounded-full bg-blue-400 text-white font-semibold  px-2 py-0.5 text-sm'>-{product.discountedPercentage}%</span>}
                                </div>
                            </div>
                            <div className='flex flex-col justify-between flex-1 w-full mt-2'>
                                <div className='text-gray-400 text-xs uppercase tracking-wide font-semibold'>{product.sku}</div>
                                <div className='text-sm tracking-wide cursor-pointer' onClick={()=>navigate(`/products/${product.id}`)}>{product?.productName}</div>
                                <div className='flex py-1 items-center'>
                                {ratings.map((_,index)=>{
                                    if(index<fill){
                                        return (<RiStarFill />)
                                    }
                                    else if(index<fill+Hfill){
                                        return (<RiStarHalfFill />)
                                    }
                                    else{
                                        return (<RiStarLine />)
                                    }
                                })} 
                                 <span className='ml-1'>{Number.parseFloat(product.averageRatingsDetails[0].averageRating).toFixed(1)}</span></div>
                                <div className='text-lg flex flex-wrap items-baseline'>
                                    <div>${product.minSalePrice}</div>
                                    <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.saleStartsAt}</div>
                                </div>
                            </div>
                        </div>
                    )}) 
                }
                </Slider>:''}

                
                
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

            <div className=" grid grid-cols-2 max-md:grid-flow-row max-md:grid-cols-1 gap-3">
                {featuredProducts?.topSellingProductList?.map((product)=>{
                    return (<div className="flex sm:p-5 max-sm:p-2 rounded-md bg-white m-1">
                    <div className=' h-auto w-[160px] flex items-center p-1'>
                        <img className='' src={`${eval(product.productGallery)[0]}`} alt="" />
                    </div>
                    <div className='flex flex-col justify-center w-full h-fit p-1'>
                        <div className='text-gray-400 text-xs tracking-wide font-semibold'>{product.sku}</div>
                        <div className='text-sm tracking-wide max-h-[39.2px] text-pretty w-auto overflow-hidden text-ellipsis whitespace-nowrap'>
                        {product.productName}
                        </div>
                            <div>*****</div>
                            <div className='text-lg flex flex-wrap items-baseline'>
                            <div>${product.minSalePrice}</div>
                            <div className='text-sm text-gray-500 font-semibold line-through px-2'>${product.saleStartsAt}</div>
                        </div>
                    </div>
                </div>)})}
                {/* <div className="flex p-5 rounded-md bg-white m-1">
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
                </div> */}
                
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
                { details.map((product)=>{
                    return (
                        <div className="flex flex-col items-center my-3 w-[258px] p-3 bg-white ">
                            <div className='h-auto w-auto relative group overflow-hidden cursor-pointer' onClick={()=>navigate(`/products/${product.productId}`)}>
                                <img className='pointer-events-none' src={`${product.images.main}`} alt=""/>
                                <div className="absolute h-full flex flex-col top-0 right-0  group-hover:-translate-x-1 group-hover:opacity-100 opacity-[0] transition duration-500 ease-in-out">
                                    <button className="mb-1 mt-6 p-2 rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Cart" onClick={(event)=>{handleCart(event,product)}}><FiShoppingBag /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Wishlist"><MdFavoriteBorder /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Add to Compare"><GoStack /></button>
                                    <button className="my-1 p-2 rounded-full shadow-lg transition duration-500 hover:bg-black hover:text-white" title="Quick View" onClick={(event)=>{openModal(event,product)}}><HiOutlineEye /></button>
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