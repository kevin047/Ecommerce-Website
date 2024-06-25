import React, { useEffect, useState } from "react";
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
import ProductDetails from "../scenes/ProductDetails";
import ProductInformation from "../scenes/ProductInformation";
import ProductReview from "../scenes/ProductReview";
import AboutBrand from "../scenes/AboutBrand";
import ProductShipping from "../scenes/ProductShipping";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../store/store";

function Product() {
    
    const navigate = useNavigate();
    const {id} = useParams();
    const {details} = useSelector((state)=>state.products);
    let product = details.filter((product)=>product.productId==id)[0];
    const dispatch = useDispatch();


    const [isMediumOrLarger, setIsMediumOrLarger] = useState(window.innerWidth >= 768);
    const [isDetails, setIsDetails] = useState(true);
    const [isMoreInfo, setIsMoreInfo] = useState(false);
    const [isReview, setIsReview] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isShip, setIsShip] = useState(false);

    const [quantity, setQuantity] = useState(1);

    const handleClick = (action) => {
        setIsDetails(() => false);
        setIsAbout(() => false);
        setIsMoreInfo(() => false);
        setIsReview(() => false);
        setIsShip(() => false);
        if (action == "Details") {
            setIsDetails(() => true);
        } else if (action == "MoreInfo") {
            setIsMoreInfo(() => true);
        } else if (action == "Review") {
            setIsReview(() => true);
        } else if (action == "About") {
            setIsAbout(() => true);
        } else if (action == "Ship") {
            setIsShip(() => true);
        }
    };

    useEffect(() => {
        const handleResize = () => {
          setIsMediumOrLarger(window.innerWidth >= 768);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleCart = ()=>{
        dispatch(
            setCart(
                {
                    action:'INC',
                    product:{
                        productId: product.productId,
                        name: product.name,
                        image: product.images.main,
                        quantity: quantity,
                        unitPrice: product.discountedPrice,
                        subtotal: +(quantity*product.discountedPrice).toFixed(2),
                    }
                }
            )
        )
    }

    return (
        <>
            <div className="flex flex-wrap px-10 max-lg:px-2 py-10 border-b">
                <div className="flex sm:w-1/2">
                    <div className="flex flex-col w-[60px]">
                        <img
                            className="my-2"
                            src={`${product.images.main}`}
                            alt=""
                        />
                        
                        {product.images.others.map((imageUrl)=>{
                            return (
                                <img
                                    className="my-2"
                                    src={`${imageUrl}`}
                                    alt=""
                                />
                            )
                        })}
                        
                    </div>
                    <div className="w-full relative">
                        <img
                            src={product.images.main}
                            alt=""
                        />
                        <div className="absolute top-3 right-5 p-4 rounded-full border">
                            <LuExpand size={18} />
                        </div>
                    </div>
                </div>
                <div className="sm:w-1/2 px-2">
                    <div className=" text-3xl font-semibold tracking-wide">
                        {product.name}
                    </div>
                    <div className="my-3 text-sm text-gray-400">
                        *****
                        <span className="mx-3 tracking-wide">({product.reviewCount} Reviews) </span>
                        Add Your Review
                    </div>
                    <div className="flex flex-wrap items-baseline font-semibold py-3 my-3">
                        <div className="text-3xl text-blue-400 mr-3">
                            ${product.discountedPrice}
                        </div>
                        <div className="text-gray-400 line-through text-xl">
                            ${product.price}
                        </div>
                    </div>

                    <div className="description my-3 text-gray-700">
                        {product.description}
                    </div>

                    <div className="viewing flex pb-5 pt-3 text-md items-center border-b">
                        <span className="px-2 py-1 rounded-md bg-black text-white animate-pulse mr-2">
                            <LuEye size={18} />
                        </span>
                        <div>22 people are viewing this right now</div>
                    </div>

                    <div className="flex flex-wrap py-5 border-b">
                        <div className="flex mr-10 items-center">
                            <AiOutlineQuestionCircle
                                size={18}
                                className="mr-1"
                            />
                            <div>Ask a Question</div>
                        </div>
                        <div className="flex items-center">
                            <GoShareAndroid size={18} className="mr-1" />
                            <div>Share</div>
                        </div>
                    </div>

                    <div className="py-3">
                        <div className="text-md font-bold ">
                            Hurry Up! Only {product.stock.count} left in stock!
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-3">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: "45%" }}
                            ></div>
                        </div>
                    </div>

                    <div className="flex my-3">
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

                    <div className="">
                        <input
                            className="mr-3"
                            type="image"
                            data-action="checkout-form-submit"
                            data-checkout-url="https://umino.bersky.co/demo_digital_1/paypal/express/start/button/1/"
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-medium.png"
                            alt="Checkout with PayPal"
                            title="Checkout with PayPal"
                        />
                        <input
                            type="image"
                            data-action="checkout-form-submit"
                            data-checkout-url="https://umino.bersky.co/demo_digital_1/paypal/bml/start/button/1/"
                            src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/ppcredit-logo-medium.png"
                            alt="Checkout with PayPal"
                            title="Checkout with PayPal"
                        />
                    </div>

                    <div className="flex py-5 border-b">
                        <div className="flex mr-10 items-center">
                            <MdFavoriteBorder size={18} className="mr-1" />
                            <div>Add to Wish List</div>
                        </div>
                        <div className="flex items-center">
                            <GoStack size={18} className="mr-1" />
                            <div>Add To Compare</div>
                        </div>
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

            <div className="px-10 max-lg:px-2 py-6 border-b overflow-hidden">
            {isMediumOrLarger && (<div className="flex justify-center py-4 font-bold">
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isDetails
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Details")}
                    >
                        Details
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isMoreInfo
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("MoreInfo")}
                    >
                        More Information
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isReview
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Review")}
                    >
                        Reviews (1)
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isAbout
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("About")}
                    >
                        About Brand
                    </button>
                    <button
                        className={`py-3 px-6 mx-1 rounded-full transition duration-300 ease-in ${
                            isShip
                                ? "bg-black text-white"
                                : "bg-gray-200 hover:bg-black hover:text-white"
                        }`}
                        onClick={()=>handleClick("Ship")}
                    >
                        Shipping Returns
                    </button>
                </div>)}
            
                {!isMediumOrLarger && (
                    <div className="flex flex-col py-4">

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isDetails
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Details")}
                        >
                            <span>Details</span>
                            {!isDetails ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isDetails && <ProductDetails />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isMoreInfo
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("MoreInfo")}
                        >
                            <span>More Information</span>
                            {!isMoreInfo ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isMoreInfo && <ProductInformation info={product.moreInformation}/>}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isReview
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Review")}
                        >
                            <span>Reviews (1)</span>
                            {!isReview ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isReview && <ProductReview />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isAbout
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("About")}
                        >
                            <span>About Brand</span>
                            {!isAbout ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isAbout && <AboutBrand />}

                        <button
                            className={`py-3 px-4 my-1 flex justify-between items-center rounded-md font-bold transition duration-300 ease-in ${
                                isShip
                                    ? "bg-black text-white"
                                    : "bg-gray-200 hover:bg-black hover:text-white"
                            }`}
                            onClick={()=>handleClick("Ship")}
                        >
                            <span>Shipping Returns</span>
                            {!isShip ? <IoMdAdd size={18}/> : <FiMinus size={18}/>}
                        </button>
                        {isShip && <ProductShipping />}
                </div>)}

                {isMediumOrLarger && (<div className="max-md:hidden">
                    {isDetails && <ProductDetails />}
                    {isMoreInfo && <ProductInformation info={product.moreInformation} />}
                    {isReview && <ProductReview />}
                    {isAbout && <AboutBrand />}
                    {isShip && <ProductShipping />}
                </div>)}
            </div>
        </>
    );
}

export default Product;
